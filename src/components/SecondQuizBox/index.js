import * as React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const SecondQuizBox = ({ quizNumber, question, answers }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    height: "50%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
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

          {/* <Typography
            variant="subtitle1"
            gutterBottom
            component="div"
            sx={{ p: 1 }}
          ></Typography> */}

          <Box>
            <Button onClick={handleOpen}>Change</Button>
          </Box>
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <TextField
              sx={{ m: 1 }}
              fullWidth
              label={"Question " + quizNumber}
              id="fullWidth"
              variant="outlined"
              multiline
              focused
            />
          </Box>
        </Modal>
      </Box>
    </>
  );
};

export default SecondQuizBox;
