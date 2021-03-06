import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateTimePicker from "@mui/lab/DateTimePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { FormControl, MenuItem, Select } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import moment from "moment";
import "moment/locale/vi";
import React, { useEffect, useRef, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useDispatch, useSelector } from "react-redux";
import { changeHeight, changeView, selectEvent } from "../../actions/event";
import CustomToolbar from "../CustomToolbar/CustomToolbar";
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
  const [rowHeight, setRowHeight] = useState(350);
  const selectedEvent = useSelector((state) => state.event.selectEvent);
  const taskList = useSelector((state) => state.event.taskList);
  const selectMonth = useSelector((state) => state.event.selectMonth);
  const selectYear = useSelector((state) => state.event.selectYear);

  const [chieucao, setChieucao] = useState(600);

  const { height } = props;

  console.log("scheduler re render");

  const taskOfMonth = taskList.filter(
    (task) =>
      selectMonth >= task.start.getMonth() &&
      selectMonth <= task.end.getMonth() &&
      task.end.getFullYear() == selectYear
  );

  const numberInRow = useRef(1);
  if (taskOfMonth.length === 0) {
    numberInRow.current = 1;
  } else {
    numberInRow.current =
      taskOfMonth.length <= 2 ? 2 : Math.ceil(taskOfMonth.length / 2) + 1;
  }

  console.log("rowHeight: ", 350 * numberInRow.current);

  const handleSelectEvent = (event) => {
    const action = selectEvent(event);
    dispatch(action);

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setCurrentEvent(selectedEvent);
  }, [selectedEvent]);

  // useEffect(() => {
  //   const actionHeightOfRow = changeHeight(numberInRow.current * 350);
  //   dispatch(actionHeightOfRow);
  // }, [selectMonth]);

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const heightRedux = useSelector((state) => state.event.heightOfRow);
  const dropzoneStyle = {
    // width: `200px`,
    // height: `200px`,
    height: `${350 * numberInRow.current}px`,
  };

  const currentView = useSelector((state) => state.event.currentView);

  const [chieudai, setChieuDai] = useState(600);

  const handleChangeSize = () => {
    setChieuDai(5000);
  };
  if (currentView == "month") {
    const actionChangeView = changeView("month");
    dispatch(actionChangeView);
    setTimeout(() => {
      const actionChangeView1 = changeView("month");
      dispatch(actionChangeView1);
    }, 0);
  }
  return (
    <>
      <button onClick={handleChangeSize}>Change Size</button>
      <div className="Scheduler">
        <Calendar
          localizer={localizer}
          events={taskList}
          defaultView={currentView}
          view={currentView}
          startAccessor="start"
          endAccessor="end"
          style={{
            // height: 300 * numberInRow.current,
            height: 1200,
          }}
          // style={dropzoneStyle}
          // style={{
          //   height: heightRedux,
          // }}
          components={{
            event: UserGroupImageSchedule,
            toolbar: CustomToolbar,
          }}
          // className={classes.hoai}
          // style={{
          //   height: `${350 * numberInRow.current}px`,
          // }}

          autoHeight={true}
          popup={true}
          onSelectEvent={(event) => {
            handleSelectEvent(event);
          }}
          eventPropGetter={(event, start, end, isSelected, slColor) => {
            let newStyle = {
              backgroundColor: event.color,
              color: "white",
              border: "none",
              padding: "3px",
              borderRadius: "15px",
              margin: "5px 2px",
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
            next: "Ti???p theo",
            previous: "Tr?????c ????",
            today: "H??m nay",
            month: "Th??ng",
            week: "Tu???n",
            day: "Ng??y",
            agenda: "Qu??",
          }}
        />
      </div>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{currentEvent.title}</DialogTitle>
          <DialogContent>
            <FormControl sx={{ m: 1, minWidth: "100%" }}>
              <InputLabel htmlFor="component-simple">T??n c??ng vi???c</InputLabel>
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
                    label="Th???i gian b???t ?????u"
                    value={currentEvent.start}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </FormControl>
              </div>
              <div>
                <FormControl sx={{ m: 1, minWidth: 240 }}>
                  <DateTimePicker
                    label="Th???i gian k???t th??c"
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
                <MenuItem value={0}>Ch??a th???c hi???n</MenuItem>
                <MenuItem value={1}>??ang th???c hi???n</MenuItem>
                <MenuItem value={2}>???? th???c hi???n</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>H???y b???</Button>
            <Button onClick={handleClose}>Ch???nh s???a</Button>
          </DialogActions>
        </Dialog>
      </LocalizationProvider>
    </>
  );
}

export default Schedule;
