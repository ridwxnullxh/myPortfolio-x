export const initialState = {
  isOpen: false,
  isAnimating: false,
};

export const navReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_MENU":
      return {
        ...state,
        isOpen: !state.isOpen,
        isAnimating: true,
      };
    case "FINISH_ANIMATION":
      return {
        ...state,
        isAnimating: false,
      };
    case "CLOSE_MENU":
      return {
        ...state,
        isOpen: false,
        isAnimating: true,
      };
    default:
      return state;
  }
};
