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
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

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

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 8,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 18,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: "70%", borderRadius: 3 }}></Box>
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
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={600} height={300} data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />

              <Bar dataKey="uv" fill="#82ca9d" minPointSize={10} />
              {/* {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} /> //
              ))} */}
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
