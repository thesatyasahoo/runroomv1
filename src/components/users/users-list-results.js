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
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import SaveAsRoundedIcon from "@mui/icons-material/SaveAsRounded";
import Snackbar from "@mui/material/Snackbar";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useCookies } from "react-cookie";

export const UsersListResults = ({ ...rest }) => {
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
  const [open, setOpen] = useState({
    open: false,
    message: "Success",
  });
  const [update, setUpdate] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    mobile: "",
    password: "",
    image: "https://raw.githubusercontent.com/thesatyasahoo/My-codes/master/user.png",
    updatedAt: new Date().toISOString(),
  });

  const { user } = useAuthContext();
  useEffect(() => {
    getRunRoomCall(cookies.token);
  }, []);
  const getRunRoomCall = async (token) => {
    await axios
      .get(process.env.NEXT_PUBLIC_BASE_URL_ADMIN + "userList", {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        console.log(res);
        setAdminArray(
          res.data.userList.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
        );
        // dispatch(RunroomActions.addToAdmin(res.data.roomList));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleView = (el) => {
    setOpenDialog1(true);
    setViewDialogObj(el);
  };
  useEffect(() => {
    if (open.open === true) {
      setTimeout(() => {
        setOpen({ ...open, open: false });
      }, 1500);
    }
  }, [open]);
  const removeEvents = async (el) => {
    // console.log(el);
    await axios
      .delete(process.env.NEXT_PUBLIC_BASE_URL_ADMIN + "deleteUser/" + el._id, {
        headers: {
          authorization: cookies.token,
        },
      })
      .then((res) => {
        setOpen({ open: true, message: "User Deleted Successfully." });
        getRunRoomCall(cookies.token);
      })
      .catch((err) => {
        setOpen({ open: true, message: "Failed To Delete User !" });
        console.log(err);
      });
  };
  const handleUpdate = (el) => {
    dialogClickOpen();
    setDialogObj(el);
    setUpdate({
      firstname: el.firstname ? el.firstname : "",
      lastname: el.lastname ? el.lastname : "",
      email: el.email ? el.email : "",
      gender: el.gender ? el.gender : "",
      mobile: el.mobile ? el.mobile : "",
      password: el.password ? el.password : "",
      image: el.image
        ? el.image
        : "https://raw.githubusercontent.com/thesatyasahoo/My-codes/master/user.png",
      updatedAt: new Date().toISOString(),
    });
  };
  const handleUpdateUser = async () => {
    await axios
      .put(process.env.NEXT_PUBLIC_BASE_URL_ADMIN + "userupdate/" + dialogObj._id, update, {
        headers: {
          authorization: cookies.token,
        },
      })
      .then((res) => {
        setOpenDialog(false);
        setOpen({ open: true, message: "User Updated Successfully." });
        getRunRoomCall(cookies.token);
      })
      .catch((err) => {
        setOpen({ open: true, message: "Failed To Update User!" });
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
        setUpdate({ ...update, image: res.data[0].path });
        setLoading(false);
        setOpen({ open: true, message: "User Updated Successfully." });
        return;
      })
      .catch((err) => {
        setOpen({ open: true, message: "Failed To Update User!" });
        console.log(err);
      });
  };
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
        <DialogTitle id="alert-dialog-title">{"User Details"}</DialogTitle>
        <hr />
        <DialogContent style={{ minWidth: "30rem" }}>
          <table className="table" style={{ borderCollapse: "separate", borderSpacing: "0 1em" }}>
            <tbody>
              <tr>
                <td scope="row" style={{ paddingRight: "3rem" }}>
                  Name :{" "}
                  {viewDialogObj.firstname
                    ? viewDialogObj.firstname + " " + viewDialogObj.lastname
                    : "NA"}
                </td>
                <td>Mobile : {viewDialogObj.mobile ? viewDialogObj.mobile : "NA"}</td>
              </tr>
              <tr>
                <td>
                  Desc:{" "}
                  {viewDialogObj.ethMnemonic && viewDialogObj.ethMnemonic.length > 20
                    ? viewDialogObj.ethMnemonic.slice(0, 20)
                    : viewDialogObj.ethMnemonic}
                </td>
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
        <DialogTitle id="alert-dialog-title">{"Update User"}</DialogTitle>
        <DialogContent style={{ minWidth: "30rem" }}>
          <div>
            <TextField
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
              fullWidth
              label="First Name"
              name="firstname"
              type="text"
              defaultValue={dialogObj.firstname}
              // value={update.firstname}
              onChange={(e) => {
                setUpdate({ ...update, firstname: e.target.value });
              }}
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
              fullWidth
              label="Last Name"
              name="name"
              type="text"
              defaultValue={dialogObj.lastname}
              // value={update.firstname}
              onChange={(e) => {
                setUpdate({ ...update, lastname: e.target.value });
              }}
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
              fullWidth
              label="Mobile"
              name="payment_type"
              type="text"
              defaultValue={dialogObj.mobile}
              // value={update.location}
              onChange={(e) => {
                setUpdate({ ...update, mobile: e.target.value });
              }}
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
              fullWidth
              label="Email"
              name="email"
              type="email"
              defaultValue={dialogObj.email}
              // value={update.organizerEmail}
              onChange={(e) => {
                setUpdate({ ...update, email: e.target.value });
              }}
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
              fullWidth
              label="Password"
              name="password"
              type="password"
              defaultValue={dialogObj.password}
              // value={update.organizerEmail}
              onChange={(e) => {
                setUpdate({ ...update, password: e.target.value });
              }}
              variant="outlined"
            />
          </div>
          <TextField
            fullWidth
            id="outlined-required"
            name="image"
            type="file"
            onChange={onFileChange}
          />
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
              onClick={(el) => handleUpdateUser(update)}
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
      <Card {...rest} sx={{ minWidth: "100%" }}>
        <TableContainer component={Paper} sx={{ minWidth: "100%" }}>
          <Table sx={{ minWidth: "100%" }}>
            <TableHead>
              <TableRow>
                <TableCell>Logo</TableCell>
                <TableCell>Created At</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Mobile</TableCell>
                {/* <TableCell>Desc</TableCell> */}
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminArray.length > 0 ? (
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
                          "https://raw.githubusercontent.com/thesatyasahoo/My-codes/master/user.png"
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
                    <TableCell>
                      {adminArray.firstname
                        ? adminArray.firstname + " " + adminArray.lastname
                        : null}
                    </TableCell>
                    <TableCell>{adminArray.mobile ? adminArray.mobile : null}</TableCell>
                    {/* <TableCell>
                      {adminArray.ethMnemonic && adminArray.ethMnemonic.length > 20
                        ? adminArray.ethMnemonic.slice(0, 20)
                        : adminArray.ethMnemonic}
                    </TableCell> */}
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
                  <TableCell colSpan={6} style={{ textAlign: "center", paddingTop: "2rem" }}>
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
