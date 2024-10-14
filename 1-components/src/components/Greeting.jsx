import React from "react";

const Greeting = () => {
  const name = "John";
  let date = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>
        {days[date.getDay() - 1]}. {date.getDate()}{" "}
        {months[date.getMonth() - 1]}, {date.getFullYear()}
      </p>
    </div>
  );
};

export default Greeting;
