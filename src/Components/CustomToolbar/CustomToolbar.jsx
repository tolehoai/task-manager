import React from "react";

function CustomToolbar(props) {
  let {
    localizer: { messages },
    label,
    onNavigate,
    onView,
  } = props;
  console.log("props: ", props);

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
        <button type="button" onClick={goToBack}>
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
