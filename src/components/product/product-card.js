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
import { RunroomActions } from "../../store/runRoom";
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
    createdAt: 0,
    description: "",
    front_image: "",
    image: "",
    invite_users: [""],
    member_enroll: "",
    name: "",
    payment_type: "",
    run_setup: "",
    runroom_id: [],
    squadType: 1,
    squad_leaders: [""],
    squad_runners: [""],
    timezone: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    user_id: "",
    visibility_type: "1",
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
        // let adminArr = [];
        // res.data.roomList.map((e) => {
        //   adminArr.push({
        //     ...e,
        //     createdAt: new Date(e.createdAt),
        //     duration: new Date(e.duration),
        //   })
        // })
        setAdminArray(res.data.productList);
        // dispatch(RunroomActions.addToAdmin(res.data.productList));
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
    // console.log(el);
    await axios
      .delete(process.env.NEXT_PUBLIC_BASE_URL_ADMIN + "delete-squad/" + el.id, {
        headers: {
          authorization: cookies.token,
        },
      })
      .then((res) => {
        getRunRoomCall(cookies.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleUpdate = (el) => {
    dialogClickOpen();
    setDialogObj(el);
    setUpdate({
      createdAt: el.createdAt ? el.createdAt : new Date().toISOString(),
      description: el.description ? el.description : "",
      front_image: el.front_image ? el.front_image : "",
      image: el.image ? el.image : "",
      invite_users: el.image ? el.image : [""],
      member_enroll: el.member_enroll ? el.member_enroll : "",
      name: el.name ? el.name : "",
      payment_type: el.payment_type ? el.payment_type : "",
      run_setup: el.run_setup ? el.run_setup : "",
      runroom_id: el.runroom_id ? el.runroom_id : [""],
      squadType: el.squadType ? el.squadType : 1,
      squad_leaders: el.squad_leaders ? el.squad_leaders : [""],
      squad_runners: el.squad_runners ? el.squad_runners : [""],
      timezone: el.timezone ? el.timezone : new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      user_id: el.user_id ? el.user_id : "",
      visibility_type: el.visibility_type ? el.visibility_type : "1",
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
  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = adminArray.map((admin) => admin._id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, _id) => {
    const selectedIndex = selectedCustomerIds.indexOf(_id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, _id);
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
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
      <Card {...rest}>
        <PerfectScrollbar>
          <Box sx={{ minWidth: 1050 }}>
            <Table>
              <TableHead>
                <TableRow>
                  {/* <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCustomerIds.length === adminArray.length}
                      color="primary"
                      indeterminate={
                        selectedCustomerIds.length > 0 &&
                        selectedCustomerIds.length < adminArray.length
                      }
                      onChange={handleSelectAll}
                    />
                  </TableCell> */}
                  <TableCell>Created At</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Price</TableCell>
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
                      {/* <TableCell padding="checkbox">
                          <Checkbox
                            checked={selectedCustomerIds.indexOf(adminArray._id) !== -1}
                            onChange={(event) => handleSelectOne(event, adminArray._id)}
                            value="true"
                          />
                        </TableCell> */}

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
          </Box>
        </PerfectScrollbar>
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
