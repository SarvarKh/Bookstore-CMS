import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({ books, removeBook }) => {
  const handleRemoveBook = (book) => {
    removeBook(book);
  };

  return (
    <>
      <CategoryFilter />
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {books.map((abook) => (
            <Book handleRemove={handleRemoveBook} book={abook} key={abook.id} />
          ))}
        </tbody>
      </table>
    </>
  );
};

function mapStateToProps(state) {
  return ({
    books: state.books,
  });
}

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => dispatch(removeBook(book)),
});

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
