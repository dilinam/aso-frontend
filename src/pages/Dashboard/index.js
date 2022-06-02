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

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: "70%", borderRadius: 3 }}>1</Box>
        <Divider orientation="vertical" flexItem />
        <Box
          sx={{
            width: "28%",
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

            // bgcolor: "#616161",
          }}
        >
          1
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
