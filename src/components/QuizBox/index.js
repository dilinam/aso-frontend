import * as React from "react";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

const QuizBox = ({ quizNumber, question, answers }) => {
  const [decision, setDecision] = React.useState("check");
  const [editQuiz, setEditQuiz] = React.useState(question);
  const [newQuiz, setNewQuiz] = React.useState(question);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const quizChange = (e) => {
    setEditQuiz(e.target.value);
    console.log(e.target.value);
  };

  const newQuizSet = () => {
    setOpen(false);
    setNewQuiz(editQuiz);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    height: "75%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const Checkboxes = () => {
    return (
      <FormGroup>
        {answers.map((answer, value = 1) => {
          value = value + 1;
          return (
            <FormControlLabel
              value={value}
              control={<Checkbox />}
              label={value + ". " + answer}
            />
          );
        })}
      </FormGroup>
    );
  };

  const RadioButtonsGroup = () => {
    return (
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          {answers.map((answer, value = 1) => {
            value = value + 1;
            return (
              <FormControlLabel
                value={value + 1}
                control={<Radio />}
                label={value + ". " + answer}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    );
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

  return (
    <Box
      sx={{
        width: "90%",
        height: 300,
        backgroundColor: "#212121",
        color: "#fff",
        mx: "auto",
        borderRadius: 2,
        boxShadow: 1,
        p: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          p: 1,
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6">Question {quizNumber} </Typography>

        <Box>
          <Button onClick={handleOpen}>Change</Button>
        </Box>
      </Box>

      <Typography
        variant="subtitle1"
        gutterBottom
        component="div"
        sx={{ p: 1 }}
      >
        {newQuiz}
      </Typography>
      {decision === "radio" ? <RadioButtonsGroup /> : <Checkboxes />}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form noValidate autoComplete="off">
            <TextField
              sx={{ m: 1 }}
              fullWidth
              label={"Question " + quizNumber}
              id="fullWidth"
              variant="outlined"
              onChange={quizChange}
              multiline
              focused
              value={editQuiz}
            />
            {answers.map((answer) => {
              return (
                <TextField
                  sx={{ m: 1 }}
                  fullWidth
                  label="Answer"
                  id="fullWidth"
                  variant="outlined"
                  multiline
                  focused
                  value={answer}
                />
              );
            })}
          </form>
          <br></br>
          <ToggleButtonGroup
            color="success"
            size="small"
            value={decision}
            exclusive
            onChange={handleChange}
          >
            <ToggleButton value="radio">
              <RadioButtonCheckedIcon fontSize="small" />
            </ToggleButton>
            <ToggleButton value="check">
              <CheckBoxIcon fontSize="small" />
            </ToggleButton>
          </ToggleButtonGroup>

          <Button
            sx={{ m: 2 }}
            onClick={() => {
              setEditQuiz(question);
            }}
          >
            Reset
          </Button>
          <Button variant="contained" color="success" onClick={newQuizSet}>
            Ok
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default QuizBox;
