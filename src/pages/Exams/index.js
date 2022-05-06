import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import AddNewExam from "../../components/AddNewExam";
import UpdateExam from "../../components/UpdateExam";
import AXIOS_INSTANCE from "../../services/AxiosInstance";
import { BASE_URL } from "../../utils/constants";
const Exams = () => {
  const [examData, setExamData] = useState([
    {
      examID: 123,
      decription:
        "As far as I know, you can only override classes. for styling pseudos you have to select them like this",
      name: "fuck you bitches",
      dateTime: "Tue Mar 29 2022 13:20:42 GMT+0530 (India Standard Time)",
      duration: "2h 30 min",
      Status: true,
      deleted: false,
    },
    {
      examID: 1234,
      decription:
        "As far as I know, you can only override classes. for styling pseudos you have to select them like this",
      name: "fuck you bitches",
      dateTime: "Tue Mar 29 2022 13:20:42 GMT+0530 (India Standard Time)",
      duration: "2h 30 min",
      Status: true,
      deleted: false,
    },
    {
      examID: 12345,
      decription:
        "As far as I know, you can only override classes. for styling pseudos you have to select them like this",
      name: "fuck you bitches",
      dateTime: "Tue Mar 29 2022 13:20:42 GMT+0530 (India Standard Time)",
      duration: "2h 30 min",
      Status: true,
      deleted: false,
    },
  ]);
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
                href="#contained-buttons"
              >
                Start
              </Button>
              <UpdateExam />
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
