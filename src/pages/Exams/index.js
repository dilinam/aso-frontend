import React, { useState, useEffect} from "react";
import {Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Button, Modal } from "@mui/material";
import Box from "@mui/material/Box";
import AddNewExam from "../../components/AddNewExam";
import UpdateExam from "../../components/UpdateExam";
import AXIOS_INSTANCE from "../../services/AxiosInstance";
import { BASE_URL } from "../../utils/constants";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import QuizPage from "../QuizPage";
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
  // overflowY: "scroll",
  textAlign:"center"
};
const Exams = () => {
  const navigate = useNavigate();
  const [examData, setExamData] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const [deleteId, setDeleteId] = useState();
  useEffect(() => {
    AXIOS_INSTANCE.get(BASE_URL +"/api/exam").then((response) => {
      console.log(response.data);
      setExamData(response.data);
    });
  }, []);
  const deleteExam = (id) => {
    setIsDeleted(true);
    setDeleteId(id);
    console.log(id);
    const newExamData = examData.filter((x) => x.examId !== id);
    console.log(newExamData);
    setExamData(newExamData);
  };
  useEffect(() => {
    if (isDeleted) {
      AXIOS_INSTANCE.delete(BASE_URL + `/api/exam/${deleteId}`).then(
        (response) => {
          console.log(response);
          setDeleteId();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }, [isDeleted]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = (e) => {
    setOpen(true);
  };
  const handleClose = (e) => {
    setOpen(false);
  };
  return (
    <div>
      <Grid container spacing={5}>
        {examData.map((exam) => (
          <Grid item key={exam.examId} alignItems="center">
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
                  onClick={() => handleOpen(exam)}
                >
                  Start
                </Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  sx={{ overflowY: "scroll" }}
                >
                  <Box sx={style}>
                    <Typography variant="h6" gutterBottom component="div">
                      {exam.examName}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      gutterBottom
                      component="div"
                    >
                      start at : {exam.dateTime}
                      <br></br>
                      Duration : {exam.duration}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      {exam.examDescription}
                    </Typography>
                    <br></br>
                    <Button
                      sx={{ width: "15em" }}
                      variant="contained"
                      onClick={() => navigate("/QuizPage", { state: { exam } })}
                    >
                      Get attempt
                    </Button>
                  </Box>
                </Modal>
                <UpdateExam exam={exam} />

                <Button
                  onClick={() => deleteExam(exam.examId)}
                  endIcon={<DeleteIcon />}
                  color="error"
                >
                  Drop this exam
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
        <Grid item>
          {" "}
          <AddNewExam />
        </Grid>
      </Grid>
    </div>
  );
};
export default Exams;
