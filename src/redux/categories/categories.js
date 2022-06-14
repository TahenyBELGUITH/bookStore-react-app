const CHECK_STATUS = 'COMPLETED';
const initialState = [];

// actions' creator
export const checkStatus = () => ({
  type: CHECK_STATUS,
  payload: 'completed',
});

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export default categoriesReducer;
