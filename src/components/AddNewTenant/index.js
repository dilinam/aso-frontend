import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import axios from "axios";
import Modal from "@mui/material/Modal";
import { PersonAdd } from "@mui/icons-material";

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
};

const AddNewTenant = () => {
  const errors = {};
  const classes = useStyles();
  const [data, setData] = useState({
    tenetName: "",
    tenetDescription: "",
    tenetAdminPassword: "",
    tenetAdminUserName: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
   useEffect(() => {
     if (Object.keys(formErrors).length === 0 && isSubmit) {
       axios
         .post("http://localhost:8080/tenants/submit", {
           tenetName: data.tenetName,
           tenetDescription: data.tenetDescription,
           tenetAdminPassword: data.tenetAdminPassword,
           tenetAdminUserName: data.tenetAdminUserName,
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
      if (!values.tenetName.trim()) {
        errors.tenetName = "Tenet name required.";
      }
      if (!values.tenetDescription.trim()) {
        errors.tenetDescription = "Tenet Description required.";
      }
      if (!values.tenetAdminUserName.trim()) {
        errors.tenetAdminUserName = "Admin User Name required.";
      }
      if (!values.tenetAdminPassword.trim()) {
        errors.tenetAdminPassword = "Admin Password required.";
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
              <h1>Add New Tenant</h1>
              <TextField
                className={classes.inputfield}
                fullWidth
                label="Tenet Name"
                error={formErrors.tenetName == null ? false : true}
                onChange={(e) => handle(e)}
                placeholder="Tenet Name"
                id="tenetName"
                value={data.tenetName}
                type="text"
                helperText={formErrors.tenetName}
              />
              &nbsp;
              <TextField
                className={classes.inputfield}
                label="Tenet Description"
                onChange={(e) => handle(e)}
                id="tenetDescription"
                value={data.tenetDescription}
                placeholder="Tenet Description"
                type="text"
                multiline
                error={formErrors.tenetDescription == null ? false : true}
                maxRows={4}
              />
              &nbsp;
              <TextField
                className={classes.inputfield}
                fullWidth
                label="Tenet Admin User Name"
                error={formErrors.tenetAdminUserName == null ? false : true}
                onChange={(e) => handle(e)}
                placeholder="Tenet Admin User Name"
                id="tenetAdminUserName"
                value={data.tenetAdminUserName}
                type="text"
                helperText={formErrors.tenetAdminUserName}
              />
              &nbsp;
              <TextField
                className={classes.inputfield}
                fullWidth
                label="Tenet Admin Password"
                error={formErrors.tenetAdminPassword == null ? false : true}
                onChange={(e) => handle(e)}
                placeholder="Tenet Admin Password"
                id="tenetAdminPassword"
                value={data.tenetAdminPassword}
                type="password"
                helperText={formErrors.tenetAdminPassword}
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

export default AddNewTenant;
