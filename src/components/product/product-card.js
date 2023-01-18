import { useState, useEffect } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useAuthContext } from "../../contexts/auth-context";
import {
  Button,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from "@mui/material";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import SaveAsRoundedIcon from "@mui/icons-material/SaveAsRounded";
import Snackbar from "@mui/material/Snackbar";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useCookies } from "react-cookie";
import CircularProgress from "@mui/material/CircularProgress";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";

export const ProductCard = ({ ...rest }) => {
  const [loading, setLoading] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [adminArray, setAdminArray] = useState([]);
  const dispatch = useDispatch();
  const [dialogObj, setDialogObj] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const [openDialog1, setOpenDialog1] = useState(false);
  const [viewDialogObj, setViewDialogObj] = useState({});
  const [update, setUpdate] = useState({
    prod_name: "",
    prod_category: "",
    price: "",
    added_by: "Admin",
    prod_description: "",
    image: "https://raw.githubusercontent.com/thesatyasahoo/My-codes/master/user.png",
    prod_size: "",
  });
  const [open, setOpen] = useState({
    open: false,
    message: "Success",
  });
  const { user } = useAuthContext();
  useEffect(() => {
    getRunRoomCall(cookies.token);
  }, []);
  const getRunRoomCall = async (token) => {
    await axios
      .get(process.env.NEXT_PUBLIC_BASE_URL_ADMIN + "productsList", {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        console.log(res);
        let adminArray = res.data.productList.sort(
          (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
        );
        setAdminArray(res.data.productList);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleView = (el) => {
    setOpenDialog1(true);
    setViewDialogObj(el);
  };
  const removeEvents = async (el) => {
    setLoading(true);
    await axios
      .delete(process.env.NEXT_PUBLIC_BASE_URL_ADMIN + "deleteProduct/" + el._id, {
        headers: {
          authorization: cookies.token,
        },
      })
      .then((res) => {
        setOpen({ open: true, message: "Product Deleted Successfully." });
        getRunRoomCall(cookies.token);
        setLoading(false);
      })
      .catch((err) => {
        setOpen({ open: true, message: "Failed To Delete Product !" });
        console.log(err);
        setLoading(false);
      });
  };
  const handleUpdate = async (el) => {
    setUpdate({
      prod_name: el.prod_name ? el.prod_name : "",
      prod_category: el.prod_category ? el.prod_category : "",
      price: el.price ? el.price : "",
      added_by: "Admin",
      prod_description: el.prod_description ? el.prod_description : "",
      image: el.image
        ? el.image
        : "https://raw.githubusercontent.com/thesatyasahoo/My-codes/master/user.png",
      prod_size: el.prod_size ? el.prod_size : "",
    });
    console.log(el);
    dialogClickOpen();
    setDialogObj(el);
  };
  const handleUpdateProduct = async (el) => {
    console.log(el);
    console.log(update);
    await axios
      .put(process.env.NEXT_PUBLIC_BASE_URL_ADMIN + "editProduct/" + dialogObj._id, el, {
        headers: {
          authorization: cookies.token,
        },
      })
      .then((res) => {
        setOpen({ open: true, message: "Product Uploaded Successfully." });
        getRunRoomCall(cookies.token);
        setDialogObj({});
        dialogClose();
      })
      .catch((err) => {
        setOpen({ open: true, message: "Failed To Update Product !" });
        console.log(err);
      });
  };
  const onFileChange = async (event) => {
    console.log(update);
    console.log(dialogObj);
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
    // setSelectedFile(event.target.files[0]);
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append("image", event.target.files[0], event.target.files[0].name);

    return await axios
      .put(process.env.NEXT_PUBLIC_BASE_URL_ADMIN + "addProdPic/" + dialogObj._id, formData, {
        headers: {
          authorization: cookies.token,
        },
      })
      .then((res) => {
        setLoading(false);
        setUpdate({ ...update, image: res.data.url });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  const dialogClose = () => {
    setOpenDialog(false);
  };
  const dialogClickOpen = () => {
    setOpenDialog(true);
  };
  const dialogClose1 = () => {
    setOpenDialog1(false);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };
  useEffect(() => {
    getRunRoomCall(cookies.token);
    if (open.open === true) {
      setTimeout(() => {
        setOpen({ ...open, open: false });
      }, 1500);
    }
  }, [open]);
  return (
    <>
      <Snackbar
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
        open={open.open}
        message={open.message}
        onClick={() => setOpen({ ...open, open: false })}
        style={{ cursor: "pointer" }}
        color="danger"
      />
      <Dialog
        open={openDialog1}
        maxWidth="lg"
        onClose={dialogClose1}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Product Details"}</DialogTitle>
        <hr />
        <DialogContent style={{ minWidth: "30rem" }}>
          <table className="table" style={{ borderCollapse: "separate", borderSpacing: "0 1em" }}>
            <tbody>
              <tr>
                <td scope="row" style={{ paddingRight: "3rem" }}>
                  Name : {viewDialogObj.prod_name ? viewDialogObj.prod_name : "NA"}
                </td>
                <td>Price : {viewDialogObj.price ? viewDialogObj.price : "NA"}</td>
              </tr>
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <Button
            fullWidth
            size="small"
            sx={{ mt: 2 }}
            onClick={() => dialogClose1()}
            variant="contained"
            color="info"
          >
            close
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openDialog}
        maxWidth="lg"
        onClose={dialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Update Product"}</DialogTitle>
        <DialogContent style={{ minWidth: "30rem" }}>
          <div>
            <TextField
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
              fullWidth
              label="Name"
              name="prod_name"
              type="text"
              defaultValue={dialogObj.prod_name}
              // value={update.firstname}
              onChange={(e) => {
                setUpdate({ ...update, prod_name: e.target.value });
              }}
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
              fullWidth
              label="Product Category"
              name="prod_category"
              type="text"
              defaultValue={dialogObj.prod_category}
              // value={update.location}
              onChange={(e) => {
                setUpdate({ ...update, prod_category: e.target.value });
              }}
              variant="outlined"
            />
          </div>

          <div>
            <TextField
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
              fullWidth
              label="Price"
              name="price"
              type="text"
              defaultValue={dialogObj.price}
              // value={update.location}
              onChange={(e) => {
                setUpdate({ ...update, price: e.target.value });
              }}
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
              fullWidth
              label="Author"
              name="added_by"
              type="text"
              defaultValue={dialogObj.added_by}
              // value={update.location}
              onChange={(e) => {
                setUpdate({ ...update, added_by: e.target.value });
              }}
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
              fullWidth
              label="Description"
              name="prod_description"
              type="text"
              defaultValue={dialogObj.prod_description}
              // value={update.location}
              onChange={(e) => {
                setUpdate({ ...update, prod_description: e.target.value });
              }}
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
              fullWidth
              label="Size"
              name="prod_size"
              type="text"
              defaultValue={dialogObj.prod_size}
              // value={update.location}
              onChange={(e) => {
                setUpdate({ ...update, prod_size: e.target.value });
              }}
              variant="outlined"
            />
          </div>
          <div>
            <Form.Group controlId="formFile" className="mb-3" style={{ width: "100%" }}>
              <Form.Control
                type="file"
                style={{ width: "100%" }}
                onChange={(e) => onFileChange(e)}
              />
            </Form.Group>
          </div>
          {/* <div>
            <TextField
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
              fullWidth
              label="Run Status"
              name="run_setup"
              type="text"
              defaultValue={dialogObj.run_setup}
              // value={update.organizerEmail}
              onChange={(e) => {
                setUpdate({ ...update, run_setup: e.target.value });
              }}
              variant="outlined"
            />
          </div> */}
        </DialogContent>
        <DialogActions>
          {loading === true ? (
            <div style={{ textAlign: "center", marginTop: "1rem", width: "100%" }}>
              <CircularProgress color="primary" style={{ marginLeft: "2rem" }} />
            </div>
          ) : (
            <Button
              fullWidth
              size="small"
              sx={{ mt: 2 }}
              onClick={(el) => handleUpdateProduct(update)}
              variant="contained"
            >
              Update
            </Button>
          )}
          <Button
            fullWidth
            size="small"
            sx={{ mt: 2 }}
            onClick={() => dialogClose()}
            variant="contained"
            color="info"
          >
            close
          </Button>
        </DialogActions>
      </Dialog>
      <Card {...rest}>
        <TableContainer component={Paper} sx={{ minWidth: "100%" }}>
          <Table sx={{ minWidth: "100%" }}>
            <TableHead>
              <TableRow>
                <TableCell>Logo</TableCell>
                <TableCell>Created At</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminArray.length > 0 && loading === false ? (
                adminArray.map((adminArray) => (
                  <TableRow
                    hover
                    key={adminArray._id}
                    selected={selectedCustomerIds.indexOf(adminArray._id) !== -1}
                  >
                    <TableCell>
                      <img
                        alt={"...loading"}
                        src={
                          adminArray.image
                            ? adminArray.image
                            : "https://raw.githubusercontent.com/thesatyasahoo/My-codes/master/user.png"
                        }
                        style={{
                          height: "3rem",
                          width: "3rem",
                          borderRadius: "50%",
                        }}
                      />{" "}
                    </TableCell>
                    <TableCell>
                      {adminArray.createdAt
                        ? new Date(adminArray.createdAt).toLocaleDateString()
                        : null}
                    </TableCell>
                    <TableCell>{adminArray.prod_name ? adminArray.prod_name : null}</TableCell>
                    <TableCell>{adminArray.price ? adminArray.price : null}</TableCell>
                    <TableCell>
                      <VisibilityRoundedIcon
                        color="info"
                        onClick={() => handleView(adminArray)}
                        style={{ marginRight: "0.3rem", cursor: "pointer" }}
                      />
                      <SaveAsRoundedIcon
                        color="success"
                        onClick={() => handleUpdate(adminArray)}
                        style={{ marginRight: "0.3rem", cursor: "pointer" }}
                      />
                      <DeleteForeverIcon
                        color="success"
                        onClick={() => removeEvents(adminArray)}
                        style={{ cursor: "pointer", color: "red" }}
                      />
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow
                  hover
                  key={adminArray._id}
                  selected={selectedCustomerIds.indexOf(adminArray._id) !== -1}
                >
                  <TableCell colSpan={5} style={{ textAlign: "center", paddingTop: "2rem" }}>
                    <CircularProgress color="primary" size={80} style={{ marginLeft: "2rem" }} />
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={adminArray.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </Card>
    </>
  );
};
