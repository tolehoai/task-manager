// @ts-nocheck
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar, AvatarGroup } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { alpha, styled } from "@mui/material/styles";
import moment from "moment";
import React from "react";
import "./style.css";
import { useStyles } from "./style.js";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

function Task(props) {
  const classes = useStyles();
  const { title, level, end, color, status } = props.task;

  let statusText = "";
  if (status == 0) statusText = "Chưa thực hiện";
  if (status == 1) statusText = "Đang thực hiện";
  if (status == 2) statusText = "Đã thực hiện";
  let deadline =
    ("0" + end.getDate()).slice(-2) +
    "/" +
    ("0" + (end.getMonth() + 1)).slice(-2) +
    "/" +
    end.getFullYear();

  console.log(deadline);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Card
        sx={{ maxWidth: 345, minHeight: "100%" }}
        className={`${classes.taskWrapper} `}
        style={{ borderTop: `5px solid ${color}` }}
      >
        <div>
          <CardHeader
            action={
              <IconButton
                aria-label="settings"
                id="demo-customized-button"
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
              >
                <MoreVertIcon />
              </IconButton>
            }
            title={title}
          />
        </div>

        <div className={classes.cardBottom}>
          <div className={classes.statusAndDate}>
            <span>
              <div className={`${classes.status} ${level}`}> {statusText}</div>
            </span>
            <div className={`${classes.deadline} ${level}`}>
              <AccessTimeIcon fontSize="small" /> {deadline}
            </div>
          </div>

          <AvatarGroup max={4} className={classes.avatarGroup}>
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
              sx={{ width: 32, height: 32 }}
            />
            <Avatar
              alt="Travis Howard"
              src="https://mui.com//static/images/avatar/2.jpg"
              sx={{ width: 32, height: 32 }}
            />
            <Avatar
              alt="Cindy Baker"
              src="https://mui.com//static/images/avatar/3.jpg"
              sx={{ width: 32, height: 32 }}
            />
            <Avatar
              alt="Agnes Walker"
              src="/static/images/avatar/4.jpg"
              sx={{ width: 32, height: 32 }}
            />
          </AvatarGroup>
        </div>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} disableRipple>
            <EditIcon />
            Trĩnh xữa
          </MenuItem>

          <Divider sx={{ my: 0.5 }} />
          <MenuItem onClick={handleClose} disableRipple>
            <DeleteForeverIcon />
            Só
          </MenuItem>
        </StyledMenu>
      </Card>
    </>
  );
}

export default Task;
