const initialState = false;

export const ChangeCustomerLoginStatus = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return !state;
    case "LOGOUT":
      return !state;
    default:
      return state;
  }
};