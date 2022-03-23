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
import { Edit, PersonAdd } from "@mui/icons-material";

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
  const [tenets, setTenets] = useState([
    {
      tenetId: 5,
      tenetName: "hasitha",
      tenetDescription: "-coordinate representations (also known as HSL)",
      tenetAdminPassword: "hasitha",
      tenetAdminUserName: "hasithae",
      status: true,
    },
    {
      tenetId: 6,
      tenetName: "hasitha",
      tenetDescription: "-coordinate representations (also known as HSL)",
      tenetAdminPassword: "hasitha",
      tenetAdminUserName: "hasithae",
      status: true,
    },
  ]);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [data, setData] = useState({});

  const classes = useStyles();

  const errors = {};
  const TenetList = () => {
    axios.get("http://localhost:8080/tenets").then((response) => {
      console.log(response.data);
      setTenets(response.data);
    });
  };
  useEffect(() => {
    TenetList();
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
      axios
        .put("http://localhost:8080/updateTenet/submit", {
          tenetId: data.tenetId,
          tenetName: data.tenetName,
          tenetDescription: data.tenetDescription,
          tenetAdminPassword: data.tenetAdminPassword,
          tenetAdminUserName: data.tenetAdminUserName,
          status: data.status,
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
  // delete funtion
  const [isDeleted, setIsDeleted] = useState(false);
  const [deleteId, setDeleteId] = useState(0);
  const deleteTenet = (e) => {
    setDeleteId(e.tenetId);
    setIsDeleted(true);
    const index = tenets.findIndex((x) => x.tenetId === deleteId);
    console.log(index);
    const newtent = tenets.slice(0, index);
    setTenets(newtent);
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
    const index = tenets.findIndex((x) => x.tenetId === data.tenetId);
    tenets[index].status = !checked;
    console.log(tenets[index].status);
  };
  const cancel = (e) => {
    e.preventDefault();
    setOpen(false);
    setFormErrors({});
  };
  return (
    <div>
      <a href="http://localhost:3000/" className={classes.link}>
        <PersonAdd /> Add New Tenet
      </a>
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
            {tenets.map((tenet) => (
              <TableRow key={tenet.tenetId}>
                <TableCell align="right">{tenet.tenetId}</TableCell>
                <TableCell align="right">{tenet.tenetName}</TableCell>
                <TableCell align="right">{tenet.tenetAdminUserName}</TableCell>
                <TableCell align="right">{tenet.tenetDescription}</TableCell>
                <TableCell align="right">{tenet.tenetAdminPassword}</TableCell>
                <TableCell align="right">{tenet.status.toString()}</TableCell>
                <TableCell align="right">
                  <Button onClick={() => handleOpen(tenet)} endIcon={<Edit />}>
                    Edit
                  </Button>
                  <Modal open={open} onClose={handleClose}>
                    <Box sx={style}>
                      <form key={tenet.tenetId}>
                        <Box
                          sx={{
                            width: 500,
                            maxWidth: "100%",
                          }}
                        >
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
                            error={
                              formErrors.tenetDescription == null ? false : true
                            }
                            maxRows={4}
                          />
                          &nbsp;
                          <TextField
                            className={classes.inputfield}
                            fullWidth
                            label="Tenet Admin User Name"
                            error={
                              formErrors.tenetAdminUserName == null
                                ? false
                                : true
                            }
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
                            error={
                              formErrors.tenetAdminPassword == null
                                ? false
                                : true
                            }
                            onChange={(e) => handle(e)}
                            placeholder="Tenet Admin Password"
                            id="tenetAdminPassword"
                            value={data.tenetAdminPassword}
                            type="password"
                            helperText={formErrors.tenetAdminPassword}
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
                          onClick={(e) => submit(e)}
                        >
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
                  &nbsp;
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() => deleteTenet(tenet)}
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
