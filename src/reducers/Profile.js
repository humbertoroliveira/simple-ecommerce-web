const initialState = { email: "email...", age: "30s" };

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROFILE":
      state = action.payload;
      return state;
    default:
      return state;
  }
};
