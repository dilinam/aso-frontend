import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import axios from "axios";
import Modal from "@mui/material/Modal";
import {PersonAdd } from "@mui/icons-material";

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

const AddNewUser = (props) => {
  const classes = useStyles();
  const [data, setData] = useState(
 {
          userId: "",
          userFirstName: "",
          userLastName: "",
          userNIC: "",
          userAddress: "",
          userContactNumber: "",
          userEmail: "",
          userDOB: "",
        }
  );
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const isCandidate = props.isCandidate;
  const errors = {};
  // form handel
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit && isCandidate) {
      axios
        .post("http://localhost:8080/Candidate/submit", {
          candidateFirstName: data.userFirstName,
          candidateLastName: data.userLastName,
          candidateNIC: data.userNIC,
          candidateAddress: data.userAddress,
          candidateContactNumber: data.userContactNumber,
          candidateEmail: data.userEmail,
          candidateDOB: data.userDOB,
        })
        .then(
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
    if (Object.keys(formErrors).length === 0 && isSubmit && !isCandidate) {
      axios
        .post("http://localhost:8080/Examiner/submit", {
          examinerFirstName: data.userFirstName,
          examinerLastName: data.userLastName,
          examinerNIC: data.userNIC,
          examinerAddress: data.userAddress,
          examinerContactNumber: data.userContactNumber,
          examinerEmail: data.userEmail,
          examinerDOB: data.userDOB,
        })
        .then(
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
  });

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
    if (!values.userFirstName.trim()) {
      errors.userFirstName = " First Name required.";
    }
    if (!values.userLastName.trim()) {
      errors.userLastName = " Last Name required.";
    }
    if (!values.userNIC.trim()) {
      errors.userNIC = " NIC required.";
    }
    if (!values.userAddress.trim()) {
      errors.userAddress = " Address required.";
    }
    if (!values.userContactNumber.trim()) {
      errors.userContactNumber = " Contact Number required.";
    }
    if (!values.userDOB.trim()) {
      errors.userDOB = " DOB required.";
    }
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
  return (
    <div>
      <Button onClick={() => handleOpen()} startIcon={<PersonAdd />}>
        Add New User
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
              <h1>Add New User</h1>
              <TextField
                className={classes.inputfield}
                fullWidth
                label="First Name"
                error={formErrors.userFirstName == null ? false : true}
                onChange={(e) => handle(e)}
                placeholder="First Name"
                id="first name"
                type="text"
                helperText={formErrors.userFirstName}
              />
              &nbsp;
              <TextField
                className={classes.inputfield}
                fullWidth
                label="Last Name"
                error={formErrors.userLastName == null ? false : true}
                onChange={(e) => handle(e)}
                placeholder="Last Name"
                id="userLastName"
                type="text"
                helperText={formErrors.userLastName}
              />
              &nbsp;
              <TextField
                className={classes.inputfield}
                fullWidth
                label="user NIC"
                error={formErrors.userNIC == null ? false : true}
                onChange={(e) => handle(e)}
                placeholder="user NIC"
                id="userNIC"
                type="text"
                helperText={formErrors.userNIC}
              />
              &nbsp; &nbsp;
              <TextField
                className={classes.inputfield}
                label="Address"
                onChange={(e) => handle(e)}
                id="userAddress"
                placeholder="Address"
                type="text"
                multiline
                error={formErrors.userAddress == null ? false : true}
                maxRows={4}
              />
              &nbsp; &nbsp;
              <TextField
                className={classes.inputfield}
                fullWidth
                label="Contact Number"
                error={formErrors.userContactNumber == null ? false : true}
                onChange={(e) => handle(e)}
                placeholder="Contact Number"
                id="userContactNumber"
                type="text"
                helperText={formErrors.userContactNumber}
              />
              &nbsp;
              <TextField
                className={classes.inputfield}
                fullWidth
                label="Email"
                error={formErrors.userEmail == null ? false : true}
                onChange={(e) => handle(e)}
                placeholder="Email"
                id="userEmail"
                type="email"
                helperText={formErrors.userEmail}
              />
              &nbsp;
              <TextField
                className={classes.inputfield}
                fullWidth
                label="DOB"
                error={formErrors.userDOB == null ? false : true}
                onChange={(e) => handle(e)}
                placeholder="yyyy/mm/dd"
                id="userDOB"
                type="text"
                helperText={formErrors.userDOB}
              />
              &nbsp;
            </Box>
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
