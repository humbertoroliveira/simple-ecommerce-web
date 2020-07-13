export const setProfile = (profile) => async (dispatch, getState) => {
  dispatch({
    type: "SET_PROFILE",
    payload: profile,
  });
};
