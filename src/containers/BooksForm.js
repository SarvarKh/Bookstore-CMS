import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';

const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.target.name === 'title') {
      this.setState({ title: event.target.value });
    } else {
      this.setState({ category: event.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { category, title } = this.state;
    const id = Math.floor(Math.random() * 1000000);
    const { addBook } = this.props;
    addBook({ id, category, title });
    this.setState({
      title: '',
      category: '',
    });
  }

  render() {
    const { title } = this.state;
    return (
      <footer>
        <form>
          <div>ADD NEW BOOK</div>
          <div className="form-container flex">
            <input onChange={(e) => this.handleChange(e)} type="text" placeholder="Book title" name="title" value={title} className="flex-item-1 item" />

            <select onChange={(e) => this.handleChange(e)} name="category" className="flex-item-2 item">
              <option value="default">--Please choose a category--</option>
              {bookCategories.map((bookCategory) => (
                <option key={bookCategory} value={bookCategory}>{bookCategory}</option>
              ))}
            </select>

            <input type="submit" value="Submit" onClick={this.handleSubmit} className="flex-item-3 item update-btn" />
          </div>
        </form>
      </footer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addBook: (book) => {
    dispatch(createBook(book));
  },
});

BooksForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
