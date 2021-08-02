import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <>
    <td>{book.id}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
  </>
);

export default Book;
Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};
