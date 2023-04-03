import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import axios from "axios";
import Modal from "@mui/material/Modal";
import { Grid, Paper } from "@mui/material";
import { AddCircleOutlined } from "@mui/icons-material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import CourseSection from "../../pages/CourseSection";
import AXIOS_INSTANCE from "../../services/AxiosInstance";
import { BASE_URL } from "../../utils/constants";
import AddCandidateToExam from "../../components/AddCandidateToExam";

const useStyles = makeStyles({
  inputfield: {
    width: 500,
    maxWidth: "100%",
    marginTop: "100px",
  },
});
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "rgba(58, 56, 69,0.9)",
  border: "2px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};
const AddNewExam = () => {
  const errors = {};
  const classes = useStyles();
  const [data, setData] = useState({
    dateTime: "",
  });
  const [open, setOpen] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      AXIOS_INSTANCE.post(BASE_URL + "/api/exam", {
        questions: questions,
        exam: data,
      }).then(
        (response) => {
          console.log(response);
          setOpen(false);
          setIsSubmit(false);
          setQuestions([]);
        },
        (error) => {
          console.log(error);
          setOpen(false);
          setIsSubmit(false);
        }
      );
    }
  },[formErrors,isSubmit]);
  const handle = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  };
  const submit = (e) => {
    e.preventDefault();
    setFormErrors(validateInfo(data));
    setIsSubmit(true);
    if (errors.length > 0) {
      setOpen(false);
    }
    console.log(open);
  };
  useEffect(()=>{
    setFormErrors({})

  },[open])
  const validateInfo = (values) => {
    console.log(values)
    if (false) {
      errors.name = "name required.";
    }
    if (false) {
      errors.description = "Description required.";
    }
    if (false) {
      errors.description = "DateTime required.";
    }
    return errors;
  };
  //modal options
  
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = (e) => {
    setOpen(false);
  };
  const cancel = (e) => {
    e.preventDefault();
    setOpen(false);
  };
  const handleChange = (newValue) => {
    const newdata = { ...data };
    newdata.dateTime = newValue;
    setData(newdata);
    console.log(data);
  };
  React.useEffect(() => {
    console.log(questions)
  }, [questions]);
  return (
    <div>
      <Grid item alignItems="center" onClick={() => handleOpen()}>
        <Paper
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "20em",
            width: "15em",
            "&:hover": {
              backgroundColor: "rgba(210, 231, 247, 0.3)",
            },
            border: "2px dashed #82b1ff",
            color: "#82b1ff",
          }}
        >
          <div> ADD </div>
          &nbsp;&nbsp;
          <AddCircleOutlined fontSize="large" />
        </Paper>
      </Grid>
      <Modal open={open} onClose={handleClose} sx={{ overflowY: "scroll" }}>
        <Box sx={style}>
          <form>
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            >
              <h1>Add New Exam</h1>
              <TextField
                className={classes.inputfield}
                fullWidth
                label="Name"
                error={formErrors.name == null ? false : true}
                onChange={(e) => handle(e)}
                placeholder="Name"
                id="examName"
                type="text"
                helperText={formErrors.name}
              />
              &nbsp;
              <TextField
                className={classes.inputfield}
                label="Description"
                onChange={(e) => handle(e)}
                id="examDescription"
                placeholder="Description"
                type="text"
                multiline
                error={formErrors.description == null ? false : true}
                maxRows={4}
                helperText={formErrors.description}
              />
              &nbsp;
              <TextField
                className={classes.inputfield}
                fullWidth
                label="Duration"
                error={formErrors.duration == null ? false : true}
                onChange={(e) => handle(e)}
                placeholder="duration"
                id="duration"
                type="text"
                helperText={formErrors.duration}
              />
            </Box>
            <br></br>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <br></br>
            <br></br>
            <CourseSection
              addNewQuiz={(newQuiz) =>
                setQuestions((prev) => {
                  let updateQuiz = [...prev, newQuiz];
                  return updateQuiz;
                })
              }
            />
            <AddCandidateToExam/>
            <br></br>
            <br></br>
            <Button variant="outlined" type="submit" onClick={(e) => submit(e)}>
              SAVE EXAM
            </Button>
            <Button
              // variant="outlined"
              color="error"
              type="submit"
              onClick={(e) => cancel(e)}
            >
              Cancel
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};


export default AddNewExam;