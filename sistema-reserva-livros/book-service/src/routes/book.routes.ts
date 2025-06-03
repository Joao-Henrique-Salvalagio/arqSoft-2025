import { Router, Request, Response } from 'express';
import { books, Book, Status } from '../models/book.model';

const router = Router();
let idCounter = 1;

router.post('/books', (req: Request, res: Response) => {
  const { titulo, autor } = req.body;
  const newBook: Book = { id: idCounter++, titulo, autor, status: 'disponível' };
  books.push(newBook);
  res.status(201).json(newBook);
});

router.get('/books', (_req: Request, res: Response) => {
  res.json(books);
});

router.get('/books/:id', (req: Request<{ id: string }>, res: Response) => {
  const book = books.find(b => b.id === +req.params.id);
  book ? res.json(book) : res.status(404).send('Livro não encontrado');
});

router.put('/books/:id', (req: Request<{ id: string }>, res: Response) => {
  const book = books.find(b => b.id === +req.params.id);
  if (!book) return res.status(404).send('Livro não encontrado');
  Object.assign(book, req.body);
  res.json(book);
});

router.patch('/books/:id/status', (req: Request<{ id: string }, {}, { status: Status }>, res: Response) => {
  const book = books.find(b => b.id === +req.params.id);
  if (!book) return res.status(404).send('Livro não encontrado');
  const { status } = req.body;
  if (!['disponível', 'reservado'].includes(status)) {
    return res.status(400).send('Status inválido');
  }
  book.status = status;
  res.json(book);
});

export default router;