import { useState, useEffect } from "react";
import { useAuthContext } from "../../contexts/auth-context";
import {
  Button,
  Card,
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
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";

export const SquadListResults = ({ ...rest }) => {
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
    name: "",
    image: "",
    front_image: "",
    description: "",
    updatedAt: new Date().toISOString(),
    payment_type: "",
    run_setup: "",
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
      .get(process.env.NEXT_PUBLIC_BASE_URL_ADMIN + "squadList", {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        console.log(res);
        let adminArr = res.data.squadList.sort(
          (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
        );
        // res.data.roomList.map((e) => {
        //   adminArr.push({
        //     ...e,
        //     createdAt: new Date(e.createdAt),
        //     duration: new Date(e.duration),
        //   })
        // })
        setAdminArray(adminArr);
        // dispatch(RunroomActions.addToAdmin(res.data.squadList));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleView = (el) => {
    console.log(el);
    setOpenDialog1(true);
    setViewDialogObj(el);
  };
  const removeEvents = async (el) => {
    // console.log(el);
    await axios
      .delete(process.env.NEXT_PUBLIC_BASE_URL_ADMIN + "delete-squad/" + el.id, {
        headers: {
          authorization: cookies.token,
        },
      })
      .then((res) => {
        setOpen({ open: true, message: "Squad Deleted Successfully." });
        getRunRoomCall(cookies.token);
      })
      .catch((err) => {
        setOpen({ open: true, message: "Failed To Delete Squad!" });
        console.log(err);
      });
  };
  const handleUpdate = async (el) => {
    console.log(el);
    dialogClickOpen();
    setDialogObj(el);
    setUpdate({
      ...update,
      name: el.name ? el.name : "",
      image: el.image
        ? el.image
        : "https://raw.githubusercontent.com/thesatyasahoo/My-codes/master/user.png",
      front_image: el.front_image
        ? el.front_image
        : "https://raw.githubusercontent.com/thesatyasahoo/My-codes/master/user.png",
      description: el.description ? el.description : "",
      updatedAt: el.updatedAt ? el.updatedAt : new Date().toISOString(),
      payment_type: el.payment_type ? el.payment_type : "",
      run_setup: el.run_setup ? el.run_setup : "",
    });
  };
  const handleUpdateSquad = async () => {
    console.log(viewDialogObj);
    await axios
      .put(process.env.NEXT_PUBLIC_BASE_URL_ADMIN + "updateSquad/" + dialogObj._id, update, {
        headers: {
          authorization: cookies.token,
        },
      })
      .then((res) => {
        setOpenDialog(false);
        setOpen({ open: true, message: "Squad Updated Successfully." });
        getRunRoomCall(cookies.token);
      })
      .catch((err) => {
        setOpen({ open: true, message: "Failed To Update!" });
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
        <DialogTitle id="alert-dialog-title">{"Squad Details"}</DialogTitle>
        <hr />
        <DialogContent style={{ minWidth: "30rem" }}>
          <table className="table" style={{ borderCollapse: "separate", borderSpacing: "0 1em" }}>
            <tbody>
              <tr>
                <td scope="row" style={{ paddingRight: "3rem" }}>
                  Name : {viewDialogObj.name ? viewDialogObj.name : "NA"}
                </td>
                <td>
                  Payment Type : {viewDialogObj.payment_type ? viewDialogObj.payment_type : "NA"}
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
        <DialogTitle id="alert-dialog-title">{"Update Squad"}</DialogTitle>
        <DialogContent style={{ minWidth: "30rem" }}>
          <div>
            <TextField
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
              fullWidth
              label="Name"
              name="name"
              type="text"
              defaultValue={dialogObj.name}
              // value={update.firstname}
              onChange={(e) => {
                setUpdate({ ...update, name: e.target.value });
              }}
              variant="outlined"
            />
            {/* {oldPass.status ? (
              oldPass.status === 200 ? (
                <p style={{ color: "#5cb85c", textAlign: "center" }}>{oldPass.message}</p>
              ) : (
                <p style={{ color: "red", textAlign: "center" }}>{oldPass.message}</p>
              )
            ) : null} */}
          </div>
          <div>
            <TextField
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
              fullWidth
              label="Payment Type"
              name="payment_type"
              type="text"
              defaultValue={dialogObj.payment_type}
              // value={update.location}
              onChange={(e) => {
                setUpdate({ ...update, payment_type: e.target.value });
              }}
              variant="outlined"
            />
            {/* {newPass.status ? (
              newPass.status === 200 ? (
                <p style={{ color: "#5cb85c", textAlign: "center" }}>{newPass.message}</p>
              ) : (
                <p style={{ color: "red", textAlign: "center" }}>{newPass.message}</p>
              )
            ) : null} */}
          </div>
          <div>
            <TextField
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
              fullWidth
              label="Run Setup"
              name="run_setup"
              type="text"
              defaultValue={dialogObj.run_setup}
              // value={update.organizerEmail}
              onChange={(e) => {
                setUpdate({ ...update, run_setup: e.target.value });
              }}
              variant="outlined"
            />
            {/* {newPass.status ? (
              newPass.status === 200 ? (
                <p style={{ color: "#5cb85c", textAlign: "center" }}>{newPass.message}</p>
              ) : (
                <p style={{ color: "red", textAlign: "center" }}>{newPass.message}</p>
              )
            ) : null} */}
          </div>

          <div>
            <TextField
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
              fullWidth
              label="Payment Type"
              name="mobileNo"
              type="text"
              defaultValue={dialogObj.payment_type}
              // value={update.mobileNo}
              onChange={(e) => {
                setUpdate({ ...update, payment_type: e.target.value });
              }}
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
              fullWidth
              label="Run Setup"
              name="run_setup"
              type="text"
              defaultValue={dialogObj.run_setup}
              // value={update.mobileNo}
              onChange={(e) => {
                setUpdate({ ...update, run_setup: e.target.value });
              }}
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
              fullWidth
              label="Description"
              name="description"
              type="text"
              multiline
              rows={3}
              defaultValue={dialogObj.description}
              // value={update.description}
              onChange={(e) => {
                setUpdate({ ...update, description: e.target.value });
              }}
              variant="outlined"
            />
          </div>
          {/* <div>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control type="file" onChange={(e) => onFileChange(e)} />
            </Form.Group>
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
              onClick={(el) => handleUpdateSquad(update)}
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
                <TableCell>Payment Type</TableCell>
                <TableCell>Run Setup</TableCell>
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
                        src={"/static/avatar.png"}
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
                    <TableCell>{adminArray.name ? adminArray.name : null}</TableCell>
                    <TableCell>
                      {adminArray.payment_type ? adminArray.payment_type : null}
                    </TableCell>
                    <TableCell>{adminArray.run_setup ? adminArray.run_setup : null}</TableCell>
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
