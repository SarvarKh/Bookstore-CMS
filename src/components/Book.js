import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemove }) => (
  <tr>
    <td>{book.id}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
    <button onClick={() => handleRemove(book)} type="submit">Remove</button>
  </tr>
);

export default Book;
Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  handleRemove: PropTypes.func.isRequired,
};
