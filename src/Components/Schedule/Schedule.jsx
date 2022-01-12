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

const myEventsList = [
  {
    id: 1,
    start: new Date(),
    end: new Date(),
    title: "Test",
    color: "#63b4ff",
    userList: [
      {
        id: 1,
        name: "Tô Lê Hoài",
        avatarUrl:
          "https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.6435-9/119895915_1555866031245140_8317793854278817008_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_ohc=XtOqaHkCyXYAX9kiaVc&tn=zMnoluBELVnk8512&_nc_ht=scontent.fsgn5-9.fna&oh=00_AT8z7AI6Gw-44UgiOJvgDNUvG1E2nkQQeR9G2pSEM3SjVw&oe=62061B54",
      },
    ],
  },
  {
    id: 2,
    start: new Date(2022, 0, 7),
    end: new Date(2022, 0, 16),
    title: "Kỹ thuật phát hiện tấn công mạng",
    color: "#ff6363",
    userList: [
      {
        id: 1,
        name: "Tô Lê Hoài",
        avatarUrl:
          "https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.6435-9/119895915_1555866031245140_8317793854278817008_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_ohc=XtOqaHkCyXYAX9kiaVc&tn=zMnoluBELVnk8512&_nc_ht=scontent.fsgn5-9.fna&oh=00_AT8z7AI6Gw-44UgiOJvgDNUvG1E2nkQQeR9G2pSEM3SjVw&oe=62061B54",
      },
      {
        id: 2,
        name: "Võ Phước Toàn",
        avatarUrl:
          "https://scontent.fsgn5-11.fna.fbcdn.net/v/t1.6435-9/69923957_1235443576620722_1229261365722480640_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=2X7SUw-rdrQAX9Ia8Pl&_nc_ht=scontent.fsgn5-11.fna&oh=00_AT_BvfT-Qe734RbOQ7Yhkm3xDEjzdbMzbjRbEa7kE79bbg&oe=620692B3",
      },
      {
        id: 3,
        name: "Trần Trọng Nghĩa",
        avatarUrl:
          "https://www.harleytherapy.co.uk/counselling/wp-content/uploads/16297800391_5c6e812832.jpg",
      },
      {
        id: 4,
        name: "Nguyễn Văn A",
        avatarUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZWSAvhHmRxaGnNTEUNv8pHaJ261jjQMHg3ct3zSY3UMtVeWENM2X4L2BXWIx4nNkVY6g&usqp=CAU",
      },
    ],
  },
  {
    id: 3,
    start: new Date(2022, 0, 10),
    end: new Date(2022, 0, 21),
    title: "An ninh mạng",
    color: "#1cce66",
    userList: [
      {
        id: 1,
        name: "Tô Lê Hoài",
        avatarUrl:
          "https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.6435-9/119895915_1555866031245140_8317793854278817008_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_ohc=XtOqaHkCyXYAX9kiaVc&tn=zMnoluBELVnk8512&_nc_ht=scontent.fsgn5-9.fna&oh=00_AT8z7AI6Gw-44UgiOJvgDNUvG1E2nkQQeR9G2pSEM3SjVw&oe=62061B54",
      },
      {
        id: 2,
        name: "Võ Phước Toàn",
        avatarUrl:
          "https://scontent.fsgn5-11.fna.fbcdn.net/v/t1.6435-9/69923957_1235443576620722_1229261365722480640_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=2X7SUw-rdrQAX9Ia8Pl&_nc_ht=scontent.fsgn5-11.fna&oh=00_AT_BvfT-Qe734RbOQ7Yhkm3xDEjzdbMzbjRbEa7kE79bbg&oe=620692B3",
      },
    ],
  },
  {
    id: 4,
    start: new Date(2022, 0, 10),
    end: new Date(2022, 1, 11),
    title: "An toàn hệ thống",
    color: "#ffcb12",
    userList: [
      {
        id: 1,
        name: "Tô Lê Hoài",
        avatarUrl:
          "https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.6435-9/119895915_1555866031245140_8317793854278817008_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_ohc=XtOqaHkCyXYAX9kiaVc&tn=zMnoluBELVnk8512&_nc_ht=scontent.fsgn5-9.fna&oh=00_AT8z7AI6Gw-44UgiOJvgDNUvG1E2nkQQeR9G2pSEM3SjVw&oe=62061B54",
      },
      {
        id: 2,
        name: "Võ Phước Toàn",
        avatarUrl:
          "https://scontent.fsgn5-11.fna.fbcdn.net/v/t1.6435-9/69923957_1235443576620722_1229261365722480640_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=2X7SUw-rdrQAX9Ia8Pl&_nc_ht=scontent.fsgn5-11.fna&oh=00_AT_BvfT-Qe734RbOQ7Yhkm3xDEjzdbMzbjRbEa7kE79bbg&oe=620692B3",
      },
      {
        id: 3,
        name: "Trần Trọng Nghĩa",
        avatarUrl:
          "https://www.harleytherapy.co.uk/counselling/wp-content/uploads/16297800391_5c6e812832.jpg",
      },
    ],
  },
  {
    id: 5,
    start: new Date(2022, 0, 10),
    end: new Date(2022, 0, 25),
    title: "Niên luận ngành",
    color: "#9e63ff",
    userList: [
      {
        id: 1,
        name: "Tô Lê Hoài",
        avatarUrl:
          "https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.6435-9/119895915_1555866031245140_8317793854278817008_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_ohc=XtOqaHkCyXYAX9kiaVc&tn=zMnoluBELVnk8512&_nc_ht=scontent.fsgn5-9.fna&oh=00_AT8z7AI6Gw-44UgiOJvgDNUvG1E2nkQQeR9G2pSEM3SjVw&oe=62061B54",
      },
      {
        id: 2,
        name: "Võ Phước Toàn",
        avatarUrl:
          "https://scontent.fsgn5-11.fna.fbcdn.net/v/t1.6435-9/69923957_1235443576620722_1229261365722480640_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=2X7SUw-rdrQAX9Ia8Pl&_nc_ht=scontent.fsgn5-11.fna&oh=00_AT_BvfT-Qe734RbOQ7Yhkm3xDEjzdbMzbjRbEa7kE79bbg&oe=620692B3",
      },
      {
        id: 3,
        name: "Trần Trọng Nghĩa",
        avatarUrl:
          "https://www.harleytherapy.co.uk/counselling/wp-content/uploads/16297800391_5c6e812832.jpg",
      },
    ],
  },
];

const height = 280 * myEventsList.length;

Schedule.propTypes = {};

function Schedule(props) {
  const [currentEvent, setCurrentEvent] = useState([]);
  const selectedEvent = useSelector((state) => state.event.selectEvent);
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
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          components={{
            event: UserGroupImage,
          }}
          style={{ height: myEventsList.length * 350 }}
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
