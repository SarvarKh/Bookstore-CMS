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
      <th>Option</th>
    </tr>
    {books.map((book) => (
      <tr key={book.id}>
        <Book book={book} />
        <button type="button">Remove Book</button>
      </tr>
    ))}
  </table>
);

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(BooksList);
BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};
