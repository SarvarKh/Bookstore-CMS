import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions';

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

  handleSubmit = () => {
    this.createBook();
  }

  render() {
    const { title } = this.state;
    const { category } = this.state;
    return (
      <form>
        <input onChange={(e) => this.handleChange(e)} type="text" placeholder="Book title" name="title" value={title} />

        <select onChange={(e) => this.handleChange(e)} name="category">
          <option value="default">--Please choose a category--</option>
          {bookCategories.map((bookCategory) => (
            <option key={bookCategory} value={category}>{bookCategory}</option>
          ))}
        </select>

        <input type="submit" value="Submit" onClick={this.handleSubmit} />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createBook: () => {
    dispatch(createBook());
  },
});

export default connect(null, mapDispatchToProps)(BooksForm);
BooksForm.protoTypes = {
  title: PropTypes.instanceOf(String).isRequired,
  category: PropTypes.instanceOf(String).isRequired,
};
