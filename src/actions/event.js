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