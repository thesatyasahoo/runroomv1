import { useState, useEffect } from "react";
import * as React from "react";
import Form from "react-bootstrap/Form";
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
import Router from "next/router";
import { useCookies } from "react-cookie";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";

export const ProductCreate = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState(0);
  // const [formData, setFormData] = useState(new FormData());
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  let token = useSelector((state) => (state.Profile.itemList ? state.Profile.itemList : []));
  let data = useSelector((state) => (state.Profile.item ? state.Profile.item : []));
  const [open, setOpen] = useState({
    state: false,
    message: "",
  });

  // console.log(data);
  useEffect(() => {
    getRunRoomCall(cookies.token);
    if (open.open === true) {
      setTimeout(() => {
        setOpen({ ...open, open: false });
      }, 1500);
    }
  }, [open]);
  const formik = useFormik({
    initialValues: {
      prod_name: "",
      prod_category: "",
      price: "$ ",
      added_by: "",
      prod_description: "",
      prod_size: "",
      image: "",
    },
    validationSchema: Yup.object({
      prod_name: Yup.string().required("Name is required"),
      price: Yup.string().required("Price is required."),
      added_by: Yup.string().required("Author is required."),
      image: Yup.string().required("Image is required."),
    }),
    onSubmit: async (values, helpers) => {
      console.log(values);
      try {
        await axios
          .post(process.env.NEXT_PUBLIC_BASE_URL_ADMIN + "addProduct", values, {
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
            Router.push("/products").catch(console.error);
            // helpers.setSubmitting(true);
            // dispatch(AccountHolderActions.addProfile(res.data));
          })
          .catch((error) => {
            helpers.setFieldError("submit", "Please try with valid Product");
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
  const onFileChange = async (event) => {
    // setLoading(true);
    let bytes = event.target.files[0].size;
    if (!+bytes) return "0 Bytes";

    const k = 1024;
    const dm = 2 < 0 ? 0 : 2;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    let final_image_size = `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
    if (bytes > 600000) {
      // setLoading(false);
      return alert(
        "Image size should not greater then 600 kb, your upload file size is " + final_image_size
      );
    }

    const formData = new FormData();

    // Update the formData object
    formData.append("image", event.target.files[0], event.target.files[0].name);
    // formik.setFieldValue("image", event.target.files[0]);
    return await axios
      .post(process.env.NEXT_PUBLIC_BASE_URL_ADMIN + "uploadProductImg", formData, {
        headers: {
          authorization: cookies.token,
        },
      })
      .then((res) => {
        console.log(res);
        // setImage(res.data.url);
        // setLoading(false);
        formik.setFieldValue("image", res.data.url);
      })
      .catch((err) => {
        console.log(err);
      });
    // setFormData(formData.append("image", event.target.files[0], event.target.files[0].name));
    // Details of the uploaded file
    // Request made to the backend api
    // Send formData object
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
          <div style={{ width: "100%" }}>
            <TextField
              fullWidth
              id="outlined-required"
              required
              error={Boolean(formik.touched.prod_name && formik.errors.prod_name)}
              helperText={formik.touched.prod_name && formik.errors.prod_name}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              label="Product Name"
              name="prod_name"
              type="text"
              value={formik.values.prod_name}
              variant="outlined"
            />
            <TextField
              fullWidth
              id="outlined-required"
              required
              error={Boolean(formik.touched.price && formik.errors.price)}
              helperText={formik.touched.price && formik.errors.price}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              label="Price"
              name="price"
              type="text"
              value={formik.values.price}
              variant="outlined"
            />
            <TextField
              fullWidth
              required
              id="outlined-required"
              label="Author"
              error={Boolean(formik.touched.added_by && formik.errors.added_by)}
              helperText={formik.touched.added_by && formik.errors.added_by}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name="added_by"
              type="text"
              value={formik.values.added_by}
            />
            <TextField
              fullWidth
              required
              id="outlined-required"
              label="Category"
              error={Boolean(formik.touched.prod_category && formik.errors.prod_category)}
              helperText={formik.touched.prod_category && formik.errors.prod_category}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name="prod_category"
              type="text"
              value={formik.values.prod_category}
            />
            <TextField
              fullWidth
              required
              id="outlined-required"
              label="Size"
              error={Boolean(formik.touched.prod_size && formik.errors.prod_size)}
              helperText={formik.touched.prod_size && formik.errors.prod_size}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name="prod_size"
              type="text"
              value={formik.values.prod_size}
            />
            <TextField
              fullWidth
              required
              id="outlined-required"
              label="Description"
              error={Boolean(formik.touched.prod_description && formik.errors.prod_description)}
              helperText={formik.touched.prod_description && formik.errors.prod_description}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name="prod_description"
              type="text"
              multiline
              rows={3}
              value={formik.values.prod_description}
            />
          </div>
          <div style={{ paddingLeft: "1.5rem", display: "flex", justifyContent: "space-between" }}>
            <div style={{ paddingTop: "2rem" }}>
              {" "}
              <Form.Group controlId="formFile" className="mb-3" style={{ width: "100%" }}>
                <Form.Control
                  type="file"
                  style={{ width: "100%" }}
                  onChange={(e) => onFileChange(e)}
                />
              </Form.Group>
              {Boolean(formik.touched.image && formik.errors.image) ? (
                <span style={{ color: "red", fontSize: "13px" }}>
                  Image is required<sup>*</sup>
                </span>
              ) : null}
            </div>

            <div style={{ paddingBottom: "3rem", paddingRight: "3rem" }}>
              <Button
                style={{ marginTop: 21 }}
                onClick={formik.handleSubmit}
                variant="outlined"
                size="medium"
                color="primary"
              >
                Submit
              </Button>
            </div>
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
