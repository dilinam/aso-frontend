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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
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
  pt: 2,
  px: 4,
  pb: 3,
};

function Users(props) {
  const [tenets, setTenets] = useState([]);
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
  },[]);
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
            setIsSubmit(false)
            // window.location.reload(false);
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
    console.log(open)
  };
  const validateInfo = (values) => {
    if (!values.tenetName.trim()) {
      errors.tenetName = "Tenet name required.";
    }
    if (!values.tenetDescription.trim()) {
      errors.tenetDescription = "Tenet Description required.";
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
    console.log(index)
    const newtent = tenets.slice(0, index);
    setTenets(newtent)

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
    newdata.status =!checked
    setData(newdata);
    const index = tenets.findIndex((x) => x.tenetId === data.tenetId);
    tenets[index].status = !checked
    console.log(tenets[index].status);
  };
  const cancel = (e) => {
      e.preventDefault();
      setOpen(false)
  };
  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>name </TableCell>
              <TableCell align="right">password</TableCell>
              <TableCell align="right">tenetid</TableCell>
              <TableCell align="right">status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tenets.map((tenet) => (
              <TableRow key={tenet.tenetId}>
                <TableCell align="right">{tenet.tenetAdminUserName}</TableCell>
                <TableCell align="right">{tenet.tenetAdminPassword}</TableCell>
                <TableCell align="right">{tenet.tenetId}</TableCell>
                <TableCell align="right">{tenet.status.toString()}</TableCell>
                <TableCell align="right">
                  <Button onClick={() => handleOpen(tenet)}>Edit</Button>
                  <Modal
                    hideBackdrop
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="child-modal-title"
                    aria-describedby="child-modal-description"
                  >
                    <Box sx={{ ...style }}>
                      <form key={tenet.tenetId}>
                        <input
                          onChange={(e) => handle(e)}
                          id="tenetName"
                          value={data.tenetName}
                          placeholder="Tenet Name"
                          type="text"
                        ></input>
                        <p>{formErrors.tenetName}</p>

                        <input
                          onChange={(e) => handle(e)}
                          id="tenetDescription"
                          value={data.tenetDescription}
                          placeholder="Tenet Description"
                          type="text"
                        ></input>
                        <p>{formErrors.tenetDescription}</p>

                        <input
                          onChange={(e) => handle(e)}
                          id="tenetAdminUserName"
                          value={data.tenetAdminUserName}
                          placeholder="Tenet Admin User Name"
                          type="text"
                        ></input>
                        <p>{formErrors.tenetAdminUserName}</p>
                        <input
                          onChange={(e) => handle(e)}
                          id="tenetAdminPassword"
                          value={data.tenetAdminPassword}
                          placeholder="Tenet Admin Password"
                          type="password"
                        ></input>
                        <p>{formErrors.tenetAdminPassword}</p>

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
                    onClick={() => deleteTenet(tenet)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <a href="http://localhost:3000/"> + Add New Tenet</a>
    </div>
  );
}

export default Users;
