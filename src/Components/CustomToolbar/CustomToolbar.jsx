import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMonth, selectYear } from "../../actions/event";

function CustomToolbar(props) {
  //Lấy ra tháng hiện tại
  //Tìm ngày có nhiều hoạt động nhất trong tháng hiện tại đó
  //Set số lượng max lên state
  //Ở Component Scheduler, lấy state max đó về rồi setHeight
  const selectedMonth = useSelector((state) => state.event.selectMonth);
  console.log("SELECT MONTH: ", selectedMonth);
  let {
    localizer: { messages },
    label,
    onNavigate,
    onView,
    date,
  } = props;
  const month = date.getMonth();
  const year = date.getFullYear();
  console.log("props: ", props);
  console.log("month: ", month);
  const dispatch = useDispatch();
  useEffect(() => {
    const actionMonth = selectMonth(month);
    const actionYear = selectYear(year);
    dispatch(actionMonth);
    dispatch(actionYear);
  }, [date]);
  const goToBack = () => {
    onNavigate("PREV");
  };

  const goToNext = () => {
    onNavigate("NEXT");
  };

  const goToCurrent = () => {
    onNavigate("TODAY");
  };

  const viewMonth = () => {
    onView("month");
  };

  const viewWeek = () => {
    onView("week");
  };

  const viewDay = () => {
    onView("day");
  };

  const viewAgenda = () => {
    onView("agenda");
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
