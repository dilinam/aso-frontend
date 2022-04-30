import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Alert from "@mui/material/Alert";

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [image, setImage] = React.useState(null);
  const [imageName, setImageName] = React.useState("");

  const fileSelectHandler = (e) => {
    setImage(e.target.files[0]);
    console.log(e);
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
          />
          <TextField
            sx={{ m: 1 }}
            fullWidth
            label="Course Title"
            variant="filled"
            multiline
          />
          <TextField
            sx={{ m: 1 }}
            fullWidth
            label="Description"
            variant="filled"
            multiline
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
        </Box>
      </Modal>
      <img src={setImage} />
    </>
  );
};

export default AddCourse;
