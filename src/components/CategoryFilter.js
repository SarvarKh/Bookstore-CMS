import PropTypes from 'prop-types';

const CategoryFilter = ({ handleFilter }) => {
  const bookCategories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <div className="flex navbar">
      <div className="flex left">
        <h2 className="logo">Bookstore CMS</h2>
        <span className="navbar-text">BOOKS</span>
        <select onChange={(e) => handleFilter(e.target.value)} name="category" className="navbar-text">
          {bookCategories.map((bookCategory) => (
            <option key={bookCategory} value={bookCategory}>{bookCategory}</option>
          ))}
        </select>
      </div>
      <div className="right">
        <div className="circle-icon">
          <i className="fas fa-user" />
        </div>
      </div>
    </div>
  );
};

CategoryFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
