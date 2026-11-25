let books = [
  {
    id: '1',
    title: 'Clean Code',
    author: 'Robert C. Martin',
  },
  {
    id: '2',
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
  },
  {
    id: '3',
    title: 'Refactoring',
    author: 'Martin Fowler',
  },
];

function generateId() {
  const maxId = books.length > 0
    ? Math.max(...books.map((b) => Number(b.id)))
    : 0;
  return String(maxId + 1);
}

async function getBooks() {
  return books;
}

async function getBookById(id) {
  return books.find((book) => book.id === id);
}

async function createBook(title, author) {
  const newBook = {
    id: generateId(),
    title,
    author,
  };
  books = books.concat(newBook);
  return newBook;
}

async function deleteBook(id) {
  books = books.filter((book) => book.id !== id);
}

export default {
  getBooks,
  getBookById,
  createBook,
  deleteBook,
};