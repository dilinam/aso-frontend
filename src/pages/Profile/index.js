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
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TextField from "@mui/material/TextField";
import InputPassword from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";

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
  height: "58%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

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

  const [value, setValue] = React.useState(0);

  const tabHandleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [oldPasswordValues, setOldPasswordValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const [newPasswordValues, setNewPasswordValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const [confirmPasswordValues, setConfirmPasswordValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const oldHandleChange = (prop) => (event) => {
    setOldPasswordValues({
      ...oldPasswordValues,
      [prop]: event.target.value,
    });
  };

  const oldHandleClickShowPassword = () => {
    setOldPasswordValues({
      ...oldPasswordValues,
      showPassword: !oldPasswordValues.showPassword,
    });
  };

  const oldHandleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const newHandleChange = (prop) => (event) => {
    setNewPasswordValues({
      ...newPasswordValues,
      [prop]: event.target.value,
    });
  };

  const newHandleClickShowPassword = () => {
    setNewPasswordValues({
      ...newPasswordValues,
      showPassword: !newPasswordValues.showPassword,
    });
  };

  const confirmHandleChange = (prop) => (event) => {
    setConfirmPasswordValues({
      ...confirmPasswordValues,
      [prop]: event.target.value,
    });
  };

  const confirmHandleClickShowPassword = () => {
    setConfirmPasswordValues({
      ...confirmPasswordValues,
      showPassword: !confirmPasswordValues.showPassword,
    });
  };

  const confirmHandleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const newHandleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                m: 2,
              }}
            >
              <Typography>Address</Typography>
              <Typography>{userData.userAddress}</Typography>
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
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={tabHandleChange}
                  aria-label="basic tabs example"
                  variant="fullWidth"
                >
                  <Tab label="General Settings" {...a11yProps(0)} />
                  <Tab label="Security Settings" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <TextField
                  id="first-name"
                  fullWidth
                  label="First Name"
                  variant="standard"
                  sx={{ m: 1 }}
                  value={userData.userFirstName}
                />
                <TextField
                  id="last-name"
                  fullWidth
                  label="First Name"
                  variant="standard"
                  sx={{ m: 1 }}
                  value={userData.userLastName}
                />
                <TextField
                  id="contact-number"
                  fullWidth
                  label="Contact Number"
                  variant="standard"
                  sx={{ m: 1 }}
                  value={userData.userContactNumber}
                />
                <TextField
                  id="email"
                  fullWidth
                  label="Email"
                  variant="standard"
                  sx={{ m: 1 }}
                  value={userData.userEmail}
                />
                <TextField
                  id="address"
                  fullWidth
                  label="Address"
                  variant="standard"
                  sx={{ m: 1 }}
                  value={userData.userAddress}
                />
                <Box
                  sx={{
                    display: "flex",
                    m: 3,
                    justifyContent: "space-between",
                  }}
                >
                  {" "}
                  <Button variant="outlined" color="error">
                    Reset
                  </Button>
                  <Button color="success" variant="outlined">
                    Confirm
                  </Button>
                </Box>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <FormControl sx={{ m: 2, width: "100%" }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-password">
                    Old Password
                  </InputLabel>
                  <InputPassword
                    id="old-password"
                    type={oldPasswordValues.showPassword ? "text" : "password"}
                    value={oldPasswordValues.password}
                    onChange={oldHandleChange("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={oldHandleClickShowPassword}
                          onMouseDown={oldHandleMouseDownPassword}
                        >
                          {oldPasswordValues.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl sx={{ m: 2, width: "100%" }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-password">
                    New Password
                  </InputLabel>
                  <InputPassword
                    id="new-password"
                    type={newPasswordValues.showPassword ? "text" : "password"}
                    value={newPasswordValues.password}
                    onChange={newHandleChange("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={newHandleClickShowPassword}
                          onMouseDown={newHandleMouseDownPassword}
                        >
                          {newPasswordValues.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl sx={{ m: 2, width: "100%" }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-password">
                    Confirm Password
                  </InputLabel>
                  <InputPassword
                    id="confirm-password"
                    type={
                      confirmPasswordValues.showPassword ? "text" : "password"
                    }
                    value={confirmPasswordValues.password}
                    onChange={confirmHandleChange("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={confirmHandleClickShowPassword}
                          onMouseDown={confirmHandleMouseDownPassword}
                        >
                          {confirmPasswordValues.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <Box
                  sx={{
                    display: "flex",
                    m: 3,
                    justifyContent: "space-between",
                  }}
                >
                  {" "}
                  <Button variant="outlined" color="error">
                    Reset
                  </Button>
                  <Button color="success" variant="outlined">
                    Confirm
                  </Button>
                </Box>
              </TabPanel>
            </Box>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default Profile;
