import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import { Edit } from "@mui/icons-material";
import AddNewTenant from "../../components/AddNewTenant";
import { BASE_URL } from "../../utils/constants";
import AXIOS_INSTANCE from "../../services/AxiosInstance";

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
  bgcolor: "rgba(58, 56, 69,0.6)",
  border: "2px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};
const Tenants = () => {
  const [tenants, setTenants] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [data, setData] = useState({});

  const classes = useStyles();

  const errors = {};
  useEffect(() => {
    AXIOS_INSTANCE.get(BASE_URL + "/api/tenant").then((response) => {
      console.log(response.data);
      setTenants(response.data);
    });
  }, []);
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
  // form handel
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      AXIOS_INSTANCE.put(BASE_URL + "/api/tenant", {
        tenantId: data.tenantId,
        tenantName: data.tenantName,
        description: data.description,
        tenantAdminPassword: data.tenantAdminPassword,
        tenantAdminUserName: data.tenantAdminUserName,
        status: data.status,
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
  // delete funtion
  const [isDeleted, setIsDeleted] = useState(false);
  const [deleteId, setDeleteId] = useState(0);
  const deleteTenant = (e) => {
    setDeleteId(e.tenantId);
    setIsDeleted(true);
    const index = tenants.findIndex((x) => x.tenantId === deleteId);
    console.log(index);
    const newtent = tenants.slice(0, index);
    setTenants(newtent);
  };
  useEffect(() => {
    if(isDeleted){
     AXIOS_INSTANCE.delete(BASE_URL + `/api/tenant/${deleteId}`).then(
        (response) => {
          console.log(response);
          setDeleteId();
        },
        (error) => {
          console.log(error);
        }
      );
    }
    
  },[isDeleted]);
  //check box
  const [checked, setChecked] = useState();
  const ischecked = (e) => {
    const newdata = { ...data };
    setChecked(e.target.value === "true" ? true : false);
    newdata.status = !checked;
    setData(newdata);
    const index = tenants.findIndex((x) => x.tenantId === data.tenantId);
    tenants[index].status = !checked;
    console.log(tenants[index].status);
  };
  const cancel = (e) => {
    e.preventDefault();
    setOpen(false);
    setFormErrors({});
  };
  return (
    <div>
      <AddNewTenant />
      &nbsp; &nbsp; &nbsp;
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Tenant id</TableCell>
              <TableCell align="right">Tenant Name </TableCell>
              <TableCell align="right">Admin UserName </TableCell>
              <TableCell align="right">Tenant Description </TableCell>
              <TableCell align="right">Password</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tenants.map((tenant) => (
              <TableRow key={tenant.tenantId}>
                <TableCell align="right">{tenant.tenantId}</TableCell>
                <TableCell align="right">{tenant.tenantName}</TableCell>
                <TableCell align="right">{tenant.tenantAdminUserName}</TableCell>
                <TableCell align="right">{tenant.description}</TableCell>
                <TableCell align="right">{tenant.password}</TableCell>
                <TableCell align="right">{tenant.status.toString()}</TableCell>
                <TableCell align="right">
                  <Button onClick={() => handleOpen(tenant)} endIcon={<Edit />}>
                    Edit
                  </Button>
                  <Modal open={open} onClose={handleClose}>
                    <Box sx={style}>
                      <form key={tenant.tenantId}>
                        <Box
                          sx={{
                            width: 500,
                            maxWidth: "100%",
                          }}
                        >
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
                            error={
                              formErrors.description == null ? false : true
                            }
                            maxRows={4}
                          />
                          &nbsp;
                          <TextField
                            className={classes.inputfield}
                            fullWidth
                            label="Tenant Admin User Name"
                            error={
                              formErrors.tenantAdminUserName == null
                                ? false
                                : true
                            }
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
                            error={
                              formErrors.tenantAdminPassword == null
                                ? false
                                : true
                            }
                            onChange={(e) => handle(e)}
                            placeholder="Tenant Admin Password"
                            id="tenantAdminPassword"
                            value={data.tenantAdminPassword}
                            type="password"
                            helperText={formErrors.tenantAdminPassword}
                          />
                        </Box>
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
                        &nbsp;
                        <Button
                          variant="outlined"
                          type="submit"
                          sx={{ mr: 2 }}
                          onClick={(e) => submit(e)}
                        >
                          Update
                        </Button>
                        <Button
                          // variant="outlined"
                          color="error"
                          type="submit"
                          sx={{ ml: 2 }}
                          onClick={(e) => cancel(e)}
                        >
                          Cancel
                        </Button>
                      </form>
                    </Box>
                  </Modal>
                  &nbsp;
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() => deleteTenant(tenant)}
                    endIcon={<DeleteIcon />}
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
};

export default Tenants;
