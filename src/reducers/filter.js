import { CHANGE_FILTER } from '../actions';

const filterReducer = (state = 'All', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return { category: action.category };

    default:
      return state;
  }
};

export default filterReducer;
