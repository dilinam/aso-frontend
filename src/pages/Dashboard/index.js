import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Dashboard = () => {
  const [date, setDate] = React.useState(new Date());

  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ width: "70%", backgroundColor: "#212121" }}>
        <Box sx={{ width: "90%", margin: "auto" }}>
          <Stack spacing={2}>
            <Item>Item 1</Item>
            <Item>Item 2</Item>
          </Stack>
        </Box>
      </Box>
      <Box sx={{ width: "28%", backgroundColor: "#212121", margin: "auto" }}>
        <Box sx={{ width: "100%" }}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <CalendarPicker
              date={date}
              onChange={(newDate) => setDate(newDate)}
              ren
            />
          </LocalizationProvider>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
