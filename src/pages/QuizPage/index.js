import * as React from "react";
import QuizBox from "../../components/QuizBox";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CourseSection from "../CourseSection";
import CountdownTimer from "../../components/CountdownTimer";
import SecondQuizBox from "../../components/SecondQuizBox";

const QuizPage = () => {
  const [questions, setQuestions] = React.useState([
    {
      oder: 1,
      quizTypeId: "mcq",
      question:
        "Write java code to print 1-100 odd numbers using recusive function",
      answers: ["fgfdgdfg", "dfsadfas", "dfsdfs", "dfdfdsaf"],
    },
    {
      oder: 2,
      quizTypeId: "mcq",
      question:
        "Write java code to print 1-100 odd numbers using recusive function",
      answers: ["fgfdgdfg", "dfsadfas", "dfsdfs", "dfdfdsaf"],
    },
    {
      oder: 3,
      quizTypeId: "mcq",
      question:
        "Write java code to print 1-100 odd numbers using recusive function",
      answers: ["fgfdgdfg", "dfsadfas", "dfsdfs", "dfdfdsaf"],
    },
    {
      oder: 4,
      quizTypeId: "mcq",
      question:
        "Write java code to print 1-100 odd numbers using recusive function",
      answers: ["fgfdgdfg", "dfsadfas", "dfsdfs", "dfdfdsaf"],
    },
  ]);

  return (
    <>
      <CountdownTimer />
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
            if (q.quizTypeId === "mcq") {
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
