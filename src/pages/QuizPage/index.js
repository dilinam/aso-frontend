import * as React from "react";
import QuizBox from "../../components/QuizBox";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CourseSection from "../CourseSection";

const QuizPage = () => {
  const [questions, setQuestions] = React.useState([
    {
      quizNumber: 1,
      question:
        "Write java code to print 1-100 odd numbers using recusive function",
      answers: ["fgfdgdfg", "dfsadfas", "dfsdfs", "dfdfdsaf"],
    },
    {
      quizNumber: 2,
      question:
        "Write java code to print 1-100 odd numbers using recusive function",
      answers: ["fgfdgdfg", "dfsadfas", "dfsdfs", "dfdfdsaf"],
    },
    {
      quizNumber: 3,
      question:
        "Write java code to print 1-100 odd numbers using recusive function",
      answers: ["fgfdgdfg", "dfsadfas", "dfsdfs", "dfdfdsaf"],
    },
    {
      quizNumber: 4,
      question:
        "Write java code to print 1-100 odd numbers using recusive function",
      answers: ["fgfdgdfg", "dfsadfas", "dfsdfs", "dfdfdsaf"],
    },
  ]);

  return (
    <>
      <CourseSection
        addNewQuiz={(newQuiz) =>
          setQuestions((prev) => {
            let updateQuiz = [...prev, newQuiz];
            return updateQuiz;
          })
        }
      />
      <Box sx={{ width: "75%", margin: "auto" }}>
        <Stack spacing={2} justifyContent="center">
          {questions.map((q) => {
            return (
              <Box>
                <QuizBox {...q} />
              </Box>
            );
          })}
        </Stack>
      </Box>
    </>
  );
};

export default QuizPage;
