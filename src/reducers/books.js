import { CREATE_BOOK, REMOVE_BOOK, createBook, removeBook } from "../actions";

const bookReducer = (state, action) => {
    switch (action.type) {
        case CREATE_BOOK:
            return [...state, {
                id: action.book.id,
                title: action.book.title,
                category: action.book.category
            }]
        case REMOVE_BOOK:
            return {
                // Remove book logic to be added
                id: action.book.id,
                title: action.book.title,
                category: action.book.category
            }
    
        default:
            state;
    }
}

export default bookReducer;