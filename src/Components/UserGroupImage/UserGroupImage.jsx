import React from "react";
import PropTypes from "prop-types";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { useStyles } from "./style.js";
import { Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function UserGroupImage(props) {
  const classes = useStyles();
  // console.log("FROM UserGroup: ", props.event);
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
    </div>
  );
}

export default UserGroupImage;
