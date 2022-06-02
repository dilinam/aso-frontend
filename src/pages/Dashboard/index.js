import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import addDays from "date-fns/addDays";
import isWithinInterval from "date-fns/isWithinInterval";
import { Scrollbars } from "react-custom-scrollbars-2";
import image from "./logo-img.jpg";
import imageCourse from "./course.jpg";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Label,
} from "recharts";
import { Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Grid } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Dashboard = () => {
  const [date, setDate] = React.useState(new Date());

  var moment = require("moment");

  let finalDate = addDays(date, 10); // add 10 days
  let endDate = moment(finalDate).format("YYYY, MM, DD");
  let startDate = moment(date).format("YYYY, MM, DD");
  const [courseList, setCourseList] = React.useState([
    {
      courseCode: "EEI4169",
      finishedExam: 2,
      exams: 3,
    },
    {
      courseCode: "EEI4168",
      finishedExam: 1,
      exams: 3,
    },
    {
      courseCode: "EEI4167",
      finishedExam: 3,
      exams: 3,
    },
  ]);
  const upComingEvents = [
    {
      date: "2022, 06, 04",
      subject: "EEX5563",
      event: "CAT 1",
      startTime: "10:30 AM",
      endTime: "11:45 AM",
    },
    {
      date: "2022, 06, 05",
      subject: "EEX4465",
      event: "CAT 1",
      startTime: "10:30 AM",
      endTime: "11:45 AM",
    },
    {
      date: "2022, 06, 06",
      subject: "EEI4346",
      event: "CAT 2",
      startTime: "10:30 AM",
      endTime: "11:45 AM",
    },
    {
      date: "2022, 06, 06",
      subject: "EEX4465",
      event: "CAT 2",
      startTime: "10:30 AM",
      endTime: "11:45 AM",
    },
    {
      date: "2022, 06, 07",
      subject: "EEX4465",
      event: "CAT 2",
      startTime: "10:30 AM",
      endTime: "11:45 AM",
    },
    {
      date: "2022, 06, 10",
      subject: "EEX4465",
      event: "CAT 2",
      startTime: "10:30 AM",
      endTime: "11:45 AM",
    },
    {
      date: "2022, 06, 10",
      subject: "EEX4465",
      event: "CAT 2",
      startTime: "10:30 AM",
      endTime: "11:45 AM",
    },
    {
      date: "2022, 06, 10",
      subject: "EEX4465",
      event: "CAT 2",
      startTime: "10:30 AM",
      endTime: "11:45 AM",
    },
    {
      date: "2022, 06, 10",
      subject: "EEX4465",
      event: "CAT 2",
      startTime: "10:30 AM",
      endTime: "11:45 AM",
    },
  ];

  const data = [
    {
      name: "EEX4465",
      marks: 75,
    },
    {
      name: "EEX4464",
      marks: 55,
    },
    {
      name: "EEX4463",
      marks: 65,
    },
    {
      name: "EEX4462",
      marks: 48,
    },
    {
      name: "EEX4461",
      marks: 35,
    },
    {
      name: "EEX4465",
      marks: 95,
    },
    {
      name: "EEX4468",
      marks: 85,
    },
    {
      name: "EEX4469",
      marks: 75,
    },
    {
      name: "EEX4467",
      marks: 45,
    },
    {
      name: "EEX4466",
      marks: 75,
    },
  ];

  return (
    <>
      <Box sx={{ width: "100%", borderRadius: 3, height: "7%" }}>
        <img src={image} height="100%" width="100%" />
      </Box>
      <br></br>
      <Box sx={{ display: "flex" }}>
        <Divider orientation="vertical" flexItem />
        <Box sx={{ width: "70%", borderRadius: 3 }}>
          <Typography gutterBottom variant="h6">
            Recently Acess Courses
          </Typography>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {courseList.map((course) => (
              <Grid item xs={6}>
                <Item>
                  <Card sx={{ width: "345" }}>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="80"
                      image={imageCourse}
                    />
                    <CardContent>
                      <Stack spacing={15} direction="row">
                        <Typography gutterBottom variant="h6" component="div">
                          {course.courseCode}
                        </Typography>
                        <Box
                          sx={{ position: "relative", display: "inline-flex" }}
                        >
                          <CircularProgress
                            variant="determinate"
                            marginLeft="10"
                            value={(course.finishedExam / course.exams) * 100}
                          />
                          <Box
                            sx={{
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                              position: "absolute",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Typography
                              variant="caption"
                              component="div"
                              color="text.secondary"
                            >
                              {`${
                                Math.round((course.finishedExam / course.exams) *
                                100)
                              }%`}
                            </Typography>
                          </Box>
                        </Box>
                      </Stack>
                    </CardContent>
                  </Card>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            width: "30%",
            // bgcolor: "#616161",
            margin: "auto",
            borderRadius: 3,
          }}
        >
          <LocalizationProvider
            dateAdapter={AdapterDateFns}
            sx={{ width: "100%" }}
          >
            <CalendarPicker
              date={date}
              onChange={(newDate) => setDate(newDate)}
            />
          </LocalizationProvider>
        </Box>
      </Box>
      <Divider flexItem />
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            width: "70%",
          }}
        >
          <Typography gutterBottom variant="h6">
            last exams analiys
          </Typography>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart data={data}>
              <XAxis dataKey="name" angle={-45} textAnchor="end">
                <Label value="Subjects" position="bottom" offset={45} />
              </XAxis>
              <YAxis />
              <Tooltip />
              <Bar dataKey="marks">
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.marks > 50 ? "green" : "red"}
                    label={entry.name}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box
          sx={{
            width: "28%",
            marginTop: "10px",
            borderRadius: 3,
            m: "auto",
            // bgcolor: "#616161",
            alignContent: "center",
          }}
        >
          <Scrollbars autoHide style={{ width: "100%", height: 400 }}>
            <List
              sx={{
                width: "62%",
                m: "auto",
                bgcolor: "background.paper",
                maxHeight: 400,
                // overflow: "auto",
              }}
            >
              {upComingEvents.map((event) => {
                const isEventInRange = isWithinInterval(new Date(event.date), {
                  start: new Date(startDate),
                  end: new Date(endDate),
                });
                if (isEventInRange) {
                  return (
                    <>
                      <ListItem alignItems="center">
                        <ListItemText
                          primary={event.date}
                          secondary={
                            <React.Fragment>
                              <Typography
                                sx={{ display: "inline" }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                              >
                                {event.subject + " | " + event.event}
                              </Typography>
                              {" - " + event.startTime + "-" + event.endTime}
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                      <Divider variant="middle" component="li" />
                    </>
                  );
                }
              })}
            </List>
          </Scrollbars>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
