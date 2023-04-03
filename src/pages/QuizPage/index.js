import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import QuizBox from "../../components/QuizBox";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CourseSection from "../CourseSection";
import CountdownTimer from "../../components/CountdownTimer";
import SecondQuizBox from "../../components/SecondQuizBox";
import AXIOS_INSTANCE from "../../services/AxiosInstance";
import { BASE_URL } from "../../utils/constants";
import { Button, Container } from "@mui/material";
import FinishAttempt from "../../components/FinishAttempt";

const QuizPage = () => {
  const location = useLocation();
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    AXIOS_INSTANCE.get(
      BASE_URL + "/api/exam/examQuestion/" + location.state.exam.examId).then((response) => {
      console.log(response.data);
      console.log("this is response");
      setQuestions(response.data);
    });
  }, []);

  return (
    <>
      <CountdownTimer duration={location.state.exam.duration} />
      <CourseSection
        addNewQuiz={(newQuiz) =>
          setQuestions((prev) => {
            newQuiz.oder = questions.length + 1;
            let updateQuiz = [...prev, newQuiz];
            return updateQuiz;
          })
        }
      />
      <FinishAttempt/>
      <Box sx={{ width: "75%", margin: "auto" }}>
        <form>
          <Stack spacing={2} justifyContent="center">
            {questions.map((q) => {
              console.log(q);
              if (q.questionType.questionTypeName === "mcq") {
                return (
                  <Box>
                    <QuizBox {...q} />
                  </Box>
                );
              } else if (q.quizTypeId === "stuctured") {
                return (
                  <Box>
                    <SecondQuizBox {...q} />
                  </Box>
                );
              }
            })}
          </Stack>
          {/* <Button variant="outlined" type="submit" onClick={(e) => submit(e)}>
            Submit
          </Button> */}
        </form>
      </Box>
    </>
  );
};

export default QuizPage;
