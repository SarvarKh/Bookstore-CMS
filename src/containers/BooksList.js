import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = ({ books }) => (
  <table>
    <tr>
      <th>Book ID</th>
      <th>Title</th>
      <th>Category</th>
    </tr>
    {books.map((book) => (
      <Book key={book.id} book={book} />
    ))}
  </table>
);

function mapStateToProps(state) {
  return { books: state.books };
}

export default connect(mapStateToProps)(BooksList);
BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};
