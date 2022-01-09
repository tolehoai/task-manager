import React from "react";
import PropTypes from "prop-types";

import { useStyles } from "./style.js";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

import TextField from "@mui/material/TextField";
import { Avatar, Badge, Box, Fade, Menu, MenuItem } from "@mui/material";

Notification.propTypes = {};

function Notification(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  return (
    <>
      <div className="nofi" onClick={handleClick}>
        <Badge badgeContent={5} color="secondary">
          <div className={classes.notificationIcon}>
            <NotificationsNoneIcon />
          </div>
        </Badge>
      </div>
      <Menu
        className={classes.menu}
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>
          <div className={classes.nofiItem}>
            <Avatar
              className={classes.nofiLeft}
              alt="Person Image"
              src="https://i.pinimg.com/550x/bc/2a/96/bc2a9682c5795302642424aa3e684ffe.jpg"
            />
            <div className={classes.nofiRight}>
              <Box
                className={classes.nofiContent}
                component="div"
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                <strong>Võ Phước Nghĩa</strong>
                đã hoàn thành <strong>Tìm hiểu lý thuyết Snort</strong>
              </Box>
              <Box
                className={classes.nofiTime}
                component="div"
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                15 phút trước
              </Box>
            </div>
          </div>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <div className={classes.nofiItem}>
            <Avatar
              className={classes.nofiLeft}
              alt="Person Image"
              src="https://i.pinimg.com/474x/33/3e/5a/333e5a3dfc1cf3898959a0e26d1c241e.jpg"
            />
            <div className={classes.nofiRight}>
              <Box
                className={classes.nofiContent}
                component="div"
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                <strong>Trần Trọng Toàn</strong>đã hoàn thành{" "}
                <strong>Làm slide phát hiện tấn công mạng</strong>
              </Box>
              <Box
                className={classes.nofiTime}
                component="div"
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                20 phút trước
              </Box>
            </div>
          </div>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <div className={classes.nofiItem}>
            <Avatar
              className={classes.nofiLeft}
              alt="Person Image"
              src="https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.6435-9/30725748_894736990691384_2491965833597681664_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=UWSAbDB9EdgAX-9K8b_&_nc_ht=scontent.fsgn5-1.fna&oh=00_AT8drSPfIpJQFqofUKetb540oi711Iq2FJ3p278XbCTRQA&oe=61FE47F2"
            />
            <div className={classes.nofiRight}>
              <Box
                className={classes.nofiContent}
                component="div"
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                <strong>Tô Lê Hoài</strong> đã hoàn thành{" "}
                <strong>Cài Snort</strong>
              </Box>
              <Box
                className={classes.nofiTime}
                component="div"
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                45 phút trước
              </Box>
            </div>
          </div>
        </MenuItem>
      </Menu>
    </>
  );
}

export default Notification;
