import PropTypes from 'prop-types';

const CategoryFilter = ({ handleFilter }) => {
  const bookCategories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <select onChange={(e) => handleFilter(e.target.value)} name="category">
      {bookCategories.map((bookCategory) => (
        <option key={bookCategory} value={bookCategory}>{bookCategory}</option>
      ))}
    </select>
  );
};

CategoryFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
