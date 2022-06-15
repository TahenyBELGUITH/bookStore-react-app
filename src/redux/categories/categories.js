const initialState = [];

// actions' creator
export const checkStatus = () => ({
  type: 'Categories/checkStatus',
});

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Categories/checkStatus':
      return 'Under construction';
    default:
      return state;
  }
};

export default categoriesReducer;
