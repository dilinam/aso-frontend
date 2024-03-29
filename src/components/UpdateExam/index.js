import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Settings } from "@mui/icons-material";
import AXIOS_INSTANCE from "../../services/AxiosInstance";
import { BASE_URL } from "../../utils/constants";
import { DateTimePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import CourseSection from "../../pages/CourseSection";

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
  // overflowY: "scroll",
};

const UpdateExam = (props) => {
  const errors = {};
  const classes = useStyles();
  const [data, setData] = useState({});
  const [open, setOpen] = React.useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [questions, setQuestions] = React.useState([]);
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      AXIOS_INSTANCE.put(BASE_URL + "/api/exam", {
        dateTime: data.dateTime,
        duration: data.duration,
        examDescription: data.examDescription,
        examName: data.examName,
        examId: data.examId,
        deleted: data.deleted,
        course: data.course,
        createdAt:data.createdAt,
        createdBy:data.createdBy,
        forAll:data.forAll,
        status:data.status
      }).then(
        (response) => {
          console.log(response);
          setOpen(false);
          setIsSubmit(false);
        },
        (error) => {
          console.log(error);
          setOpen(false);
          setIsSubmit(false);
        }
      );
    }
  }, [formErrors, isSubmit]);
  useEffect(() => {
    setData(props.exam)
  }, []);
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
  useEffect(() => {
    setFormErrors({});
  }, [open]);
  const validateInfo = (values) => {
    console.log(values);
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
    newdata.dateTime = String(newValue);
    setData(newdata);
    console.log(data);
  };
  React.useEffect(() => {
    console.log(questions);
  }, [questions]);

  return (
    <div>
      <Button
        onClick={() => handleOpen()}
        endIcon={<Settings />}
        color="success"
      >
        change options
      </Button>
      
      <Modal open={open} onClose={handleClose} sx={{ overflowY: "scroll" }}>
        <Box sx={style}>
          <form>
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            >
              <h1>Update Exam</h1>
              <TextField
                className={classes.inputfield}
                fullWidth
                label="Name"
                error={formErrors.name == null ? false : true}
                onChange={(e) => handle(e)}
                value={data.examName}
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
                value={data.examDescription}
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
                // placeholder="duration"
                value={data.duration}
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
            <br></br>
            <br></br>
            <Button variant="outlined" type="submit" onClick={(e) => submit(e)}>
              Update
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

export default UpdateExam;
