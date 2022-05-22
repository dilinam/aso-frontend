import React, { useState, useEffect } from "react";
import {Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import AddNewExam from "../../components/AddNewExam";
import UpdateExam from "../../components/UpdateExam";
import AXIOS_INSTANCE from "../../services/AxiosInstance";
import { BASE_URL } from "../../utils/constants";
import QuizPage from "../QuizPage";
const Exams = () => {
  const navigate = useNavigate();
  const [examData, setExamData] = useState([]);
  useEffect(() => {
    AXIOS_INSTANCE.get(BASE_URL + "/api/exam").then((response) => {
      console.log(response.data);
      setExamData(response.data);
    });
  }, []);
  return (
    <Grid container spacing={5}>
      {examData.map((exam) => (
        <Grid item key={exam.examID} alignItems="center">
          <Paper
            sx={{
              height: "20em",
              width: "15em",
              "&:hover": {
                backgroundColor: "rgba(210, 231, 247, 0.3)",
              },
              border: "2px solid #82b1ff",
            }}
          >
            <div style={{ margin: "2px" }}>
              <h2 style={{ textAlign: "center" }}>{exam.name}</h2>
              {/* <h5>{exam.decription}</h5> */}
              <h5 style={{ textAlign: "center" }}>
                date and time : {exam.dateTime}
              </h5>
              <h5 style={{ textAlign: "center" }}>
                duration : {exam.duration}
              </h5>
            </div>
            <Box textAlign="center">
              <Button
                sx={{ width: "15em" }}
                variant="contained"
                onClick={() =>
                  navigate("/QuizPage", { state: {exam} })
                }
              >
                Start
              </Button>
              <UpdateExam exam={exam} />
            </Box>
          </Paper>
        </Grid>
      ))}
      <Grid item>
        {" "}
        <AddNewExam />
      </Grid>
    </Grid>
  );
};
export default Exams;
