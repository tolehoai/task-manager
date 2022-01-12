const initialState = {
  list: [],
  selectEvent: [],
};

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_EVENT": {
      console.log("dispatch");

      return { ...state, selectEvent: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default eventReducer;
