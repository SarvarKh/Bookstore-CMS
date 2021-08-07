import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import '../circle-styling.css';

const Book = ({ book, handleRemove }) => {
  const percentage = Math.floor(Math.random() * 100);
  return (
    <div className="row flex">
      <div className="part-1">
        <div className="card-top">
          <div className="category">{book.category}</div>
          <div className="title">{book.title}</div>
          <div className="text-l-blue">
            Book ID:
            {book.id}
          </div>
        </div>
        <div className="card-bottom flex">
          <div className="text-l-blue">Comments</div>
          <button onClick={() => handleRemove(book)} type="submit" className="card-btn text-l-blue">Remove</button>
          <div className="text-l-blue">Edit</div>
        </div>
      </div>
      <div className="flex margin-left">
        <div className="circle">
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
        </div>
        <div>
          <div className="percent">
            {percentage}
            %
          </div>
          <div className="text-grey">Completed</div>
        </div>
      </div>
      <div className="margin-right">
        <div className="text-grey">CURRENT CHAPTER</div>
        <div>Chapter 17</div>
        <button className="update-btn" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

export default Book;
Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  handleRemove: PropTypes.func.isRequired,
};
