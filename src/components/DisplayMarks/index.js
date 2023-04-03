import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { BASE_URL } from "../../utils/constants";
import AXIOS_INSTANCE from "../../services/AxiosInstance";

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

function DisplayMarks(props){
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = (e) => {
    setOpen(false);
  };
  
  return (
    <div>
      <Button onClick={handleOpen}>
        {props.course}
      </Button>
      <br></br>
      <Modal open={open} onClose={handleClose} sx={{ overflowY: "scroll" }}>
        <Box sx={style}>
          <Box
            sx={{
              //   width: 500,
              maxWidth: "100%",
            }}
          >
            {props.course} marks
            <br></br>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">date</TableCell>
                    <TableCell align="center">Exam name</TableCell>
                    <TableCell align="center">Marks</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.exam.map((exam) => (
                    <TableRow key={exam.userId}>
                      <TableCell align="center">{exam.date}</TableCell>
                      <TableCell align="center">{exam.name}</TableCell>
                      <TableCell align="center">{exam.mark}</TableCell>
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

export default DisplayMarks;
