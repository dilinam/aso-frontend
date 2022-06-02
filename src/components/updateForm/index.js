import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import axios from "axios";
import Modal from "@mui/material/Modal";
import { Edit } from "@mui/icons-material";
import AXIOS_INSTANCE from "../../services/AxiosInstance";
import { BASE_URL } from "../../utils/constants";

const useStyles = makeStyles({
  inputfield: {
    width: 500,
    maxWidth: "100%",
    marginTop: "100px",
  },
});
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "rgba(58, 56, 69,0.6)",
  border: "2px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  overflowY: "scroll",
};


const UpdateList = (props) => {

  const classes = useStyles();
  const [data, setData] = useState({
    userId: props.data.userId,
    username: props.data.username,
    password: props.data.password,
    firstName: props.data.firstName,
    lastName: props.data.lastName,
    nic: props.data.nic,
    address: props.data.address,
    contactNo: props.data.contactNo,
    email: props.data.email,
    dob: props.data.dob,
    status: props.data.status,
    deleted: props.data.deleted,
    superAdmin: props.data.superAdmin,
  });
  const prevdata = { ...data };
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const errors = {};
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
          console.log(response.data);
          setOpen(false);
          setIsSubmit(false)
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
    // console.log(newdata);
    console.log(data);
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
      errors.firstName = " First Name required.";
    }
    if (false) {
      errors.lastName = " Last Name required.";
    }
    if (false) {
      errors.nic = " NIC required.";
    }
    if (false) {
      errors.address = " Address required.";
    }
    if (false) {
      errors.contactNo = " Contact Number required.";
    }
    if (false) {
      errors.dob = " DOB required.";
    }
    return errors;
  };
  //modal options
  const [open, setOpen] = React.useState(false);
  const handleOpen = (e) => {
    setOpen(true);
  };
  const handleClose = (e) => {
    setOpen(false);
  };
   const cancel = (e) => {
     e.preventDefault();
     setOpen(false);
   };
  return (
    <div>
      <Button onClick={() => handleOpen(props.data)} endIcon={<Edit />}>
        Edit
      </Button>
      <Modal open={open} onClose={handleClose} sx={{ overflowY: "scroll" }}>
        <Box sx={style}>
          <form key={data.userId}>
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            >
              <h1>update user details</h1>
              <TextField
                className={classes.inputfield}
                fullWidth
                label="FirstName"
                error={formErrors.firstName == null ? false : true}
                onChange={(e) => handle(e)}
                placeholder="FirstName"
                id="firstName"
                value={data.firstName}
                type="text"
                helperText={formErrors.firstName}
              />
              &nbsp;
              <TextField
                className={classes.inputfield}
                fullWidth
                label="Last Name"
                error={formErrors.lastName == null ? false : true}
                onChange={(e) => handle(e)}
                placeholder="Last Name"
                id="lastName"
                value={data.lastName}
                type="text"
                helperText={formErrors.lastName}
              />
              &nbsp;
              <TextField
                className={classes.inputfield}
                fullWidth
                label="user NIC"
                error={formErrors.nic == null ? false : true}
                onChange={(e) => handle(e)}
                placeholder="user NIC"
                id="nic"
                value={data.nic}
                type="text"
                helperText={formErrors.nic}
              />
              &nbsp;
              <TextField
                className={classes.inputfield}
                label="Address"
                onChange={(e) => handle(e)}
                id="address"
                value={data.address}
                placeholder="Address"
                type="text"
                multiline
                error={formErrors.address == null ? false : true}
                maxRows={4}
              />
              &nbsp;
              <TextField
                className={classes.inputfield}
                fullWidth
                label="Contact Number"
                error={formErrors.contactNo == null ? false : true}
                onChange={(e) => handle(e)}
                placeholder="Contact Number"
                id="contactNo"
                value={data.contactNo}
                type="text"
                helperText={formErrors.contactNo}
              />
              &nbsp;
              <TextField
                className={classes.inputfield}
                fullWidth
                label="Email"
                error={formErrors.email== null ? false : true}
                onChange={(e) => handle(e)}
                placeholder="Email"
                id="email"
                value={data.email}
                type="email"
                helperText={formErrors.email}
              />
              &nbsp;
              <TextField
                className={classes.inputfield}
                fullWidth
                label="DOB"
                error={formErrors.dob == null ? false : true}
                onChange={(e) => handle(e)}
                placeholder="yyyy/mm/dd"
                id="dob"
                value={data.dob}
                type="text"
                helperText={formErrors.dob}
              />
            </Box>
            <br></br>
            <Button variant="outlined" type="submit" onClick={(e) => submit(e)}>
              Update
            </Button>
            &nbsp; &nbsp;
            <Button
              // variant="outlined"
              color="error"
              type="submit"
              onClick={(e) => cancel(e)}
            >
              Cancel
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default UpdateList;
