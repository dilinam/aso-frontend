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
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { BASE_URL } from "../../utils/constants";
import AXIOS_INSTANCE from "../../services/AxiosInstance";
import AddNewUser from "../../components/AddNewUser";
import UpdateList from "../../components/updateForm";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

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
  width: "75%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function AddCandidateToExam() {
  const [users, setUsers] = useState([]);
  const [checked, setChecked] = React.useState(false);
  let examUserList = [];
  const [isSubmit, setIsSubmit] = useState(false);
  const classes = useStyles();
  useEffect(() => {
    AXIOS_INSTANCE.get(BASE_URL + "/api/users").then((response) => {
      console.log(response.data);
      setUsers(response.data);
    });
  }, []);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = (e) => {
    setOpen(false);
  };
  const isChecked = (user) => {
    if (examUserList.includes(user.userId)){
        const index = examUserList.indexOf(user.userId);
        examUserList.splice(index,1);
        setChecked(false);
    } else{
        examUserList.push(user.userId);
        setChecked(false);
    }
    console.log(examUserList);
  };
  const handleChange1 = (event) => {
    console.log(event.target.checked);
    if (!event.target.checked){
      setChecked(false);
      examUserList = [];
    }else{
      setChecked(true);
      {
        users.map((user) => {
          if (!examUserList.includes(user.userId)) {
            examUserList.push(user.userId);
          }
        });
      }
    }
    console.log(examUserList);
      
  };
  const children = (user) => (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <FormControlLabel
        label="Child 1"
        control={
          <Checkbox
            defaultUnChecked
            checked={() => (checked || examUserList.includes(user.userId))}
            onChange={() => isChecked(user)}
          />
        }
      />
    </Box>
  );
  const forAll = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <FormControlLabel
        label="Parent"
        checked={checked}
        control={<Checkbox onChange={handleChange1} />}
      />
    </Box>
  );
  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        Asign candidates
      </Button>
      <Modal open={open} onClose={handleClose} sx={{ overflowY: "scroll" }}>
        <Box sx={style}>
          <Box
            sx={{
              //   width: 500,
              maxWidth: "100%",
            }}
          >
            Asign Candidate To exam
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">
                     {forAll}
                    </TableCell>
                    <TableCell align="right">userId</TableCell>
                    <TableCell align="right">username</TableCell>
                    <TableCell align="right">nic</TableCell>
                    <TableCell align="right">email</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.userId}>
                      <TableCell align="right">{children(user)}</TableCell>
                      <TableCell align="right">{user.userId}</TableCell>
                      <TableCell align="right">{user.username}</TableCell>
                      <TableCell align="right">{user.nic}</TableCell>
                      <TableCell align="right">{user.email}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default AddCandidateToExam;
