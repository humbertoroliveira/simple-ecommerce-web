export const setProfile = (profile) => (dispatch) => {
  //TODO: implement identify + event for when customer updates their profile
  dispatch({
    type: "SET_PROFILE",
    payload: profile,
  });
};
