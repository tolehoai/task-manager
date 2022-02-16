import React from "react";
import { useSelector } from "react-redux";
import Schedule from "../Schedule/Schedule.jsx";
import Search from "../SearchBox/SearchAppBar.jsx";
import TaskList from "../TaskList/TaskList";
import { useStyles } from "./style.js";

Notification.propTypes = {};

function Notification(props) {
  const classes = useStyles();
  const height = useSelector((state) => state.event.heightOfRow);

  return (
    <>
      <div className={classes.homepage}>
        <h1>{height}</h1>
        <Search />
        <TaskList />
        <Schedule height={height} />
      </div>
    </>
  );
}

export default Notification;
