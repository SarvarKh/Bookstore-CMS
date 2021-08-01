import {
  CREATE_BOOK, REMOVE_BOOK,
} from '../actions';

const initialState = [
  {
    id: 1,
    title: 'Book title one',
    category: 'Learning',
  },
  {
    id: 2,
    title: 'Book title two',
    category: 'Biography',
  },
  {
    id: 3,
    title: 'Book title three',
    category: 'Learning',
  },
];

const bookReducer = (state = initialState, action) => {
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
