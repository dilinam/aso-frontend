import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { Paper } from "@material-ui/core";
import UpdateList from "../../components/updateForm";
import AddNewUser from "../../components/AddNewUser";


const useStyles = makeStyles({
  table: {
    minWidth: 650,
    color: "#fff",
  },
  tabledata: {
    overflowX: "auto",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    marginTop: "25px",
  },
});

function Examiners(props) {
  const [examiners, setExaminers] = useState([
    {
      examinerId: 1,
      examinerFirstName: "lakmal",
      examinerLastName: "hasitha",
      examinerNIC: "991692991V",
      examinerAddress: "ahsjfdhsdaihgfoiduhgdifuhgodgfdghdf",
      examinerContactNumber: "0765804388",
      examinerEmail: "hasithalakmal@gmail.com",
      examinerDOB: "1999/6/17",
    },
    {
      examinerId: 2,
      examinerFirstName: "lakmal",
      examinerLastName: "djhasgjd",
      examinerNIC: "991692991V",
      examinerAddress: "ahsjfdhsdaihgfoiduhgdifuhgodgfdghdf",
      examinerContactNumber: "0765804388",
      examinerEmail: "hasithalakmal@gmail.com",
      examinerDOB: "1999/6/17",
    },
  ]);
  const headings = [
    "Id",
    "FirstName",
    "LastName",
    "NIC",
    "Address",
    "ContactNumber",
    "Email",
    "DOB",
  ];
  const classes = useStyles();
  const ExaminerList = () => {
    axios.get("http://localhost:8080/examiners").then((response) => {
      console.log(response.data);
      setExaminers(response.data);
    });
  };
  useEffect(() => {
    ExaminerList();
  }, []);

  // delete funtion
  const [isDeleted, setIsDeleted] = useState(false);
  const [deleteId, setDeleteId] = useState(0);
  const deleteExaminer = (e) => {
    setDeleteId(e.examinerId);
    setIsDeleted(true);
    const index = examiners.findIndex((x) => x.examinerId === deleteId);
    console.log(index);
    const newst = examiners.slice(0, index);
    setExaminers(newst);
  };
  useEffect(() => {
    if (isDeleted) {
      axios.delete(`http://localhost:8080/deleteSt/${deleteId}`, {}).then(
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

  return (
    <div>
        <AddNewUser isCandidate={false} />
      &nbsp; &nbsp; &nbsp;
      <TableContainer component={Paper} className={classes.tabledata}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {headings.map((heading) => (
                <TableCell align="right">{heading}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {examiners.map((examiner) => (
              <TableRow key={examiner.examinerId}>
                <TableCell align="right">{examiner.examinerId}</TableCell>
                <TableCell align="right">
                  {examiner.examinerFirstName}
                </TableCell>
                <TableCell align="right">{examiner.examinerLastName}</TableCell>
                <TableCell align="right">{examiner.examinerNIC}</TableCell>
                <TableCell align="right">{examiner.examinerAddress}</TableCell>
                <TableCell align="right">
                  {examiner.examinerContactNumber}
                </TableCell>
                <TableCell align="right">{examiner.examinerEmail}</TableCell>
                <TableCell align="right">{examiner.examinerDOB}</TableCell>
                <TableCell align="right">
                  <UpdateList Candidate={examiner} isCandidate={false} /> &nbsp;
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() => deleteExaminer(examiner)}
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
}

export default Examiners;
