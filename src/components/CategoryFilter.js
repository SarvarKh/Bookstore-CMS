const CategoryFilter = () => {
  const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <select name="category">
      {bookCategories.map((bookCategory) => (
        <option key={bookCategory} value={bookCategory}>{bookCategory}</option>
      ))}
    </select>
  );
};

export default CategoryFilter;
