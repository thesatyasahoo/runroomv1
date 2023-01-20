import { useState, useEffect } from "react";
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
import Form from "react-bootstrap/Form";
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
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";

export const RunroomListResults = ({ ...rest }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [img, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [selectedFile, setSelectedFile] = useState(null);
  const [page, setPage] = useState(0);
  const [adminArray, setAdminArray] = useState([]);
  const dispatch = useDispatch();
  const [dialogObj, setDialogObj] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const [openDialog1, setOpenDialog1] = useState(false);
  const [viewDialogObj, setViewDialogObj] = useState({});
  const [unit, setUnit] = useState("");
  const [open, setOpen] = useState({
    open: false,
    message: "Success",
  });
  const [update, setUpdate] = useState({
    type: "",
    distance: "",
    duration: "",
    image: "",
    status: "",
    time_date: "",
  });

  const { user } = useAuthContext();
  useEffect(() => {
    getRunRoomCall(cookies.token);
    if (open.open === true) {
      setTimeout(() => {
        setOpen({ ...open, open: false });
      }, 1500);
    }
  }, [cookies, open]);
  const getRunRoomCall = async (token) => {
    // setLoading(true);
    await axios
      .get(process.env.NEXT_PUBLIC_BASE_URL_ADMIN + "runRoomList", {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        console.log(res);
        let tempArray = res.data.roomList.sort((a, b) => b.timestamp - a.timestamp);

        // let adminArr = [];
        // res.data.roomList.map((e) => {
        //   adminArr.push({
        //     ...e,
        //     createdAt: new Date(e.createdAt),
        //     duration: new Date(e.duration),
        //   })
        // })
        setAdminArray(tempArray);
        // setLoading(false);
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
  const removeEvents = async (el) => {
    await axios
      .delete(process.env.NEXT_PUBLIC_BASE_URL_ADMIN + "deleteRunroom/" + el._id, {
        headers: {
          authorization: cookies.token,
        },
      })
      .then((res) => {
        setOpen({ open: true, message: "Runroom Deleted Successfully." });
        getRunRoomCall(cookies.token);
      })
      .catch((err) => {
        setOpen({ open: true, message: "Failed To Delete Runroom !" });
        console.log(err);
      });
  };
  const handleUpdate = (el) => {
    dialogClickOpen();
    setDialogObj(el);
    setUpdate({
      type: el.type ? el.type : "",
      distance: el.distance ? el.distance : "",
      duration: el.duration ? el.duration : "",
      time_date: el.time_date ? el.time_date : new Date().toISOString(),
      status: el.status ? el.status : "",
      image: "https://raw.githubusercontent.com/thesatyasahoo/My-codes/master/user.png",
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
    setSelectedFile(event.target.files[0]);
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append("image", event.target.files[0], event.target.files[0].name);

    // Details of the uploaded file
    // Request made to the backend api
    // Send formData object
    return await axios
      .put(process.env.NEXT_PUBLIC_BASE_URL_ADMIN + "image_upload/" + dialogObj._id, formData, {
        headers: {
          authorization: cookies.token,
        },
      })
      .then((res) => {
        setUpdate({ ...update, image: res.data.path });
        setLoading(false);
        return setImage(res.data.path);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleUpdateRoom = async (data) => {
    await axios
      .put(process.env.NEXT_PUBLIC_BASE_URL_ADMIN + "roomUpdate/" + dialogObj._id, data, {
        headers: {
          authorization: cookies.token,
        },
      })
      .then((res) => {
        setOpen({ open: true, message: "Runroom Updated Successfully." });
        getRunRoomCall(cookies.token);
        setUpdate({
          type: "",
          distance: "",
          duration: "",
          image: "",
          status: "",
          time_date: [""],
        });
        setDialogObj({});
        dialogClose();
      })
      .catch((err) => {
        console.log(err);
        setOpen({ ope9n: true, message: "Failed To Update Runroom !" });
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
        <DialogTitle id="alert-dialog-title">{"RunRoom Details"}</DialogTitle>
        <hr />
        <DialogContent style={{ minWidth: "30rem" }}>
          <table className="table" style={{ borderCollapse: "separate", borderSpacing: "0 1em" }}>
            <tbody>
              <tr>
                <td scope="row" style={{ paddingRight: "3rem" }}>
                  Created By : {viewDialogObj.createdBy ? viewDialogObj.createdBy : "NA"}
                </td>
                <td>Distance : {viewDialogObj.distance ? viewDialogObj.distance : "NA"}</td>
              </tr>
              <tr>
                <td scope="row" style={{ paddingRight: "3rem" }}>
                  Duration :{" "}
                  {viewDialogObj.duration
                    ? new Date(viewDialogObj.duration).toLocaleDateString()
                    : "No Date Available"}
                </td>
                <td>Status : {viewDialogObj.run_status ? viewDialogObj.run_status : "NA"}</td>
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
        <DialogTitle id="alert-dialog-title">{"Update RunRoom"}</DialogTitle>
        <DialogContent style={{ minWidth: "30rem" }}>
          <div>
            <TextField
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
              fullWidth
              label="Type"
              name="type"
              type="text"
              defaultValue={dialogObj.type}
              // value={update.firstname}
              onChange={(e) => {
                setUpdate({ ...update, type: e.target.value });
              }}
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
              fullWidth
              label="Distance"
              name="distance"
              type="text"
              defaultValue={dialogObj.distance}
              // value={update.location}
              onChange={(e) => {
                setUpdate({ ...update, distance: `${e.target.value} miles` });
              }}
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
              fullWidth
              name="duration"
              type="date"
              defaultValue={dialogObj.duration}
              // value={update.organizerEmail}
              onChange={(e) => {
                setUpdate({ ...update, duration: e.target.value });
              }}
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
              fullWidth
              label="Status"
              name="status"
              type="text"
              defaultValue={dialogObj.status}
              // value={update.organizerEmail}
              onChange={(e) => {
                setUpdate({ ...update, status: e.target.value });
              }}
              variant="outlined"
            />
          </div>
          <div>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control type="file" onChange={(e) => onFileChange(e)} />
            </Form.Group>
          </div>
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
              onClick={(el) => handleUpdateRoom(update)}
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
                <TableCell>Created By</TableCell>
                <TableCell>Distance</TableCell>
                <TableCell>Run Status</TableCell>
                <TableCell>Duration</TableCell>
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
                        src={adminArray.image}
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
                    <TableCell>{adminArray.createdBy ? adminArray.createdBy : null}</TableCell>
                    <TableCell>{adminArray.distance ? adminArray.distance : null}</TableCell>
                    <TableCell>{adminArray.run_status ? adminArray.run_status : null}</TableCell>
                    <TableCell>
                      {adminArray.duration
                        ? new Date(adminArray.duration).toISOString().slice(0, 10)
                        : null}
                    </TableCell>
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
                  <TableCell colSpan={7} style={{ textAlign: "center", paddingTop: "2rem" }}>
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
