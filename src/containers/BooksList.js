import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = () => (
  <table>
    <tr>
      <th>Book ID</th>
      <th>Title</th>
      <th>Category</th>
    </tr>
    <Book />
  </table>
);

function mapStateToProps(state) {
  const books = state;
  return books;
}

export { BooksList };
export default connect(mapStateToProps)(BooksList);
