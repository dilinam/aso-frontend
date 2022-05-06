import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Alert from "@mui/material/Alert";
import AXIOS_INSTANCE from "../../services/AxiosInstance";
import { BASE_URL } from "../../utils/constants";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Input = styled("input")({
  display: "none",
});

const AddCourse = () => {
  const errors = {};
  const [data, setData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [image, setImage] = React.useState(null);
  const [imageName, setImageName] = React.useState("");

  const fileSelectHandler = (e) => {
    setImage(e.target.files[0]);
    console.log(e);
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      AXIOS_INSTANCE.post(BASE_URL + "/api/course", {
        courseName: data.courseName,
        courseDescription: data.courseDescription,
        courseCode: data.courseCode,
        // courseImage:image,
        // tenant: null,
      }).then(
        (response) => {
          console.log(response);
          setOpen(false);
          setIsSubmit(false);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }, [formErrors, isSubmit]);
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
const validateInfo = (values) => {
  if (false) {
    errors.tenantName = "Tenant name required.";
  }
  if (false) {
    errors.description = "Tenant Description required.";
  }
  if (false) {
    errors.tenantAdminUserName = "Admin User Name required.";
  }
  if (false) {
    errors.tenantAdminPassword = "Admin Password required.";
  }
  return errors;
};
//modal options
const cancel = (e) => {
  e.preventDefault();
  setOpen(false);
};
  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h6" sx={{ textAlign: "center" }}>
            ADD NEW COURSE
          </Typography>
          <Divider variant="middle" sx={{ m: 3 }} />

          <TextField
            sx={{ m: 1 }}
            fullWidth
            label="Course Code"
            variant="filled"
            error={formErrors.courseCode == null ? false : true}
            onChange={(e) => handle(e)}
            id="courseCode"
            value={data.courseCode}
            type="text"
            helperText={formErrors.courseCode}
          />
          <TextField
            sx={{ m: 1 }}
            fullWidth
            label="Course Title"
            variant="filled"
            multiline
            error={formErrors.courseName == null ? false : true}
            onChange={(e) => handle(e)}
            id="courseName"
            value={data.courseName}
            type="text"
            helperText={formErrors.courseName}
          />
          <TextField
            sx={{ m: 1 }}
            fullWidth
            label="Description"
            variant="filled"
            multiline
            error={formErrors.courseDescription == null ? false : true}
            onChange={(e) => handle(e)}
            id="courseDescription"
            value={data.courseDescription}
            type="text"
            helperText={formErrors.courseDescription}
          />
          <Box
            sx={{
              display: "flex",
              m: 1,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <label htmlFor="contained-button-file">
              <Input
                accept="image/*"
                id="contained-button-file"
                type="file"
                onChange={fileSelectHandler}
              />
              <Button variant="contained" component="span">
                Upload
              </Button>
            </label>
            <Alert sx={{ display: "" }} icon={false} onClose={() => {}}>
              {imageName}
            </Alert>
          </Box>
          <Button variant="outlined" type="submit" onClick={(e) => submit(e)}>
            Register
          </Button>
          <Button
            // variant="outlined"
            color="error"
            type="submit"
            onClick={(e) => cancel(e)}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
      <img src={setImage} />
    </>
  );
};

export default AddCourse;
