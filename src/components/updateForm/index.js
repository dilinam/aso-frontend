import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import axios from "axios";
import Modal from "@mui/material/Modal";
import { Edit } from "@mui/icons-material";

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
  width: 400,
  bgcolor: "rgba(58, 56, 69,0.6)",
  border: "2px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  overflowY:"scroll",
};


const UpdateList = (props) => {
  const classes = useStyles();
  const [data, setData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const errors = {};
  // form handel
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      axios
        .put("http://localhost:8080/updateCandidate/submit", {
          candidateId: data.candidateId,
          candidateFirstName: data.candidateFirstName,
          candidateLastName: data.candidateLastName,
          candidateNIC: data.candidateNIC,
          candidateAddress: data.candidateAddress,
          candidateContactNumber: data.candidateContactNumber,
          candidateEmail: data.candidateEmail,
          candidateDOB: data.candidateDOB,
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
    if (!values.candidateFirstName.trim()) {
      errors.candidateFirstName = "Candidate First Name required.";
    }
    if (!values.candidateLastName.trim()) {
      errors.candidateLastName = "Candidate Last Name required.";
    }
    if (!values.candidateNIC.trim()) {
      errors.candidateNIC = "Candidate NIC required.";
    }
    if (!values.candidateAddress.trim()) {
      errors.candidateAddress = "Candidate Address required.";
    }
    if (!values.candidateContactNumber.trim()) {
      errors.candidateContactNumber = "Candidate Contact Number required.";
    }
    if (!values.candidateDOB.trim()) {
      errors.candidateDOB = "Candidate DOB required.";
    }
    return errors;
  };
  //modal options
  const [open, setOpen] = React.useState(false);
  const handleOpen = (e) => {
    setOpen(true);
    const newdata = { ...data, ...e };
    setData(newdata);
    console.log(newdata);
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
      <Button onClick={() => handleOpen(props.candidate)} endIcon={<Edit />}>
        Edit
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <form key={data.candidateId}>
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            >
              <TextField
                className={classes.inputfield}
                fullWidth
                label="FirstName"
                error={formErrors.candidateFirstName == null ? false : true}
                onChange={(e) => handle(e)}
                placeholder="FirstName"
                id="candidateFirstName"
                value={data.candidateFirstName}
                type="text"
                helperText={formErrors.candidateFirstName}
              />
              &nbsp;
              <TextField
                className={classes.inputfield}
                fullWidth
                label="Last Name"
                error={formErrors.candidateLastName == null ? false : true}
                onChange={(e) => handle(e)}
                placeholder="Last Name"
                id="candidateLastName"
                value={data.candidateLastName}
                type="text"
                helperText={formErrors.candidateLastName}
              />
              &nbsp;
              <TextField
                className={classes.inputfield}
                fullWidth
                label="candidate NIC"
                error={formErrors.candidateNIC == null ? false : true}
                onChange={(e) => handle(e)}
                placeholder="candidate NIC"
                id="candidateNIC"
                value={data.candidateNIC}
                type="text"
                helperText={formErrors.candidateNIC}
              />
              &nbsp;
              <TextField
                className={classes.inputfield}
                label="Address"
                onChange={(e) => handle(e)}
                id="candidateAddress"
                value={data.candidateAddress}
                placeholder="Address"
                type="text"
                multiline
                error={formErrors.candidateAddress == null ? false : true}
                maxRows={4}
              />
              &nbsp;
              <TextField
                className={classes.inputfield}
                fullWidth
                label="Contact Number"
                error={formErrors.candidateContactNumber == null ? false : true}
                onChange={(e) => handle(e)}
                placeholder="Contact Number"
                id="candidateContactNumber"
                value={data.candidateContactNumber}
                type="text"
                helperText={formErrors.candidateContactNumber}
              />
              &nbsp;
              <TextField
                className={classes.inputfield}
                fullWidth
                label="Email"
                error={formErrors.candidateEmail == null ? false : true}
                onChange={(e) => handle(e)}
                placeholder="Email"
                id="candidateEmail"
                value={data.candidateEmail}
                type="text"
                helperText={formErrors.candidateEmail}
              />
              &nbsp;
              <TextField
                className={classes.inputfield}
                fullWidth
                label="tDOB"
                error={formErrors.candidateDOB == null ? false : true}
                onChange={(e) => handle(e)}
                placeholder="yyyy/mm/dd"
                id="candidateDOB"
                value={data.candidateDOB}
                type="text"
                helperText={formErrors.candidateDOB}
              />
            </Box>
            <Button variant="outlined" type="submit" onClick={(e) => submit(e)}>
              Update
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

export default UpdateList;
