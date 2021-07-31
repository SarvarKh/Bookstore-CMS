import React from 'react';

const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

function BooksForm() {
  return (
    <form>
      <input type="text" placeholder="Book title" />

      <select name="category">
        <option value="default">--Please choose a category--</option>
        {bookCategories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>

      <input type="submit" value="Submit" />
    </form>
  );
}

export default BooksForm;
