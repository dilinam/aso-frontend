import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { PersonAdd } from "@mui/icons-material";
import AXIOS_INSTANCE from "../../services/AxiosInstance";
import { BASE_URL } from "../../utils/constants";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import moment from "moment";

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
  height: 500,
  maxHeight: "100%",
};

const AddNewUser = (props) => {
  const options = ["TENANTADMIN", "EXAMINER", "CANDIDATE"];
  const classes = useStyles();
  const [data, setData] = useState();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [role, setRole] = useState();

  const errors = {};
  // form handel
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      AXIOS_INSTANCE.post(BASE_URL + "/api/users/" + role, {
        username: data.firstName + data.lastName,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
        nic: data.nic,
        address: data.address,
        contactNo: data.contactNo,
        email: data.email,
        dob: moment(data.dob, "YYYY/MM/DD").unix(),
      }).then(
        (response) => {
          console.log(response);
          setOpen(false);
          setIsSubmit(false);
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
      errors.userFirstName = " First Name required.";
    }
    // if (!values.userLastName.trim()) {
    //   errors.userLastName = " Last Name required.";
    // }
    // if (!values.userNIC.trim()) {
    //   errors.userNIC = " NIC required.";
    // }
    // if (!values.userAddress.trim()) {
    //   errors.userAddress = " Address required.";
    // }
    // if (!values.userContactNumber.trim()) {
    //   errors.userContactNumber = " Contact Number required.";
    // }
    // if (!values.userDOB.trim()) {
    //   errors.userDOB = " DOB required.";
    // }
    return errors;
  };
  //modal options
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = (e) => {
    setOpen(false);
  };
  const cancel = (e) => {
    e.preventDefault();
    setOpen(false);
  };
  const selected = (e) => {
    setRole(e.value.toLowerCase());
  };
  
  return (
    <div>
      <Button onClick={() => handleOpen()} startIcon={<PersonAdd />}>
        Add New User
      </Button>
      <Modal open={open} onClose={handleClose} sx={{ overflowY: "scroll" }}>
        <Box sx={style}>
          <form>
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            >
              <h1>Add New User</h1>
              <TextField
                className={classes.inputfield}
                fullWidth
                label="First Name"
                error={formErrors.firstName == null ? false : true}
                onChange={(e) => handle(e)}
                placeholder="First Name"
                id="firstName"
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
                type="text"
                helperText={formErrors.lastName}
              />
              &nbsp;
              <TextField
                className={classes.inputfield}
                fullWidth
                label="Password"
                error={formErrors.password == null ? false : true}
                onChange={(e) => handle(e)}
                placeholder="Password"
                id="password"
                type="text"
                helperText={formErrors.password}
              />
              &nbsp;
              <TextField
                className={classes.inputfield}
                fullWidth
                label="NIC"
                error={formErrors.nic == null ? false : true}
                onChange={(e) => handle(e)}
                placeholder="ex : 991xxxxxxV"
                id="nic"
                type="text"
                helperText={formErrors.nic}
              />
              &nbsp; &nbsp;
              <TextField
                className={classes.inputfield}
                label="Address"
                onChange={(e) => handle(e)}
                id="address"
                placeholder="Address"
                type="text"
                multiline
                error={formErrors.address == null ? false : true}
                maxRows={4}
                helperText={formErrors.address}
              />
              &nbsp; &nbsp;
              <TextField
                className={classes.inputfield}
                fullWidth
                label="Contact Number"
                error={formErrors.contactNo == null ? false : true}
                onChange={(e) => handle(e)}
                placeholder="Contact Number"
                id="contactNo"
                type="text"
                helperText={formErrors.contactNo}
              />
              &nbsp;
              <TextField
                className={classes.inputfield}
                fullWidth
                label="Email"
                error={formErrors.email == null ? false : true}
                onChange={(e) => handle(e)}
                placeholder="Email"
                id="email"
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
                type="text"
                helperText={formErrors.dob}
              />
              &nbsp;
              
            </Box>
            <Dropdown
              options={options}
              onChange={(e) => selected(e)}
              value={options[0]}
              placeholder="Select an option"
            />
            <br></br>
            <Button variant="outlined" type="submit" onClick={(e) => submit(e)}>
              Register
            </Button>
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

export default AddNewUser;
