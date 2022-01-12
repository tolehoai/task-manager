import React from "react";
import PropTypes from "prop-types";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { useStyles } from "./style.js";
import { Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

UserGroupImage.propTypes = {};

function UserGroupImage(props) {
  const classes = useStyles();
  console.log(props.event.userList);
  return (
    <div className={classes.userGroupImage}>
      <AvatarGroup max={4} className={classes.avatarGroup}>
        {props.event.userList.map((user, index) => (
          <Avatar
            key={index}
            alt={user.name}
            src={user.avatarUrl}
            sx={{ width: 25, height: 25 }}
          />
        ))}
      </AvatarGroup>

      <span className={classes.taskTitle}>{props.title}</span>
      <ArrowForwardIosIcon />
    </div>
  );
}

export default UserGroupImage;
