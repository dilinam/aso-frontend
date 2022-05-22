import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Course from "../../components/Course";
import Fab from "@mui/material/Fab";
import AXIOS_INSTANCE from "../../services/AxiosInstance";
import { BASE_URL } from "../../utils/constants";
import AddCourse from "../../components/AddCourse";

const Courses = () => {
  const [courseList, setCourseList] = useState([]);
  useEffect(() => {
    AXIOS_INSTANCE.get(BASE_URL + "/api/course").then((response) => {
      console.log(response.data);
      setCourseList(response.data);
    });
  }, []);
  return (
    <Box>
      <AddCourse/>
      <Grid
        container
        rowSpacing={3}
        columnSpacing={{ xs: 2, sm: 2, md: 3 }}
        alignItems="center"
      >
        {courseList.map((course) => {
          return (
            <Grid item md={4} xs={12} s={6} lg={2.8}>
              <Course key={course.courseId} {...course} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Courses;
