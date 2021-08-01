import {
  CREATE_BOOK, REMOVE_BOOK,
} from '../actions';

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.index !== action.book)];

    default:
      return state;
  }
};

export default bookReducer;
