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

const QuizPage = () => {
  const location = useLocation();
  const [questions, setQuestions] = useState([
    // {
    //   oder: 1,
    //   quizTypeId: "mcq",
    //   question:
    //     "Write java code to print 1-100 odd numbers using recusive function",
    //   answers: ["fgfdgdfg", "dfsadfas", "dfsdfs", "dfdfdsaf"],
    // },
    // {
    //   oder: 2,
    //   quizTypeId: "mcq",
    //   question:
    //     "Write java code to print 1-100 odd numbers using recusive function",
    //   answers: ["fgfdgdfg", "dfsadfas", "dfsdfs", "dfdfdsaf"],
    // },
    // {
    //   oder: 3,
    //   quizTypeId: "mcq",
    //   question:
    //     "Write java code to print 1-100 odd numbers using recusive function",
    //   answers: ["fgfdgdfg", "dfsadfas", "dfsdfs", "dfdfdsaf"],
    // },
    // {
    //   oder: 4,
    //   quizTypeId: "mcq",
    //   question:
    //     "Write java code to print 1-100 odd numbers using recusive function",
    //   answers: ["fgfdgdfg", "dfsadfas", "dfsdfs", "dfdfdsaf"],
    // },
  ]);
  useEffect(() => {
    AXIOS_INSTANCE.get(
      BASE_URL + "/api/exam/examQuestion/" + location.state.exam.examId).then((response) => {
      console.log(response.data);
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
      <Box sx={{ width: "75%", margin: "auto" }}>
        <Stack spacing={2} justifyContent="center">
          {questions.map((q) => {
            console.log(q);
            // return (
            //   <Box>
            //     <QuizBox {...q} />
            //   </Box>
            // );
            if (true) {
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
      </Box>
    </>
  );
};

export default QuizPage;
