import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Divider from "@mui/material/Divider";
import Radio from "@mui/material/Radio";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Checkbox from "@mui/material/Checkbox";

const CourseSection = (props) => {
  const [selectedValue, setSelectedValue] = React.useState("mcq");
  const [decision, setDecision] = React.useState("check");
  const [essayAnswerType, setEssayAnswerType] = React.useState("submit-box");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [quiz, setQuiz] = React.useState({
    quizNumber: 0,
    question: "",
    answers: ["", "", "", ""],
  });
  console.log(quiz.question);

  const questionTypeHandler = (event) => {
    // handle what type of question box should create (mcq, essay, stuctured)
    setSelectedValue(event.target.value);
    console.log(event.target.checked);
  };

  const essayAnswerTypeHandler = (e) => {
    // hadle how essay answers should input
    setEssayAnswerType(e.target.value);
  };

  const handleChange = () => {
    if (decision === "check") {
      console.log("radio");
      setDecision("radio");
    } else {
      console.log("check");
      setDecision("check");
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    border: "2px solid #000",
    borderRadius: "10px",
    boxShadow: 24,
    backgroundColor: "#212121",
    p: 4,
  };
  // const Input = styled("input")({
  //   display: "none",
  // });

  return (
    <>
      {/* button for add new question */}
      <Button variant="outlined" onClick={handleOpen}>
        New Question
      </Button>
      <Modal // modal start here
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClose={handleClose}
      >
        <Box sx={style}>
          <Typography variant="h6" component="h6" sx={{ textAlign: "center" }}>
            ADD NEW QUESTION
          </Typography>
          <Divider variant="middle" />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              m: 0.5,
              flexWrap: "wrap-reverse",
            }}
          >
            <Box>
              Mcq Question
              <Radio
                checked={selectedValue === "mcq"}
                onChange={questionTypeHandler}
                value="mcq"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
              />
            </Box>
            <Box>
              Stuctured Question{" "}
              <Radio
                checked={selectedValue === "stuctured"}
                onChange={questionTypeHandler}
                value="stuctured"
                name="radio-buttons"
                inputProps={{ "aria-label": "B" }}
              />
            </Box>
            <Box>
              Essay Question{" "}
              <Radio
                checked={selectedValue === "essay"}
                onChange={questionTypeHandler}
                value="essay"
                name="radio-buttons"
                inputProps={{ "aria-label": "B" }}
              />
            </Box>
          </Box>
          <TextField
            variant="outlined"
            color="success"
            multiline
            fullWidth
            value={quiz.question}
            onChange={(e) => {
              setQuiz((prev) => {
                let temp = { ...prev };
                temp.question = e.target.value;
                return temp;
              });
              console.log(quiz.question);
            }}
            id="standard-basic"
            label="Question"
            sx={{ alignContent: "center", p: 1 }}
          />

          {/* {quiz.answers.map((item, index) => {
            return (
              <Box sx={{ display: "flex" }}>
                {decision === "check" ? (
                  <Checkbox inputProps={{ "aria-label": "controlled" }} />
                ) : (
                  <Radio
                    name="radio-buttons"
                    value={index}
                    inputProps={{ "aria-label": "A" }}
                  />
                )}

                <TextField
                  variant="outlined"
                  color="success"
                  fullWidth
                  multiline
                  value={item}
                  onChange={(e) => {
                    setQuiz((prev) => {
                      let temp = { ...prev };
                      temp.answers[index] = e.target.value;
                      return temp;
                    });
                  }}
                  label={"Answer " + (index + 1)}
                  sx={{ alignContent: "center", p: 1 }}
                />
              </Box>
            );
          })} */}

          {selectedValue === "mcq" ? ( // check the question type and chnage the layout of each question display to the end user
            quiz.answers.map((item, index) => {
              index = index + 1;
              return (
                <Box sx={{ display: "flex" }}>
                  {decision === "check" ? (
                    <Checkbox
                      inputProps={{ "aria-label": "controlled" }}
                      value={index}
                    />
                  ) : (
                    <Radio
                      name="radio-buttons"
                      value={index}
                      inputProps={{ "aria-label": "A" }}
                      onChange={(e) => {
                        console.log(e.target.value);
                      }}
                    />
                  )}

                  <TextField
                    variant="outlined"
                    color="success"
                    fullWidth
                    multiline
                    value={item}
                    onChange={(e) => {
                      setQuiz((prev) => {
                        let temp = { ...prev };
                        temp.answers[index] = e.target.value;
                        return temp;
                      });
                    }}
                    label={"Answer " + (index + 1)}
                    sx={{ alignContent: "center", p: 1 }}
                  />
                </Box>
              );
            })
          ) : selectedValue === "essay" ? (
            <Box
              sx={{
                width: "80%",
                margin: "6px auto ",
                border: "0.5px solid #bdbdbd",
                borderRadius: "10px",
                padding: "6px",
              }}
            >
              <Typography
                sx={{ textAlign: "center" }}
                variant="subtitle1"
                gutterBottom
                component="div"
              >
                Select Answer Submit Method
              </Typography>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Box>
                  Drop Box{" "}
                  <Radio
                    checked={essayAnswerType === "submit-box"}
                    value="submit-box"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                    onChange={essayAnswerTypeHandler}
                  />{" "}
                </Box>
                <Box>
                  {" "}
                  Text Field{" "}
                  <Radio
                    checked={essayAnswerType === "text-field"}
                    value="text-field"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "B" }}
                    onChange={essayAnswerTypeHandler}
                  />
                </Box>
                <Box>
                  {" "}
                  Both{" "}
                  <Radio
                    checked={essayAnswerType === "both"}
                    value="both"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "C" }}
                    onChange={essayAnswerTypeHandler}
                  />
                </Box>
              </div>
            </Box>
          ) : (
            <></>
          )}

          <br></br>

          <Divider variant="middle" />
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              m: 2,
              mx: "auto",
              p: 1,
            }}
          >
            {selectedValue === "mcq" ? ( // if selected question type is mcq this will display and ask to choose it has single or multiple answers
              <Box>
                Multiple Question
                <ToggleButtonGroup
                  color="success"
                  size="small"
                  value={decision}
                  exclusive
                  onChange={handleChange}
                >
                  <ToggleButton value="radio">NO</ToggleButton>
                  <ToggleButton value="check">YES</ToggleButton>
                </ToggleButtonGroup>
              </Box>
            ) : (
              <></>
            )}

            <Button
              variant="contained"
              endIcon={<SendIcon />}
              color="success"
              sx={{ alignContent: "right" }}
              onClick={() => props.addNewQuiz({ ...quiz })}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default CourseSection;
