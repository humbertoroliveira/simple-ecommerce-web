const initialState = { invertedDiscount: 1, code: "" };

export default (state = initialState, action) => {
  switch (action.type) {
    case "APPLY_COUPON_CODE":
      state = action.payload;
      return state;
    default:
      return state;
  }
};
