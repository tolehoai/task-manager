export const selectEvent = (slEvent) => {
  return {
    type: "SELECT_EVENT",
    payload: slEvent,
  };
};
