import { useState, useEffect } from "react";
import * as React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";
import { useAuthContext } from "../../contexts/auth-context";
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

export const RunroomCreate = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState(0);
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  let token = useSelector((state) => (state.Profile.itemList ? state.Profile.itemList : []));
  let data = useSelector((state) => (state.Profile.item ? state.Profile.item : []));
  const [open, setOpen] = useState({
    state: false,
    mesage: "",
  });

  console.log(data);
  useEffect(() => {}, []);
  const formik = useFormik({
    initialValues: {
      user_id: data._id ? data._id : "",
      type: 0,
      duration: "",
      distance: "",
      time_date: new Date(),
    },
    validationSchema: Yup.object({
      type: Yup.number().required("Type is required"),
      duration: Yup.number().required("Duration is required. eg. 456"),
      distance: Yup.number().required("Distance is required. eg. 987"),
    }),
    onSubmit: async (values, helpers) => {
      console.log(values);
      try {
        await axios
          .post(process.env.NEXT_PUBLIC_RUNROOM_URL + "createRunroom", values, {
            headers: {
              authorization: cookies.token ? cookies.token : "",
            },
          })
          .then((res) => {
            console.log(res);
            handleClick("success");
            // handleClose()
            setTimeout(() => {
              formik.setValues(formik.initialValues);
            }, 1000);

            // helpers.setSubmitting(true);
            // dispatch(AccountHolderActions.addProfile(res.data));
          })
          .catch((error) => {
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
  return (
    <>
      <Snackbar
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
        TransitionComponent={TransitionDown}
        open={open.state}
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
              label="Duration"
              error={Boolean(formik.touched.duration && formik.errors.duration)}
              helperText={formik.touched.duration && formik.errors.duration}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name="duration"
              type="text"
              value={formik.values.duration}
            />
          </div>
          <div>
            <TextField
              required
              id="outlined-required"
              label="Distance"
              error={Boolean(formik.touched.distance && formik.errors.distance)}
              helperText={formik.touched.distance && formik.errors.distance}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name="distance"
              type="number"
              value={formik.values.distance}
            />
            <Button
              style={{ marginTop: 21 }}
              onClick={() => formik.handleSubmit()}
              variant="outlined"
              size="medium"
            >
              Submit
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
