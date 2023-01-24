import { useState, useEffect } from "react";
import * as React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Box,
  Card,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Autocomplete,
} from "@mui/material";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import Router from "next/router";

export const SquadCreate = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState(0);
  const [compType, setCompType] = useState("0");
  const [userList, setUserList] = useState([]);
  const [visibleType, setVisibleType] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [squadLeader, setSquadLeader] = useState("");
  const [memberEnroll, setMemberEnroll] = useState("");
  const [runSetup, setRunSetup] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  let token = useSelector((state) => (state.Profile.itemList ? state.Profile.itemList : []));
  let data = cookies.account;
  const [open, setOpen] = useState({
    open: false,
    message: "Success",
  });

  const formik = useFormik({
    initialValues: {
      user_id: data._id ? data._id : "",
      name: "",
      description: "",
      front_image: "https://raw.githubusercontent.com/thesatyasahoo/My-codes/master/user.png",
      visibility_type: "",
      member_enroll: "",
      run_setup: "",
      payment_type: "",
      timezone: new Date(),
      squad_leaders: "",
      image: "https://raw.githubusercontent.com/thesatyasahoo/My-codes/master/user.png",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      description: Yup.string().required("Description is required."),
      visibility_type: Yup.string().required("Visibility Type is required."),
      run_setup: Yup.string().required("Run Setup is required."),
      squad_leaders: Yup.string().required("Squad Leaders is required."),
      payment_type: Yup.string().required("Payment Type is required."),
      member_enroll: Yup.string().required("Member Enroll is required."),
    }),
    onSubmit: async (values, helpers) => {
      if (!values.distance) {
        values.distance = "0";
      }
      if (!values.duration) {
        values.duration = "0";
      }
      await axios
        .post(process.env.NEXT_PUBLIC_BASE_URL_ADMIN + "createSquad", values, {
          headers: {
            authorization: cookies.token ? cookies.token : "",
          },
        })
        .then((res) => {
          setOpen({ open: true, message: "Squad Created Successfully." });
          Router.push("squad").catch(console.error);
          // handleClose()
          setTimeout(() => {
            formik.setValues(formik.initialValues);
          }, 1000);

          // helpers.setSubmitting(true);
          // dispatch(AccountHolderActions.addProfile(res.data));
        })
        .catch((error) => {
          setOpen({ open: true, message: "Failed To Create Squad !" });
          helpers.setFieldError("submit", "Please try with valid email & password!");
        });
    },
  });
  const handleClick = (message) => {
    setOpen({
      state: true,
      message: message,
    });
  };
  const getRunRoomCall = async (token) => {
    await axios
      .get(process.env.NEXT_PUBLIC_BASE_URL_ADMIN + "userList", {
        headers: {
          authorization: token,
        },
      })
      .then(async (res) => {
        let tempArray = [];
        let tempObj = {};
        await Promise.all(
          res.data.userList.map(async (e) => {
            if (e.firstname) {
              tempObj = {
                label: `${e.firstname ? e.firstname : ""} ${e.lastname ? e.lastname : ""}`,
                id: e._id,
              };
              tempArray.push(tempObj);
            }
          })
        );
        setUserList(tempArray);
        // dispatch(RunroomActions.addToAdmin(res.data.roomList));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleClose = () => {
    setOpen({
      ...open,
      state: false,
    });
  };
  const handleChange = (e) => {
    setType(e);
    formik.setFieldValue("type", e);
  };
  const handleTypeChange = (e) => {
    setCompType(e);
  };
  useEffect(() => {
    getRunRoomCall(cookies.token ? cookies.token : "");
    if (open.open === true) {
      setTimeout(() => {
        setOpen({ ...open, open: false });
      }, 1500);
    }
  }, [open]);

  const handleVisibilityType = (e) => {
    setVisibleType(e.target.value);
    formik.setFieldValue("visibility_type", e.target.value);
  };
  const handlePaymentType = (e) => {
    setPaymentType(e.target.value);
    formik.setFieldValue("payment_type", e.target.value);
  };
  return (
    <>
      <Snackbar
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
        TransitionComponent={TransitionDown}
        open={open.open}
        autoHideDuration={2500}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} sx={{ width: "100%" }}>
          {open.message}
        </Alert>
      </Snackbar>
      <Card>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 2, width: "36.5ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div style={{ width: "100%" }}>
            <TextField
              id="outlined-required"
              required
              error={Boolean(formik.touched.user_id && formik.errors.user_id)}
              helperText={formik.touched.user_id && formik.errors.user_id}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              label="User Id"
              name="user_id"
              type="text"
              value={formik.values.user_id}
              variant="outlined"
              disabled
              fullWidth
            />
            {/* <FormControl style={{ width: "31ch", marginTop: 16 }} required error={type === 0}>
              <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Type"
                value={type}
                type="number"
                onChange={(e) => handleChange(e.target.value)}
              >
                <MenuItem value={0} selected>
                  Select
                </MenuItem>
                <MenuItem value={1}>Private</MenuItem>
                <MenuItem value={2}>Public</MenuItem>
              </Select>
              {type === 0 ? <FormHelperText>Error</FormHelperText> : ""}
            </FormControl> */}
            <TextField
              fullWidth
              required
              id="outlined-required"
              label="Name"
              error={Boolean(formik.touched.name && formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name="name"
              type="text"
              value={formik.values.name}
            />
            <TextField
              fullWidth
              required
              id="outlined-required"
              label="Description"
              error={Boolean(formik.touched.description && formik.errors.description)}
              helperText={formik.touched.description && formik.errors.description}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name="description"
              type="text"
              value={formik.values.description}
            />
            <FormControl
              style={{ width: "31ch", marginTop: 16 }}
              required
              error={visibleType === ""}
            >
              <InputLabel id="demo-simple-select-label">Visibility Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Visibility Type"
                value={visibleType}
                type="text"
                onChange={(e) => handleVisibilityType(e)}
              >
                <MenuItem value={"Public"}>Public</MenuItem>
                <MenuItem value={"Private"}>Private</MenuItem>
              </Select>
              {visibleType === "" ? <FormHelperText>Error</FormHelperText> : ""}
            </FormControl>
            <FormControl
              style={{ width: "31ch", marginTop: 16, marginRight: 20, marginLeft: 20 }}
              required
              error={runSetup === ""}
            >
              <InputLabel id="demo-simple-select-label">Run Setup</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Run Setup"
                value={runSetup}
                type="text"
                onChange={(e) => {
                  setRunSetup(e.target.value);
                  formik.setFieldValue("run_setup", e.target.value);
                }}
              >
                <MenuItem value={"Members"}>Members</MenuItem>
                <MenuItem value={"Leaders"}>Leaders</MenuItem>
              </Select>
              {runSetup === "" ? <FormHelperText>Error</FormHelperText> : ""}
            </FormControl>

            <FormControl
              style={{ width: "31ch", marginTop: 16 }}
              required
              error={paymentType === ""}
            >
              <InputLabel id="demo-simple-select-label">Payment Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Payment Type"
                value={paymentType}
                type="text"
                onChange={(e) => handlePaymentType(e)}
              >
                <MenuItem value={"Free"}>Free</MenuItem>
                <MenuItem value={"One Time Pay"}>One Time Pay</MenuItem>
                <MenuItem value={"Subscription"}>Subscription</MenuItem>
              </Select>
              {paymentType === "" ? <FormHelperText>Error</FormHelperText> : ""}
            </FormControl>
            {/* <TextField
              fullWidth
              required
              id="outlined-required"
              label="Squad Leaders"
              error={Boolean(formik.touched.squad_leaders && formik.errors.squad_leaders)}
              helperText={formik.touched.squad_leaders && formik.errors.squad_leaders}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name="squad_leaders"
              type="text"
              value={formik.values.squad_leaders}
            /> */}
            <div style={{ width: "24rem", display: "inline-block" }}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                placeholder="Choose User"
                options={userList}
                sx={{ width: "24rem" }}
                onInputChange={(event, newInputValue) => {
                  setSquadLeader(newInputValue);
                  formik.setFieldValue("squad_leaders", newInputValue);
                }}
                renderInput={(params, index) => (
                  <TextField
                    error={squadLeader === ""}
                    key={index}
                    {...params}
                    label="Squad Leaders"
                  />
                )}
              />
            </div>
            {/* <TextField
              fullWidth
              required
              id="outlined-required"
              label="Member Enroll"
              error={Boolean(formik.touched.member_enroll && formik.errors.member_enroll)}
              helperText={formik.touched.member_enroll && formik.errors.member_enroll}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name="member_enroll"
              type="text"
              value={formik.values.member_enroll}
            /> */}
            <div style={{ width: "24rem", display: "inline-block" }}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                placeholder="Choose User"
                options={userList}
                sx={{ width: "24rem" }}
                onInputChange={(event, newInputValue) => {
                  setMemberEnroll(newInputValue);
                  formik.setFieldValue("member_enroll", newInputValue);
                }}
                renderInput={(params, index) => (
                  <TextField
                    error={memberEnroll === ""}
                    key={index}
                    {...params}
                    label="Member Enroll"
                  />
                )}
              />
            </div>
          </div>
          <div style={{ margin: "1rem", textAlign: "end" }}>
            <Button
              style={{ marginTop: 21 }}
              onClick={() => formik.handleSubmit()}
              disabled={
                !formik.values.name ||
                !formik.values.description ||
                !formik.values.visibility_type ||
                !formik.values.run_setup ||
                !formik.values.squad_leaders ||
                !formik.values.payment_type
              }
              variant="contained"
              size="medium"
            >
              Submit
            </Button>
            <Button
              style={{ marginLeft: 21, marginTop: 21 }}
              onClick={() => Router.push("squad").catch(console.error)}
              variant="outlined"
              size="medium"
            >
              Cancel
            </Button>
          </div>
        </Box>
      </Card>
    </>
  );
};

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}
