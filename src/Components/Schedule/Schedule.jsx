import React from "react";
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

const localizer = momentLocalizer(moment);

const myEventsList = [
  {
    start: new Date(),
    end: new Date(),
    title: "Test",
    color: "#c0ca33",
  },
  {
    start: new Date(2022, 0, 7),
    end: new Date(2022, 0, 15),
    title: "Kỹ thuật phát hiện tấn công mạng",
    color: "#ff6d00",
  },
  {
    start: new Date(2022, 0, 10),
    end: new Date(2022, 0, 20),
    title: "An ninh mạng",
    color: "#00c853",
  },
  {
    start: new Date(2022, 0, 10),
    end: new Date(2022, 0, 15),
    title: "An toàn hệ thống",
    color: "#ff6d00",
  },
  {
    start: new Date(2022, 0, 10),
    end: new Date(2022, 0, 25),
    title: "Niên luận ngành",
    color: "#00c853",
  },
];

const height = 280 * myEventsList.length;

Schedule.propTypes = {};

function Schedule(props) {
  return (
    <>
      <div className="App">
        <Calendar
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          style={{ height: height }}
          eventPropGetter={(event, start, end, isSelected, slColor) => {
            console.log(event);

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
            next: "Ngày kế tiếp",
            previous: "Ngày trước",
            today: "Hôm nay",
            month: "Tháng",
            week: "Tuần",
            day: "Ngày",
            agenda: "Quý",
          }}
        />
      </div>
    </>
  );
}

export default Schedule;
