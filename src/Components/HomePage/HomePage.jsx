import React from "react";
import PropTypes from "prop-types";

import { useStyles } from "./style.js";
import Search from "../SearchBox/SearchAppBar.jsx";
import TaskList from "../TaskList/TaskList";
import Schedule from "../Schedule/Schedule.jsx";
import TestSchedule from "../TestSchedule/TestSchedule.jsx";

Notification.propTypes = {};

function Notification(props) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.homepage}>
        <Search />
        <TaskList />
        <Schedule />
        {/* <TestSchedule /> */}
      </div>
    </>
  );
}

export default Notification;
