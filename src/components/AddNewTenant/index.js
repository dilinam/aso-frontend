import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import axios from "axios";
import Modal from "@mui/material/Modal";
import { PersonAdd } from "@mui/icons-material";
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
};

const AddNewTenant = () => {
  const errors = {};
  const classes = useStyles();
  const [data, setData] = useState({
    tenantName: "",
    description: "",
    tenantAdminPassword: "",
    tenantAdminUserName: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
   useEffect(() => {
     if (Object.keys(formErrors).length === 0 && isSubmit) {
       AXIOS_INSTANCE.post(BASE_URL + "/api/tenant", {
         tenantName: data.tenantName,
         description: data.description,
         tenantAdminPassword: data.tenantAdminPassword,
         tenantAdminUserName: data.tenantAdminUserName,
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
   },[formErrors, isSubmit]);
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
        errors.tenantName = "Tenant name required.";
      }
      if (false) {
        errors.description = "Tenant Description required.";
      }
      if (false) {
        errors.tenantAdminUserName = "Admin User Name required.";
      }
      if (false) {
        errors.tenantAdminPassword = "Admin Password required.";
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
                label="Tenant Name"
                error={formErrors.tenantName == null ? false : true}
                onChange={(e) => handle(e)}
                placeholder="Tenant Name"
                id="tenantName"
                value={data.tenantName}
                type="text"
                helperText={formErrors.tenantName}
              />
              &nbsp;
              <TextField
                className={classes.inputfield}
                label="Tenant Description"
                onChange={(e) => handle(e)}
                id="description"
                value={data.description}
                placeholder="Tenant Description"
                type="text"
                multiline
                error={formErrors.description == null ? false : true}
                maxRows={4}
              />
              &nbsp;
              <TextField
                className={classes.inputfield}
                fullWidth
                label="Tenant Admin User Name"
                error={formErrors.tenantAdminUserName == null ? false : true}
                onChange={(e) => handle(e)}
                placeholder="Tenant Admin User Name"
                id="tenantAdminUserName"
                value={data.tenantAdminUserName}
                type="text"
                helperText={formErrors.tenantAdminUserName}
              />
              &nbsp;
              <TextField
                className={classes.inputfield}
                fullWidth
                label="Tenant Admin Password"
                error={formErrors.tenantAdminPassword == null ? false : true}
                onChange={(e) => handle(e)}
                placeholder="Tenant Admin Password"
                id="tenantAdminPassword"
                value={data.tenantAdminPassword}
                type="password"
                helperText={formErrors.tenantAdminPassword}
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
