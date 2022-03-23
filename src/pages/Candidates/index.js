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
import DeleteIcon from '@mui/icons-material/Delete';
import {PersonAdd } from "@mui/icons-material";
import { Paper } from "@material-ui/core";
import UpdateList from "../../components/updateForm";


const useStyles = makeStyles({
  table: {
    minWidth: 650,
    color: "#fff",
  },
  tabledata: {
    overflowX : "auto",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    marginTop: "25px",
  },
});


function Candidates(props) {
  const [candidates, setCandidates] = useState([
    {
      candidateId: 1,
      candidateFirstName: "lakmal",
      candidateLastName: "hasitha",
      candidateNIC: "991692991V",
      candidateAddress: "ahsjfdhsdaihgfoiduhgdifuhgodgfdghdf",
      candidateContactNumber: "0765804388",
      candidateEmail: "hasithalakmal@gmail.com",
      candidateDOB: "1999/6/17",
    },
    {
      candidateId: 2,
      candidateFirstName: "lakmal",
      candidateLastName: "hasitha",
      candidateNIC: "991692991V",
      candidateAddress: "ahsjfdhsdaihgfoiduhgdifuhgodgfdghdf",
      candidateContactNumber: "0765804388",
      candidateEmail: "hasithalakmal@gmail.com",
      candidateDOB: "1999/6/17",
    },
  ]);
  const headings= ["Id", "FirstName","LastName","NIC","Address","ContactNumber", "Email","DOB",];
  const classes = useStyles();
  const CandidateList = () => {
    axios.get("http://localhost:8080/candidates").then((response) => {
      console.log(response.data);
      setCandidates(response.data);
    });
  };
  useEffect(() => {
    CandidateList();
  }, []);

  // delete funtion
  const [isDeleted, setIsDeleted] = useState(false);
  const [deleteId, setDeleteId] = useState(0);
  const deleteCandidate = (e) => {
    setDeleteId(e.candidateId);
    setIsDeleted(true);
    const index = candidates.findIndex((x) => x.candidateId === deleteId);
    console.log(index);
    const newst = candidates.slice(0, index);
    setCandidates(newst);
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
      <a href="http://localhost:3000/" className={classes.link}>
        <PersonAdd /> Add New Candidate
      </a>
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
            {candidates.map((candidate) => (
              <TableRow key={candidate.candidateId}>
                <TableCell align="right">{candidate.candidateId}</TableCell>
                <TableCell align="right">
                  {candidate.candidateFirstName}
                </TableCell>
                <TableCell align="right">
                  {candidate.candidateLastName}
                </TableCell>
                <TableCell align="right">{candidate.candidateNIC}</TableCell>
                <TableCell align="right">
                  {candidate.candidateAddress}
                </TableCell>
                <TableCell align="right">
                  {candidate.candidateContactNumber}
                </TableCell>
                <TableCell align="right">{candidate.candidateEmail}</TableCell>
                <TableCell align="right">{candidate.candidateDOB}</TableCell>
                <TableCell align="right">
                  <UpdateList candidate={candidate} heading={headings} /> &nbsp;
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() => deleteCandidate(candidate)}
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

export default Candidates;
