const initialState = {
  list: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case "REMOVE_TODO":
      return {
        ...state,
        list: state.list.filter((_, i) => i !== action.payload),
      };
    default:
      return state;
  }
};

export default todoReducer;
