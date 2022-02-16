import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeMonth,
  changeView,
  selectMonth,
  selectYear,
} from "../../actions/event";

function CustomToolbar(props) {
  console.log("custom toolbar re-render");
  //Lấy ra tháng hiện tại
  //Tìm ngày có nhiều hoạt động nhất trong tháng hiện tại đó
  //Set số lượng max lên state
  //Ở Component Scheduler, lấy state max đó về rồi setHeight

  //////////////////////////////////////////////////////////
  const selectMonthRedux = useSelector((state) => state.event.selectMonth);
  const selectYearRedux = useSelector((state) => state.event.selectYear);
  const taskList = useSelector((state) => state.event.taskList);
  const currentView = useSelector((state) => state.event.currentView);
  console.log(taskList);
  const taskOfMonth = taskList.filter(
    (task) =>
      selectMonthRedux >= task.start.getMonth() &&
      selectMonthRedux <= task.end.getMonth() &&
      task.end.getFullYear() == selectYearRedux
  );

  const numberInRow = useRef(1);
  if (taskOfMonth.length === 0) {
    numberInRow.current = 1;
  } else {
    numberInRow.current =
      taskOfMonth.length <= 2 ? 2 : Math.ceil(taskOfMonth.length / 2) + 1;
  }
  console.log(taskOfMonth);
  /////////////////////////////////////////////////////////

  const selectedMonth = useSelector((state) => state.event.selectMonth);

  let {
    localizer: { messages },
    label,
    onNavigate,
    onView,
    date,
  } = props;

  const dispatch = useDispatch();
  useEffect(() => {
    const month = date.getMonth();
    const year = date.getFullYear();
    const data = {
      slMonth: month,
      slYear: year,
      number: numberInRow.current,
    };
    const actionChangeMonth = changeMonth(data);
    dispatch(actionChangeMonth);
    // const actionMonth = selectMonth(month);
    // const actionYear = selectYear(year);
    // dispatch(actionMonth);
    // dispatch(actionYear);
  }, [date]);
  const goToBack = () => {
    onNavigate("PREV");
    if (currentView == "month") {
      const actionChangeView = changeView("week");
      dispatch(actionChangeView);
      setTimeout(() => {
        const actionChangeView1 = changeView("month");
        dispatch(actionChangeView1);
      }, 0);
    }
  };

  const goToNext = () => {
    onNavigate("NEXT");
    if (currentView == "month") {
      const actionChangeView = changeView("week");
      dispatch(actionChangeView);
      setTimeout(() => {
        const actionChangeView1 = changeView("month");
        dispatch(actionChangeView1);
      }, 0);
    }
  };

  const goToCurrent = () => {
    onNavigate("TODAY");
    if (currentView == "month") {
      const actionChangeView = changeView("week");
      dispatch(actionChangeView);
      setTimeout(() => {
        const actionChangeView1 = changeView("month");
        dispatch(actionChangeView1);
      }, 0);
    }
  };

  const viewMonth = () => {
    // onView("month");
    const actionChangeView = changeView("month");
    dispatch(actionChangeView);
  };

  const viewWeek = () => {
    // onView("week");
    const actionChangeView = changeView("week");
    dispatch(actionChangeView);
  };

  const viewDay = () => {
    // onView("day");
    const actionChangeView = changeView("day");
    dispatch(actionChangeView);
  };

  const viewAgenda = () => {
    // onView("agenda");
    const actionChangeView = changeView("agenda");
    dispatch(actionChangeView);
  };

  return (
    <div className="rbc-toolbar">
      <span className="rbc-btn-group">
        <button type="button" onClick={goToBack}>
          Ngày trước
        </button>
      </span>

      <span className="rbc-btn-group">
        <button type="button" onClick={goToCurrent}>
          Hôm nay
        </button>
      </span>

      <span className="rbc-btn-group">
        <button type="button" onClick={goToNext}>
          Ngày sau
        </button>
      </span>

      <span className="rbc-toolbar-label">{label}</span>

      <span className="rbc-btn-group">
        <button type="button" onClick={viewMonth}>
          Tháng
        </button>
      </span>

      <span className="rbc-btn-group">
        <button type="button" onClick={viewWeek}>
          Tuần
        </button>
      </span>

      <span className="rbc-btn-group">
        <button type="button" onClick={viewDay}>
          Ngày
        </button>
      </span>

      <span className="rbc-btn-group">
        <button type="button" onClick={viewAgenda}>
          Quý
        </button>
      </span>
    </div>
  );
}

export default CustomToolbar;
