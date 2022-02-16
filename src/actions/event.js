export const selectEvent = (slEvent) => {
  return {
    type: "SELECT_EVENT",
    payload: slEvent,
  };
};

export const selectMonth = (slMonth) => {
  return {
    type: "SELECT_MONTH",
    payload: slMonth,
  };
};

export const selectYear = (slYear) => {
  return {
    type: "SELECT_YEAR",
    payload: slYear,
  };
};

export const changeHeight = (height) => {
  return {
    type: "CHANGE_HEIGHT",
    payload: height,
  };
};

export const changeMonth = (data) => {
  return {
    type: "CHANGE_MONTH",
    payload: data,
  };
};

export const changeView = (data) => {
  return {
    type: "CHANGE_VIEW",
    payload: data,
  };
};