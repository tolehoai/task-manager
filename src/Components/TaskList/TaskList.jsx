import React from "react";
import PropTypes from "prop-types";

import { useStyles } from "./style.js";

import { Grid } from "@mui/material";
import Task from "../Task/Task.jsx";

TaskList.propTypes = {};

const listTask = [
  {
    taskName: "Kỹ thuật phát hiện tấn công mạng ",
    level: "level0",
    deadline: "15 tháng 1",
  },
  {
    taskName: "An Ninh Mạng",
    level: "level1",
    deadline: "20 tháng 1",
  },
  {
    taskName: "Niên luận cơ sở",
    level: "level2",
    deadline: "25 tháng 1",
  },
  {
    taskName: "An toàn hệ thống",
    level: "level0",
    deadline: "10 tháng 2",
  },
  {
    taskName: "Digital Marketing",
    level: "level1",
    deadline: "10 tháng 1",
  },
  {
    taskName: "English",
    level: "level2",
    deadline: "18 tháng 1",
  },
];

function TaskList(props) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.taskList}>
        <div className={classes.name}>Danh sách công việc</div>
        <Grid container spacing={2} rowSpacing={3}>
          {listTask.map((task, index) => (
            <Grid key={index} item xs={3}>
              <Task task={task} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}

export default TaskList;
