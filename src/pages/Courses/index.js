import * as React from 'react';
import Grid from '@mui/material/Grid';
import Course from '../../components/Course';


const Courses = () =>{

    const courseList = [
    {courseId : 1, courseCode : 'EEX4465', courseName : 'Data Stucture and Algorithems', image : 'http://hd.wallpaperswide.com/thumbs/motherboard_2-t2.jpg'}, 
    {courseId : 2, courseCode : 'EEI4362', courseName : 'oop concepts', image :'http://hd.wallpaperswide.com/thumbs/abbreviation-t2.jpg'}, 
    {courseId : 3, courseCode : 'EEI3372', courseName : 'python', image : 'http://hd.wallpaperswide.com/thumbs/cpu_wireframe-t2.jpg'},
    {courseId : 4, courseCode : 'EEI4346', courseName : 'web tecnologies', image: 'http://hd.wallpaperswide.com/thumbs/coding-t2.jpg'},
    {courseId : 5, courseCode : 'EEX4465', courseName : 'Data Stucture and Algorithems'}, 
    {courseId : 6, courseCode : 'EEI4362', courseName : 'oop concepts'}, 
    {courseId : 7, courseCode : 'EEI3372', courseName : 'python'},
    {courseId : 8, courseCode : 'EEI4346', courseName : 'web tecnologies'},
    {courseId : 9, courseCode : 'EEX4465', courseName : 'Data Stucture and Algorithems', image : 'http://hd.wallpaperswide.com/thumbs/motherboard_2-t2.jpg'}, 
    {courseId : 10, courseCode : 'EEI4362', courseName : 'oop concepts', image :'http://hd.wallpaperswide.com/thumbs/abbreviation-t2.jpg'}, 
    {courseId : 11, courseCode : 'EEI3372', courseName : 'python', image : 'http://hd.wallpaperswide.com/thumbs/cpu_wireframe-t2.jpg'},
    {courseId : 12, courseCode : 'EEI4346', courseName : 'web tecnologies', image: 'http://hd.wallpaperswide.com/thumbs/coding-t2.jpg'},
    {courseId : 13, courseCode : 'EEX4465', courseName : 'Data Stucture and Algorithems'},
    {courseId : 14, courseCode : 'EEI4362', courseName : 'oop concepts', image :'http://hd.wallpaperswide.com/thumbs/abbreviation-t2.jpg'}, 
    {courseId : 15, courseCode : 'EEI3372', courseName : 'python', image : 'http://hd.wallpaperswide.com/thumbs/cpu_wireframe-t2.jpg'},
    
    ]

    

    return(
      
      <Grid container rowSpacing={3} columnSpacing={{ xs: 2, sm: 2, md: 3 }} justifyContent="center" alignItems="center">
        {courseList.map((course)=>{return( <Grid item md={4} xs={12} s={6} lg={2.8}>
          <Course key={course.courseId} {...course}>

        </Course>
        </Grid>)})}
      
      
      </Grid>
    );
};

export default Courses;