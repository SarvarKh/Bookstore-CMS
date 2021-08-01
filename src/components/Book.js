import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <tr>
    <td>{book.id}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
  </tr>
);

export default Book;
Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};
