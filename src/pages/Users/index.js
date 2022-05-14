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
import axios from "axios";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { BASE_URL } from "../../utils/constants";
import AXIOS_INSTANCE from "../../services/AxiosInstance";
import AddNewUser from "../../components/AddNewUser";

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
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      AXIOS_INSTANCE.put(BASE_URL + "/api/users", {
        userId: data.userId,
        username: data.username,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
        nic: data.nic,
        address: data.address,
        contactNo: data.contactNo,
        email: data.email,
        dob: data.dob,
        status: data.status,
        deleted: data.deleted,
        superAdmin: data.superAdmin,
      }).then(
        (response) => {
          console.log(response);
          setOpen(false);
          setIsSubmit(false);
          // window.location.reload(false);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }, [formErrors, isSubmit]);

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
  const deleteUser = (e) => {
    setDeleteId(e.userId);
    setIsDeleted(true);
    const index = users.findIndex((x) => x.userId === deleteId);
    console.log(index);
    const newtent = users.slice(0, index);
    setUsers(newtent);
  };
  useEffect(() => {
    if (isDeleted) {
      axios.delete(`http://localhost:8080/delete/${deleteId}`, {}).then(
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
  const [checked, setChecked] = useState();
  const ischecked = (e) => {
    const newdata = { ...data };
    setChecked(e.target.value === "true" ? true : false);
    newdata.status = !checked;
    setData(newdata);
    const index = users.findIndex((x) => x.userId === data.userId);
    users[index].status = !checked;
    console.log(users[index].status);
  };
  const cancel = (e) => {
    e.preventDefault();
    setOpen(false);
  };
  return (
    <div>
      <AddNewUser/>
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
                  <Button onClick={() => handleOpen(user)}>Edit</Button>
                  <Modal open={open} onClose={handleClose}>
                    <Box sx={style}>
                      <h1>Edit User</h1>
                      <form key={user.userId}>
                        <TextField
                          className={classes.inputfield}
                          fullWidth
                          label="UserName"
                          error={formErrors.username == null ? false : true}
                          onChange={(e) => handle(e)}
                          id="username"
                          value={data.username}
                          type="text"
                          helperText={formErrors.username}
                        />
                        &nbsp;
                        <input
                          onChange={(e) => ischecked(e)}
                          value={data.status}
                          type="checkbox"
                          id="status"
                          name="status"
                          checked={data.status ? true : false}
                        ></input>
                        <label>Status</label>
                        <br></br>
                        <Button type="submit" onClick={(e) => submit(e)}>
                          Update
                        </Button>
                        <Button type="submit" onClick={(e) => cancel(e)}>
                          Cancel
                        </Button>
                      </form>
                    </Box>
                  </Modal>
                  &nbsp;
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => deleteUser(user)}
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
