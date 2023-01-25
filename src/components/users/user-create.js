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
} from "@mui/material";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import Router from "next/router";

export const UserCreate = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [compType, setCompType] = useState("0");
  const [gender, setGender] = useState("0");
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  let token = useSelector((state) => (state.Profile.itemList ? state.Profile.itemList : []));
  let data = cookies.account;
  const [open, setOpen] = useState({
    open: false,
    message: "Success",
  });

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      image: "https://raw.githubusercontent.com/thesatyasahoo/My-codes/master/user.png",
      mobile: "",
      // password: "",
      phone_code: "",
      gender: gender,
      creted_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("First name is required"),
      lastname: Yup.string().required("Last name is required"),
      email: Yup.string().email().required("Email is required."),
      image: Yup.string().required("Image is required."),
      mobile: Yup.string().required("Mobile is required."),
      // password: Yup.string().min(5).max(15).required("Password is required."),
      gender: Yup.string().required("Gender is required."),
    }),
    onSubmit: async (values, helpers) => {
      console.log(values);
      if (!values.distance) {
        values.distance = "0";
      }
      if (!values.duration) {
        values.duration = "0";
      }
      await axios
        .post(process.env.NEXT_PUBLIC_BASE_URL_ADMIN + "addUser", values, {
          headers: {
            authorization: cookies.token ? cookies.token : "",
          },
        })
        .then((res) => {
          setOpen({ open: true, message: "User Created Successfully." });
          Router.push("users").catch(console.error);
          // handleClose()
          setTimeout(() => {
            formik.setValues(formik.initialValues);
          }, 1000);

          // helpers.setSubmitting(true);
          // dispatch(AccountHolderActions.addProfile(res.data));
        })
        .catch((error) => {
          setOpen({ open: true, message: "Failed To Create User !" });
          // helpers.setFieldError("submit", "Please try with valid email & password!");
        });
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
  const onFileChange = async (event) => {
    console.log(event.target.files[0]);
    setLoading(true);
    let bytes = event.target.files[0].size;
    if (!+bytes) return "0 Bytes";

    const k = 1024;
    const dm = 2 < 0 ? 0 : 2;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    let final_image_size = `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
    if (bytes > 600000) {
      setLoading(false);
      return alert(
        "Image size should not greater then 600 kb, your upload file size is " + final_image_size
      );
    }
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append("image", event.target.files[0], event.target.files[0].name);

    // Details of the uploaded file
    // Request made to the backend api
    // Send formData object
    return await axios
      .post(process.env.NEXT_PUBLIC_BASE_URL_ADMIN + "image_upload/", formData, {
        headers: {
          authorization: cookies.token,
        },
      })
      .then((res) => {
        console.log(res.data[0].path);
        formik.setFieldValue("image", res.data[0].path);
        setLoading(false);
        return;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChangeGender = (e) => {
    setGender(e);
    formik.setFieldValue("gender", e);
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
              error={Boolean(formik.touched.firstname && formik.errors.firstname)}
              helperText={formik.touched.firstname && formik.errors.firstname}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              label="First Name"
              name="firstname"
              type="text"
              value={formik.values.firstname}
              variant="outlined"
              fullWidth
            />
            <TextField
              fullWidth
              required
              id="outlined-required"
              label="Last Name"
              error={Boolean(formik.touched.lastname && formik.errors.lastname)}
              helperText={formik.touched.lastname && formik.errors.lastname}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name="lastname"
              type="text"
              value={formik.values.lastname}
            />
            <TextField
              fullWidth
              required
              id="outlined-required"
              label="Email"
              error={Boolean(formik.touched.email && formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name="email"
              type="email"
              value={formik.values.email}
            />
            <FormControl style={{ width: "31ch", marginTop: 16 }} required error={gender === 0}>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Gender"
                value={gender}
                type="text"
                onChange={(e) => handleChangeGender(e.target.value)}
              >
                <MenuItem value={"0"} selected>
                  Select
                </MenuItem>
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"female"}>Female</MenuItem>
                <MenuItem value={"others"}>Others</MenuItem>
              </Select>
              {gender === 0 ? (
                <FormHelperText>Error : Please select atleast one</FormHelperText>
              ) : (
                ""
              )}
            </FormControl>
            {/* <TextField
              fullWidth
              required
              id="outlined-required"
              label="Gender"
              error={Boolean(formik.touched.gender && formik.errors.gender)}
              helperText={formik.touched.gender && formik.errors.gender}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name="gender"
              type="text"
              value={formik.values.gender}
            /> */}
            <TextField
              fullWidth
              required
              id="outlined-required"
              label="Mobile"
              error={Boolean(formik.touched.mobile && formik.errors.mobile)}
              helperText={formik.touched.mobile && formik.errors.mobile}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name="mobile"
              type="text"
              value={formik.values.mobile}
            />
            {/* <TextField
              fullWidth
              required
              id="outlined-required"
              label="Password"
              error={Boolean(formik.touched.password && formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name="password"
              type="password"
              value={formik.values.password}
            /> */}
            <TextField
              fullWidth
              id="outlined-required"
              name="image"
              type="file"
              onChange={onFileChange}
            />
            {/* <Form.Group controlId="formFile" className="mb-3">
              <Form.Control type="file" onChange={(e) => onFileChange(e)} />
            </Form.Group> */}
            <Button
              style={{ marginTop: 21 }}
              onClick={() => formik.handleSubmit()}
              disabled={
                !formik.values.firstname ||
                !formik.values.lastname ||
                !formik.values.email ||
                !formik.values.image ||
                !formik.values.mobile ||
                !formik.values.gender
              }
              variant="contained"
              size="medium"
            >
              Submit
            </Button>
            <Button
              style={{ marginLeft: 21, marginTop: 21 }}
              onClick={() => Router.push("users").catch(console.error)}
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
