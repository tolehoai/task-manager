// @ts-nocheck
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateTimePicker from "@mui/lab/DateTimePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
  Avatar,
  AvatarGroup,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Input,
  InputLabel,
  Select,
  TextField,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { alpha, styled } from "@mui/material/styles";
import moment from "moment";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectEvent } from "../../actions/event";
import Schedule from "../Schedule/Schedule";
import UserGroupImage from "../UserGroupImage/UserGroupImage";

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
  const dispatch = useDispatch();
  const selectedEvent = useSelector((state) => state.event.selectEvent);
  const { title, level, end, color, status, id } = props.task;
  console.log(id);

  let statusText = "";
  if (status === 0) statusText = "Chưa thực hiện";
  else if (status === 1) statusText = "Đang thực hiện";
  else statusText = "Đã thực hiện";
  let deadline =
    ("0" + end.getDate()).slice(-2) +
    "/" +
    ("0" + (end.getMonth() + 1)).slice(-2) +
    "/" +
    end.getFullYear();

  console.log(deadline);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [editFormOpen, setEditFormOpen] = useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setEditFormOpen(false);
  };
  const handleEditClick = (task) => {
    console.log("dispatch select task with value: ", task);
    const action = selectEvent(task);
    dispatch(action);
    setAnchorEl(null);
    setEditFormOpen(true);
  };

  const handleEditFormClose = () => {
    setEditFormOpen(false);
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
          <UserGroupImage event={props.task} />
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
          <MenuItem onClick={() => handleEditClick(props.task)} disableRipple>
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

      {/* Modal */}

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Dialog open={editFormOpen} onClose={handleEditFormClose}>
          <DialogTitle>{selectedEvent.title}</DialogTitle>
          <DialogContent>
            <FormControl sx={{ m: 1, minWidth: "100%" }}>
              <InputLabel htmlFor="component-simple">Tên công việc</InputLabel>
              <Input
                fullWidth
                label="fullWidth"
                id="component-simple"
                value={selectedEvent.title}
              />
            </FormControl>
            <div className={classes.date}>
              <div>
                <FormControl sx={{ m: 1, minWidth: 240 }}>
                  <DateTimePicker
                    label="Thời gian bắt đầu"
                    value={selectedEvent.start}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </FormControl>
              </div>
              <div>
                <FormControl sx={{ m: 1, minWidth: 240 }}>
                  <DateTimePicker
                    label="Thời gian kết thúc"
                    value={selectedEvent.end}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </FormControl>
              </div>
            </div>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedEvent.status}
                label="Age"
              >
                <MenuItem value={0}>Chưa thực hiện</MenuItem>
                <MenuItem value={1}>Đang thực hiện</MenuItem>
                <MenuItem value={2}>Đã thực hiện</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Hủy bỏ</Button>
            <Button onClick={handleClose}>Chỉnh sửa</Button>
          </DialogActions>
        </Dialog>
      </LocalizationProvider>
    </>
  );
}

export default Task;
