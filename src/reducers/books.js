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
      return [...state, {
        id: action.book.id,
        title: action.book.title,
        category: action.book.category,
      }];
    case REMOVE_BOOK:
      return {
        // Remove book logic to be added
        id: action.book.id,
        title: action.book.title,
        category: action.book.category,
      };

    default:
      return state;
  }
};

export default bookReducer;
