import { useState, useEffect } from "react";
import * as React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Box,
  Card,
  TextField,
  Typography,
  FormHelperText,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { AdminActions } from "../../store/adminSlice";
import { useCookies } from "react-cookie";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import Router from "next/router";

export const RunroomCreate = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState(0);
  const [compType, setCompType] = useState("0");
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
      type: 0,
      duration: "",
      distance: "",
      status: "Run Started",
      time_date: new Date(),
      createdBy: "Admin",
      image: "https://raw.githubusercontent.com/thesatyasahoo/My-codes/master/user.png",
    },
    validationSchema: Yup.object({
      type: Yup.number().required("Type is required"),
      duration: Yup.number().required("Duration is required. eg. 456"),
      distance: Yup.number().required("Distance is required. eg. 987"),
    }),
    onSubmit: async (values, helpers) => {
      console.log(values);
      if (!values.distance) {
        values.distance = "0";
      }
      if (!values.duration) {
        values.duration = "0";
      }
      try {
        await axios
          .post(process.env.NEXT_PUBLIC_BASE_URL_ADMIN + "createRunroom", values, {
            headers: {
              authorization: cookies.token ? cookies.token : "",
            },
          })
          .then((res) => {
            setOpen({ open: true, message: "Runroom Created Successfully." });
            // handleClick("success");
            Router.push("runrooms").catch(console.error);
            // handleClose()
            setTimeout(() => {
              formik.setValues(formik.initialValues);
            }, 1000);

            // helpers.setSubmitting(true);
            // dispatch(AccountHolderActions.addProfile(res.data));
          })
          .catch((error) => {
            setOpen({ open: true, message: "Failed To Create Runroom !" });
            helpers.setFieldError("submit", "Please try with valid email & password!");
          });
      } catch (err) {
        console.error(err.message);
        helpers.setFieldError("submit", err.message || "Something went wrong");
        helpers.setSubmitting(false);
      }
    },
  });
  const handleClick = (message) => {
    console.log("open");
    setOpen({
      state: true,
      message: message,
    });
  };
  useEffect(() => {
    if (open.open === true) {
      setTimeout(() => {
        setOpen({ ...open, open: false });
      }, 1500);
    }
  }, [open]);
  const handleClose = () => {
    setOpen({
      ...open,
      state: false,
    });
  };
  const handleChange = (e) => {
    setType(e);
    formik.setFieldValue("type", e);
    console.log(e);
  };
  const handleTypeChange = (e) => {
    setCompType(e);
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
        {compType !== "0" ? (
          compType === "DISTANCE" ? (
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 2, width: "31ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
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
                />
                <FormControl style={{ width: "31ch", marginTop: 16 }} required error={type === 0}>
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
                </FormControl>
                <TextField
                  required
                  id="outlined-required"
                  label="Distance"
                  error={Boolean(formik.touched.distance && formik.errors.distance)}
                  helperText={formik.touched.distance && formik.errors.distance}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  onKeyUp={() => formik.setFieldValue("duration", "0")}
                  name="distance"
                  type="number"
                  value={formik.values.distance}
                />
                <Button
                  style={{ marginTop: 21 }}
                  onClick={() => formik.handleSubmit()}
                  disabled={
                    !formik.values.distance || !formik.values.user_id || !formik.values.type
                  }
                  variant="contained"
                  size="medium"
                >
                  Submit
                </Button>
                <Button
                  style={{ marginLeft: 21, marginTop: 21 }}
                  onClick={() => Router.push("runrooms").catch(console.error)}
                  variant="outlined"
                  size="medium"
                >
                  Cancel
                </Button>
              </div>
            </Box>
          ) : (
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": {
                  m: 2,
                  width: "31ch",
                  display: "inline-flex",
                  justifyContent: "space-between",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
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
                />
                <FormControl style={{ width: "31ch", marginTop: 16 }} required error={type === 0}>
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
                </FormControl>
                <TextField
                  required
                  id="outlined-required"
                  label="Duration"
                  error={Boolean(formik.touched.duration && formik.errors.duration)}
                  helperText={formik.touched.duration && formik.errors.duration}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  onKeyUp={() => formik.setFieldValue("distance", "0")}
                  name="duration"
                  type="text"
                  value={formik.values.duration}
                />
                <Button
                  style={{ marginTop: 21 }}
                  onClick={() => formik.handleSubmit()}
                  variant="contained"
                  size="medium"
                  disabled={
                    !formik.values.duration || !formik.values.user_id || !formik.values.type
                  }
                >
                  Submit
                </Button>
                <Button
                  style={{ marginLeft: 21, marginTop: 21 }}
                  onClick={() => Router.push("runrooms").catch(console.error)}
                  variant="outlined"
                  size="medium"
                >
                  Cancel
                </Button>
              </div>
            </Box>
          )
        ) : (
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 2, width: "31ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div style={{ padding: "2rem 3rem", display: "flex" }}>
              <div style={{ paddingTop: "1.8rem", marginRight: "2rem" }}>
                <span>Please Select Type Of Runroom(Distance/ Duration) Create: </span>
              </div>
              <div>
                <FormControl style={{ width: "31ch", marginTop: 16 }} required>
                  <InputLabel id="demo-simple-select-label">Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Type"
                    value={type}
                    type="number"
                    onChange={(e) => handleTypeChange(e.target.value)}
                  >
                    <MenuItem value={"0"} selected>
                      Select
                    </MenuItem>
                    <MenuItem value={"DURATION"}>Duration</MenuItem>
                    <MenuItem value={"DISTANCE"}>Distance</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </Box>
        )}
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
