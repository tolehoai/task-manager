import React, { useState } from "react";
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

const localizer = momentLocalizer(moment);

const myEventsList = [
  {
    id: 1,
    start: new Date(),
    end: new Date(),
    title: "Test",
    color: "#c0ca33",
  },
  {
    id: 2,
    start: new Date(2022, 0, 7),
    end: new Date(2022, 0, 15),
    title: "Kỹ thuật phát hiện tấn công mạng",
    color: "#ff6d00",
  },
  {
    id: 3,
    start: new Date(2022, 0, 10),
    end: new Date(2022, 0, 20),
    title: "An ninh mạng",
    color: "#00c853",
  },
  {
    id: 4,
    start: new Date(2022, 0, 10),
    end: new Date(2022, 0, 15),
    title: "An toàn hệ thống",
    color: "#ff6d00",
  },
  {
    id: 5,
    start: new Date(2022, 0, 10),
    end: new Date(2022, 0, 25),
    title: "Niên luận ngành",
    color: "#00c853",
  },
];

const height = 280 * myEventsList.length;

Schedule.propTypes = {};

function Schedule(props) {
  const [open, setOpen] = useState(false);
  const handleSelectEvent = (event) => {
    console.log(event);
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
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          style={{ height: height }}
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
        <DialogTitle>Subscribe</DialogTitle>
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
