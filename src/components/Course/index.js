import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Grid from '@mui/material/Grid';



const Course = ({ courseId, courseDescription, courseName, courseImage, courseCode }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardMedia
        elevation={1}
        component="img"
        height="140"
        image={courseImage}
        alt="green iguana"
      />
      <CardContent style={{ padding: "0", margin: "0" }}>
        <Typography variant="h5" component="div" textAlign="center">
          {courseCode}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" textAlign="center">
          {courseName}
        </Typography>
      </CardContent>
      <Grid container direction="row" alignItems="center" spacing={15}>
        <Grid item>
          <CardActions style={{ margin: "0" }}>
            <Button size="small" varient="text">
              Goto Course
            </Button>
          </CardActions>
        </Grid>
        <Grid item>
          <Badge color="secondary" badgeContent={4}>
            <MailIcon style={{ margin: "0" }} />
          </Badge>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Course;