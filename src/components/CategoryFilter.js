import PropTypes from 'prop-types';

const CategoryFilter = ({ handleFilter, category }) => {
  const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <select onChange={() => handleFilter(category)} name="category">
      <option value="All">All</option>
      {bookCategories.map((bookCategory) => (
        <option key={bookCategory} value={bookCategory}>{bookCategory}</option>
      ))}
    </select>
  );
};

CategoryFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};

export default CategoryFilter;
