import * as React from "react";
import QuizBox from "../../components/QuizBox";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CountdownTimer from "../../components/CountdownTimer";

const QuizPage = () => {
  const questions = [
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
  ];
  return (
    <Box sx={{ width: "75%", margin: "auto" }}>
      <Stack spacing={1} justifyContent="center">
        <CountdownTimer/>
        {questions.map((q) => {
          return (
            <Box>
              {" "}
              <QuizBox {...q} />
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default QuizPage;
