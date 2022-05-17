import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { margin } from "@mui/system";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import AddPhotoAlternateTwoToneIcon from "@mui/icons-material/AddPhotoAlternateTwoTone";
import Modal from "@mui/material/Modal";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Input = styled("input")({
  display: "none",
});

// modal styles
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Profile = () => {
  const [userData, setUserData] = React.useState({
    userId: 519220940,
    userFirstName: "Nirmal",
    userLastName: "Hansaka",
    userNIC: "975342612V",
    userAddress: "534/A, Makola North, Makola",
    userContactNumber: "0754490704",
    userEmail: "hansakanirmal123@gmail.com",
    userDOB: "12/12/1997",
    userImage: { previweImage: "", uploadImage: "" },
    courses: [
      { courseCode: "EEX4465", courseTitle: "Data Stucture and Algorithems" },
      { courseCode: "EEX4337", courseTitle: "Data Science" },
      { courseCode: "EEI5563", courseTitle: "Operating Systems" },
    ],
  });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const imageUploadHandler = (e) => {
    if (e.target.files.length) {
      setUserData({
        ...userData,
        userImage: {
          previweImage: URL.createObjectURL(e.target.files[0]),
          uploadImage: e.target.files[0],
        },
      });
    }
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stack spacing={2} alignItems="center">
          <Item sx={{ width: "75%" }}>
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                // <IconButton
                //   color="primary"
                //   aria-label="upload picture"
                //   component="span"
                // >
                //   <AddPhotoAlternateTwoToneIcon />
                // </IconButton>
                <label htmlFor="icon-button-file">
                  <Input
                    accept="image/*"
                    id="icon-button-file"
                    type="file"
                    onChange={imageUploadHandler}
                  />
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <AddPhotoAlternateTwoToneIcon />
                  </IconButton>
                </label>
              }
            >
              <Avatar
                alt={userData.userFirstName}
                src={userData.userImage.previweImage}
                sx={{ width: 95, height: 95 }}
              />
            </Badge>
            <br />

            <Typography variant="h6" gutterBottom component="div">
              {userData.userFirstName + " " + userData.userLastName}
            </Typography>
          </Item>
          <Item sx={{ width: "75%" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" gutterBottom component="div">
                User Information
              </Typography>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                onClick={handleOpen}
              >
                <EditTwoToneIcon />
              </IconButton>
            </Box>
            <Divider />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                m: 2,
              }}
            >
              <Typography>Student ID</Typography>
              <Typography>{userData.userId}</Typography>
            </Box>

            <Divider variant="middle" />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                m: 2,
              }}
            >
              <Typography>First Name</Typography>
              <Typography>{userData.userFirstName}</Typography>
            </Box>
            <Divider variant="middle" />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                m: 2,
              }}
            >
              <Typography>Last Name</Typography>
              <Typography>{userData.userLastName}</Typography>
            </Box>
            <Divider variant="middle" />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                m: 2,
              }}
            >
              <Typography>Date of birth</Typography>
              <Typography>{userData.userDOB}</Typography>
            </Box>
            <Divider variant="middle" />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                m: 2,
              }}
            >
              <Typography>NIC</Typography>
              <Typography>{userData.userNIC}</Typography>
            </Box>
            <Divider variant="middle" />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                m: 2,
              }}
            >
              <Typography>Contact Number</Typography>
              <Typography>{userData.userContactNumber}</Typography>
            </Box>
            <Divider variant="middle" />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                m: 2,
              }}
            >
              <Typography>E-Mail</Typography>
              <Typography>{userData.userEmail}</Typography>
            </Box>
            <Divider variant="middle" />
          </Item>

          <Item sx={{ width: "75%" }}>
            <Box>
              <Typography variant="h6" gutterBottom component="div">
                Courses
              </Typography>
            </Box>
            <Divider />
            {userData.courses.map((course) => {
              return (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      m: 2,
                    }}
                  >
                    <Typography>{course.courseCode}</Typography>
                    <Typography>{course.courseTitle}</Typography>
                  </Box>
                  <Divider variant="middle" />
                </>
              );
            })}
          </Item>
        </Stack>
      </Box>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default Profile;
