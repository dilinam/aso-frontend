import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";

const CountdownTimer = () => {
  const [remainingTime, setRemainingTime] = useState(0);
  const timerId = useRef();

  useEffect(() => {
    timerId.current = setInterval(() => {
      setRemainingTime((prev) => prev + 1);
    }, 1000);
  }, []);

  var value = 10 - remainingTime;
  if (value == 0) {
    clearInterval(timerId.current);
  }
  const converter = (val) => {
    var min = ("0" + (Math.floor(val / 60) % 60)).slice(-2);
    var hour = ("0" + (Math.floor(val / 3600) % 24)).slice(-2);
    var sec = ("0" + (val % 60)).slice(-2);
    return hour + ":" + min + ":" + sec;
  };

  return (
    <div>
      <Box
        sx={{
          width: 150,
          height: 50,
          float: "right",
          alignItems: "center",
          // marginLeft : 100,
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.dark",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <p>{converter(value)}</p>
      </Box>
    </div>
  );
};

export default CountdownTimer;
