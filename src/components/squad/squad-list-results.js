import { useState, useEffect } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import { format } from "date-fns";
import { useAuthContext } from "../../contexts/auth-context";
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { getInitials } from "../../utils/get-initials";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { AdminActions } from "../../store/adminSlice";
import { RunroomActions } from "../../store/runRoom";

export const SquadListResults = ({ ...rest }) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [adminArray, setAdminArray] = useState([]);
  const dispatch = useDispatch();

  const { user } = useAuthContext();
  useEffect(() => {
    getRunRoomCall(user.access_token);
  }, []);
  const getRunRoomCall = async (token) => {
    await axios
      .get(process.env.NEXT_PUBLIC_RUNROOM_URL + "runRoomList", {
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
        setAdminArray(res.data.roomList);
        dispatch(RunroomActions.addToAdmin(res.data.roomList));
      })
      .catch((err) => {
        console.log(err);
      });
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
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCustomerIds.length === adminArray.length}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0 &&
                      selectedCustomerIds.length < adminArray.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>Created At</TableCell>
                <TableCell>Distance</TableCell>
                <TableCell>Duration</TableCell>
                <TableCell>Run Status</TableCell>
                <TableCell>Type</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminArray.length > 0
                ? adminArray.slice(0, limit).map((adminArray) => (
                    <TableRow
                      hover
                      key={adminArray._id}
                      selected={selectedCustomerIds.indexOf(adminArray._id) !== -1}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={selectedCustomerIds.indexOf(adminArray._id) !== -1}
                          onChange={(event) => handleSelectOne(event, adminArray._id)}
                          value="true"
                        />
                      </TableCell>
                      {/* <TableCell>
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <Avatar src={adminArray.avatarUrl} sx={{ mr: 2 }}>
                        {getInitials(adminArray.name)}
                      </Avatar>
                      <Typography color="textPrimary" variant="body1">
                        {adminArray.name}
                      </Typography>
                    </Box>
                  </TableCell> */}
                      <TableCell>
                        {adminArray.createdAt
                          ? new Date(adminArray.createdAt).toLocaleDateString()
                          : null}
                      </TableCell>
                      <TableCell>{adminArray.distance ? adminArray.distance : null}</TableCell>
                      <TableCell>
                        {adminArray.duration
                          ? new Date(adminArray.duration).toLocaleDateString()
                          : null}
                      </TableCell>
                      <TableCell>{adminArray.run_status ? adminArray.distance : null}</TableCell>
                      <TableCell>{adminArray.type ? adminArray.distance : null}</TableCell>
                    </TableRow>
                  ))
                : null}
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
  );
};
