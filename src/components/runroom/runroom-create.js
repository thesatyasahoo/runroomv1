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
import "./runroom.module.css";

export const RunroomCreate = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState(0);
  const [unit, setUnit] = useState("");
  const [durationUnit, setDurationUnit] = useState("");
  const [finalFinshTime, setFinalFinishTime] = useState("");
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
      runStartTime: "",
      runFinishTime: "",
      time_date: new Date(),
      createdBy: "Admin",
      image: "https://raw.githubusercontent.com/thesatyasahoo/My-codes/master/user.png",
    },
    validationSchema: Yup.object({
      type: Yup.number().required("Type is required"),
      duration: Yup.string().required("Duration is required."),
      distance: Yup.string().required("Distance is required. "),
      runStartTime: Yup.string().required("Start Time is required."),
      runFinishTime: Yup.string().required("Finish Time is required."),
    }),
    onSubmit: async (values, helpers) => {
      values = {
        ...values,
        distance: values.distance ? `${values.distance} ${unit}` : `0 ${unit}`,
        duration: values.duration ? values.duration : 0,
        runFinishTime: finalFinshTime,
      };
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
    },
  });
  const handleClick = (message) => {
    // console.log("open");
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
                  {type === 0 ? (
                    <FormHelperText>Error : Please select atleast one</FormHelperText>
                  ) : (
                    ""
                  )}
                </FormControl>
                <TextField
                  required
                  id="outlined-required"
                  label="Distance"
                  error={Boolean(formik.touched.distance && formik.errors.distance)}
                  helperText={formik.touched.distance && formik.errors.distance}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  name="distance"
                  type="text"
                  onKeyUp={() => formik.setFieldValue("duration", `0`)}
                  value={formik.values.distance}
                />
                <FormControl style={{ width: "8rem", marginTop: 16 }} required error={unit === ""}>
                  <InputLabel id="demo-simple-select-label">Unit</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Unit"
                    value={unit}
                    type="text"
                    onChange={(e) => {
                      setUnit(e.target.value);
                    }}
                  >
                    <MenuItem value={""} selected>
                      Select
                    </MenuItem>
                    <MenuItem value={"kms"}>Kms</MenuItem>
                    <MenuItem value={"miles"}>Miles</MenuItem>
                  </Select>
                  {unit === "" ? (
                    <FormHelperText>Error : Please select atleast one</FormHelperText>
                  ) : (
                    ""
                  )}
                </FormControl>
                <TextField
                  required
                  id="outlined-required"
                  error={Boolean(formik.touched.runStartTime && formik.errors.runStartTime)}
                  helperText="Please select run start time"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  name="runStartTime"
                  type="datetime-local"
                  onKeyUp={() => formik.setFieldValue("duration", `0`)}
                  value={formik.values.runStartTime}
                />
                <TextField
                  required
                  id="outlined-required"
                  error={Boolean(formik.touched.runFinishTime && formik.errors.runFinishTime)}
                  helperText="Please select run finish time"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  name="runFinishTime"
                  type="datetime-local"
                  onKeyUp={() => formik.setFieldValue("duration", `0`)}
                  value={formik.values.runFinishTime}
                />
                <Button
                  style={{ marginTop: 21, marginLeft: "1rem" }}
                  onClick={() => {
                    formik.handleSubmit();
                  }}
                  disabled={
                    !formik.values.runFinishTime ||
                    !formik.values.runStartTime ||
                    !formik.values.distance ||
                    !formik.values.user_id ||
                    !formik.values.type
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
                  {type === 0 ? (
                    <FormHelperText>Error : Please select atleast one</FormHelperText>
                  ) : (
                    ""
                  )}
                </FormControl>
                <TextField
                  required
                  id="outlined-required"
                  error={Boolean(formik.touched.runStartTime && formik.errors.runStartTime)}
                  helperText="Please select run start time"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  name="runStartTime"
                  type="datetime-local"
                  onKeyUp={() => formik.setFieldValue("duration", `0`)}
                  value={formik.values.runStartTime}
                />
                <TextField
                  required
                  id="outlined-required"
                  className="input"
                  label="Duration"
                  error={Boolean(formik.touched.duration && formik.errors.duration)}
                  helperText={formik.touched.duration && formik.errors.duration}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  name="duration"
                  type="number"
                  value={formik.values.duration}
                  onKeyUp={(e) => {
                    if (!formik.values.runStartTime) {
                      setOpen({ open: true, message: "Please Enter Start Time First" });
                    }
                    if (formik.values.runStartTime) {
                      formik.setFieldValue("distance", `0 miles`);
                    }
                  }}
                />
                <FormControl
                  style={{ width: "8rem", marginTop: 16 }}
                  required
                  error={durationUnit === ""}
                >
                  <InputLabel id="demo-simple-select-label">Unit</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Unit"
                    value={durationUnit}
                    type="text"
                    onChange={(e) => {
                      if (!formik.values.runStartTime) {
                        setOpen({ open: true, message: "Please Enter Start Time First" });
                      }
                      if (!formik.values.duration) {
                        setOpen({ open: true, message: "Please Enter Duretion First" });
                      }
                      if (formik.values.runStartTime && formik.values.duration) {
                        // console.log(new Date(formik.values.runStartTime), "start");
                        // console.log(formik.values.duration, "duration");
                        setDurationUnit(e.target.value);
                        let startTime = new Date(formik.values.runStartTime);
                        let finishTime = "";
                        if (e.target.value === "minutes") {
                          finishTime = new Date(
                            startTime.getTime() + Number(formik.values.duration) * 60000
                          );
                          // console.log(finishTime, "finishTime m should be");
                          setFinalFinishTime(finishTime);
                          finishTime.setMinutes(finishTime.getMinutes() + 5.5 * 60);
                          // console.log(finishTime, "finishTime m");
                          formik.setFieldValue(
                            "runFinishTime",
                            finishTime.toISOString().toString().slice(0, 23)
                          );
                        } else {
                          finishTime = new Date(formik.values.runStartTime);
                          finishTime.setHours(
                            finishTime.getHours() + Number(formik.values.duration)
                          );
                          // console.log(finishTime, "finishTime h should be");
                          setFinalFinishTime(finishTime);
                          finishTime.setHours(finishTime.getHours() + 5.3);
                          // console.log(finishTime, "finishTime h");
                          formik.setFieldValue(
                            "runFinishTime",
                            finishTime.toISOString().toString().slice(0, 23)
                          );
                        }
                      }
                    }}
                  >
                    <MenuItem value={""} selected>
                      Select
                    </MenuItem>
                    <MenuItem value={"minutes"}>Minutes</MenuItem>
                    <MenuItem value={"hours"}>Hours</MenuItem>
                  </Select>
                  {durationUnit === "" ? (
                    <FormHelperText>Error : Please select atleast one</FormHelperText>
                  ) : (
                    ""
                  )}
                </FormControl>

                <TextField
                  required
                  id="outlined-required"
                  error={Boolean(formik.touched.runFinishTime && formik.errors.runFinishTime)}
                  helperText="Please select run finish time"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  name="runFinishTime"
                  type="datetime-local"
                  onKeyUp={() => formik.setFieldValue("duration", `0`)}
                  value={formik.values.runFinishTime}
                />
                <Button
                  style={{ marginTop: 21 }}
                  onClick={() => formik.handleSubmit()}
                  variant="contained"
                  size="medium"
                  disabled={
                    !formik.values.runFinishTime ||
                    !formik.values.runStartTime ||
                    !formik.values.duration ||
                    !formik.values.user_id ||
                    !formik.values.type
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
