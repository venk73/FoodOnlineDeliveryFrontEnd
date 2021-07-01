const initialState = false;

export const changeRestaurantLoginStatus = (state = initialState, Action) => {
  switch (Action.type) {
    case "LOGIN":
      return !state;
    case "LOGOUT":
      return !state;
    default:
      return state;
  }
};