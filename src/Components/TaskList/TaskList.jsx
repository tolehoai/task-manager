import React from "react";
import PropTypes from "prop-types";

import { useStyles } from "./style.js";

import { Button, Divider, Grid } from "@mui/material";
import Task from "../Task/Task.jsx";
import { useSelector } from "react-redux";

TaskList.propTypes = {};

function TaskList(props) {
  const classes = useStyles();
  const taskList = useSelector((state) => state.event.taskList);

  return (
    <>
      <div className={classes.taskList}>
        <div className={classes.taskListTop}>
          <div className={classes.name}>Danh sách công việc</div>
          <Button variant="contained" className={classes.btnAddTask}>
            Thêm công việc
          </Button>
        </div>

        <Divider className={classes.divider} />
        <Grid container spacing={2} rowSpacing={3}>
          {taskList.map((task, index) => (
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
