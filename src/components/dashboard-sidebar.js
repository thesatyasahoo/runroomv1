import { useEffect } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { Box, Avatar, Divider, Drawer, Typography, useMediaQuery } from "@mui/material";
import { ChartBar as ChartBarIcon } from "../icons/chart-bar";
import { Users as UsersIcon } from "../icons/users";
import { NavItem } from "./nav-item";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import LanIcon from "@mui/icons-material/Lan";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useCookies } from "react-cookie";

const items = [
  {
    href: "/",
    icon: <ChartBarIcon fontSize="small" />,
    title: "Dashboard",
  },
  {
    href: "/runrooms",
    icon: <LanIcon fontSize="small" />,
    title: "Runroom List",
  },
  {
    href: "/squad",
    icon: <Diversity3Icon fontSize="small" />,
    title: "Squad",
  },
  {
    href: "/users",
    icon: <UsersIcon fontSize="small" />,
    title: "Users",
  },
  {
    href: "/products",
    icon: <AdminPanelSettingsIcon fontSize="small" />,
    title: "Products",
  },
  {
    href: "/account",
    icon: <AccountCircleIcon fontSize="small" />,
    title: "Account",
  },
];

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const [cookies, setCookie, removeCookie] = useCookies(["account"]);
  let data = cookies.account;
  const router = useRouter();
  console.log(data);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          textAlign: "center",
        }}
      >
        <div>
          <Row style={{ display: "inline-flex", width: "100%" }}>
            <Col>
              <Avatar
                src={"https://raw.githubusercontent.com/thesatyasahoo/My-codes/master/user.png"}
                sx={{
                  height: 68,
                  mb: 1,
                  mt: 2,
                  mr: 2,
                  ml: 3,
                  width: 68,
                }}
              />
            </Col>
            <Col>
              <Typography
                style={{ color: "white", marginTop: "2.5rem", textTransform: "capitalize" }}
                gutterBottom
                variant="h6"
              >
                {data ? data.name : "Admin"}
              </Typography>
            </Col>
          </Row>
        </div>
        <Divider
          sx={{
            borderColor: "#2D3748",
            my: 1,
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem key={item.title} icon={item.icon} href={item.href} title={item.title} />
          ))}
        </Box>
        {/* <Divider sx={{ borderColor: '#2D3748' }} /> */}
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.900",
            color: "#FFFFFF",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.900",
          color: "#FFFFFF",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
