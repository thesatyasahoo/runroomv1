import { useContext, useState, useEffect } from "react";
import Router from "next/router";
import PropTypes from "prop-types";
import { Box, MenuItem, MenuList, Popover, Typography } from "@mui/material";
import { AuthContext } from "../contexts/auth-context";
import { auth, ENABLE_AUTH } from "../lib/auth";
import { useSelector, useDispatch } from "react-redux";
import { AccountHolderActions } from "../store/accountHolderSlice";
import axios from "axios";
import { useCookies } from "react-cookie";

export const AccountPopover = (props) => {
  const { anchorEl, onClose, open, ...other } = props;
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const authContext = useContext(AuthContext);
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();
  const data = cookies.account;

  // let data = useSelector((state) => (state.Profile.itemList ? state.Profile.itemList : []));
  useEffect(() => {
    getAdminApiCall(cookies.token);
  }, [cookies]);
  const getAdminApiCall = async (token) => {
    await axios
      .get(process.env.NEXT_PUBLIC_BASE_URL_ADMIN + "getProfile", {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        setUserData(res.data.userList[0]);
        setCookie("account", res.data.userList[0]);
        dispatch(AccountHolderActions.addItem(res.data.userList[0]));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSignOut = async () => {
    onClose?.();
    authContext.signOut();
    removeCookie("admin");
    removeCookie("token");
    Router.push("/sign-in").catch(console.error);
    // Check if authentication with Zalter is enabled
    // If not enabled, then redirect is not required
    if (!ENABLE_AUTH) {
      return;
    }

    // Check if auth has been skipped
    // From sign-in page we may have set "skip-auth" to "true"
    // If this has been skipped, then redirect to "sign-in" directly
    const authSkipped = globalThis.sessionStorage.getItem("skip-auth") === "true";

    if (authSkipped) {
      // Cleanup the skip auth state
      globalThis.sessionStorage.removeItem("skip-auth");

      // Redirect to sign-in page
      Router.push("/sign-in").catch(console.error);
      return;
    }

    try {
      // This can be call inside AuthProvider component, but we do it here for simplicity
      await auth.signOut();

      // Update Auth Context state
      authContext.signOut();

      // Redirect to sign-in page
      Router.push("/sign-in").catch(console.error);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: "left",
        vertical: "bottom",
      }}
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: { width: "300px" },
      }}
      {...other}
    >
      <Box
        sx={{
          py: 1.5,
          px: 2,
        }}
      >
        <Typography variant="overline">Account</Typography>
        <Typography color="text.secondary" variant="body2">
          {!data ? "NA" : data.name}
        </Typography>
        <Typography color="text.secondary" variant="body2">
          {!data ? "NA" : data.email}
        </Typography>
      </Box>
      <MenuList
        disablePadding
        sx={{
          "& > *": {
            "&:first-of-type": {
              borderTopColor: "divider",
              borderTopStyle: "solid",
              borderTopWidth: "1px",
            },
            padding: "12px 16px",
          },
        }}
      >
        <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
      </MenuList>
    </Popover>
  );
};

AccountPopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
};
