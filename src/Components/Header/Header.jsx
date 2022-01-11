import React from "react";
import PropTypes from "prop-types";

import { useStyles } from "./style.js";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

import "./style.css";
import TextField from "@mui/material/TextField";
import { Avatar, Badge, Divider } from "@mui/material";
import Notification from "../Notification/Notification.jsx";
import UserInfo from "../UserInfo/UserInfo.jsx";

Header.propTypes = {};

function Header(props) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.headerWraper}>
        <div className={classes.leftHeader}>
          <div className="header-title">
            Task <span>Manager</span>
          </div>
        </div>
        <div className={classes.rightHeader}>
          <Notification />
          <UserInfo />
        </div>
      </div>
    </div>
  );
}

export default Header;
