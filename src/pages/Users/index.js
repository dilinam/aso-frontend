import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@mui/material/TextField";
import Paper from "@material-ui/core/Paper";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { BASE_URL } from "../../utils/constants";
import AXIOS_INSTANCE from "../../services/AxiosInstance";
import AddNewUser from "../../components/AddNewUser";
import UpdateList from "../../components/updateForm";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  inputfield: {
    width: 500,
    maxWidth: "100%",
    marginTop: "100px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    marginTop: "25px",
  },
});
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Users() {
  const [users, setUsers] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [data, setData] = useState({});

  const classes = useStyles();

  const errors = {};
  useEffect(() => {
    AXIOS_INSTANCE.get(BASE_URL + "/api/users").then((response) => {
      console.log(response.data);
      setUsers(response.data);
    });
  }, []);
  //modal options
  const [open, setOpen] = useState(false);
  const handleOpen = (e) => {
    setOpen(true);
    const newdata = { ...data, ...e };
    setData(newdata);
    console.log(newdata);
  };
  const handleClose = (e) => {
    setOpen(false);
  };
  // form handel

  const handle = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  };
  const submit = (e) => {
    e.preventDefault();
    setFormErrors(validateInfo(data));
    setIsSubmit(true);
    if (errors.length > 0) {
      setOpen(false);
    }
    console.log(open);
  };
  const validateInfo = (values) => {
    if (false) {
      errors.username = "User name required.";
    }
    if (false) {
      errors.userDescription = "User Description required.";
    }
    return errors;
  };
  // delete funtion
  const [isDeleted, setIsDeleted] = useState(false);
  const [deleteId, setDeleteId] = useState(0);
  const deleteUser = (id) => {
    setDeleteId(id);
    setIsDeleted(true);
    const newtenants = users.filter((x) => x.userId === id);
    setUsers(newtenants);
  };
  useEffect(() => {
    if (isDeleted) {
      AXIOS_INSTANCE.delete(BASE_URL + "/api/users/" + deleteId, {}).then(
        (response) => {
          console.log(response);
          //   window.location.reload(false);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  });
  //check box

  const cancel = (e) => {
    e.preventDefault();
    setOpen(false);
  };
  return (
    <div>
      <AddNewUser />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">userId</TableCell>
              <TableCell align="right">username</TableCell>
              <TableCell align="right">firstName</TableCell>
              <TableCell align="right">lastName</TableCell>
              <TableCell align="right">nic</TableCell>
              <TableCell align="right">address</TableCell>
              <TableCell align="right">contactNo</TableCell>
              <TableCell align="right">email</TableCell>
              <TableCell align="right">dob</TableCell>
              <TableCell align="right">status </TableCell>
              <TableCell align="right">superAdmin</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.userId}>
                <TableCell align="right">{user.userId}</TableCell>
                <TableCell align="right">{user.username}</TableCell>
                <TableCell align="right">{user.firstName}</TableCell>
                <TableCell align="right">{user.lastName}</TableCell>
                <TableCell align="right">{user.nic}</TableCell>
                <TableCell align="right">{user.address}</TableCell>
                <TableCell align="right">{user.contactNo}</TableCell>
                <TableCell align="right">{user.email}</TableCell>
                <TableCell align="right">{user.dob}</TableCell>
                <TableCell align="right">{user.status.toString()}</TableCell>
                <TableCell align="right">
                  {user.superAdmin.toString()}
                </TableCell>
                <TableCell align="right">
                  <UpdateList data={user} />
                  &nbsp;
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    endIcon={<DeleteIcon />}
                    onClick={() => deleteUser(user.userId)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Users;
