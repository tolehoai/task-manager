import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateTimePicker from "@mui/lab/DateTimePicker";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import TimePicker from "@mui/lab/TimePicker";
import { FormControl, FormHelperText, MenuItem, Select } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import moment from "moment";
import "moment/locale/vi";
import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useDispatch, useSelector } from "react-redux";
import { selectEvent } from "../../actions/event";
import UserGroupImageSchedule from "../UserGroupImageSchedule/UserGroupImage";
import "./style.css";
import { useStyles } from "./style.js";
// import "react-big-calendar/lib/sass/styles";
// import "react-big-calendar/lib/addons/dragAndDrop/styles";

const localizer = momentLocalizer(moment);

Schedule.propTypes = {};

function Schedule(props) {
  const classes = useStyles();
  const [currentEvent, setCurrentEvent] = useState([]);
  const selectedEvent = useSelector((state) => state.event.selectEvent);
  const taskList = useSelector((state) => state.event.taskList);

  console.log("TASK LIST: ", taskList);
  useEffect(() => {
    setCurrentEvent(selectedEvent);
  }, [selectedEvent]);

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleSelectEvent = (event) => {
    const action = selectEvent(event);
    dispatch(action);

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="App">
        <Calendar
          localizer={localizer}
          events={taskList}
          startAccessor="start"
          endAccessor="end"
          components={{
            event: UserGroupImageSchedule,
          }}
          // style={{ height: 250 * taskList.length }}
          style={{ height: "600px" }}
          autoHeight={true}
          popup={true}
          onSelectEvent={(event) => {
            handleSelectEvent(event);
          }}
          eventPropGetter={(event, start, end, isSelected, slColor) => {
            let newStyle = {
              backgroundColor: event.color,
              color: "white",
              borderRadius: "0px",
              border: "none",
              padding: "5px",
              borderRadius: "15px",
              margin: "5px 0px",
            };

            if (event.isMine) {
              newStyle.backgroundColor = "lightgreen";
            }

            return {
              className: "",
              style: newStyle,
            };
          }}
          messages={{
            next: "Tiếp theo",
            previous: "Trước đó",
            today: "Hôm nay",
            month: "Tháng",
            week: "Tuần",
            day: "Ngày",
            agenda: "Quý",
          }}
        />
      </div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{currentEvent.title}</DialogTitle>
          <DialogContent>
            <FormControl sx={{ m: 1, minWidth: "100%" }}>
              <InputLabel htmlFor="component-simple">Tên công việc</InputLabel>
              <Input
                fullWidth
                label="fullWidth"
                id="component-simple"
                value={currentEvent.title}
              />
            </FormControl>
            <div className={classes.date}>
              <div>
                <FormControl sx={{ m: 1, minWidth: 240 }}>
                  <DateTimePicker
                    label="Thời gian bắt đầu"
                    value={currentEvent.start}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </FormControl>
              </div>
              <div>
                <FormControl sx={{ m: 1, minWidth: 240 }}>
                  <DateTimePicker
                    label="Thời gian kết thúc"
                    value={currentEvent.end}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </FormControl>
              </div>
            </div>

            <FormControl fullWidth>
              <InputLabel id="demo-multiple-name-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={currentEvent.status}
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

export default Schedule;
