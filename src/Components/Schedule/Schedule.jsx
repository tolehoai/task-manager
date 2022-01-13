import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Calendar,
  dateFnsLocalizer,
  momentLocalizer,
} from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "moment/locale/vi";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { selectEvent } from "../../actions/event";
import UserGroupImage from "../UserGroupImage/UserGroupImage";
import "./style.css";

const localizer = momentLocalizer(moment);

Schedule.propTypes = {};

function Schedule(props) {
  const [currentEvent, setCurrentEvent] = useState([]);
  const selectedEvent = useSelector((state) => state.event.selectEvent);
  const taskList = useSelector((state) => state.event.taskList);
  const height = 280 * taskList.length;
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
            event: UserGroupImage,
          }}
          style={{ height: taskList.length * 350 }}
          step={55} // duration of the slot
          timeslots={10} // number of slots within an hour
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
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{currentEvent.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Schedule;
