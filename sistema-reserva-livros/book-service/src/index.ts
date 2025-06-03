import express from 'express';
import bookRoutes from './routes/book.routes';

const app = express();
app.use(express.json());
app.use(bookRoutes);

app.listen(3001, () => console.log('Book service running on port 3001'));