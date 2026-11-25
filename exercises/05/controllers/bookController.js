import db from '../db.js';

export async function getBooks(request, response) {
  const books = await db.getBooks();
  response.json(books);
}

export async function getBookById(request, response) {
  const id = request.params.id;
  const book = await db.getBookById(id);

  if (!book) {
    return response.status(404).json({ error: 'book not found' });
  }

  response.json(book);
}

export async function createBook(request, response) {
  const body = request.body || {};

  if (!body.title || !body.author) {
    return response.status(400).json({ error: 'title and author are required' });
  }

  const book = await db.createBook(body.title, body.author);
  response.status(201).json(book);
}

export async function deleteBook(request, response) {
  const id = request.params.id;
  const book = await db.getBookById(id);

  if (!book) {
    return response.status(404).json({ error: 'book not found' });
  }

  await db.deleteBook(id);
  response.status(204).end();
}