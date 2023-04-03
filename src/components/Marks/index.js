import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import { AlignHorizontalCenter } from '@mui/icons-material';
import { Divider } from '@material-ui/core';
import { borderBottom } from '@mui/system';
import DisplayMarks from '../DisplayMarks';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Marks = () => {
    const [data, setData] = React.useState([
      {
        coursename: "test1",
        exam: [ {
            name :"cat 1",
            mark: 75,
            date : "2020/04/05"
        },{
            name :"cat 2",
            mark: 85,
            date : "2020/08/12"
        },{
            name :"final",
            mark: 65,
            date : "2020/12/30"
        },]
      },
      {
        coursename: "test2",
        exam:[ {
            name :"cat 2",
            mark: 75,
            date : "2020/04/05"
        }],
      },
      {
        coursename: "test3",
        exam: [{
            name :"cat 1",
            mark: 75,
            date : "2020/04/05"
        }],
      },
    ]);
  return (
    <div>
      {" "}
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <Typography variant="h4">Courses</Typography>
        <br></br>

        <Stack container="true" spacing={2} alignItems="center">
          
          {data.map((data) => (
            <Item item sx={{ width: "50%" }}>
              <DisplayMarks exam = {data.exam} course = {data.coursename}></DisplayMarks>
            </Item>
          ))}
        </Stack>
      </Box>
    </div>
  );
}

export default Marks


