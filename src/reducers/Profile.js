const initialState = {
  email: "",
  age: "30s",
  gender: "m",
  country: "Brazil",
  isRegistered: false,
  userId: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROFILE":
      state = action.payload;
      return state;
    default:
      return state;
  }
};
