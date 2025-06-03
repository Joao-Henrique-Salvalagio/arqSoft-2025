import { Router, Request, Response } from 'express';
import axios from 'axios';
import { reservations, Reservation } from '../models/reservation.model';

const router = Router();
let reservationId = 1;

router.post('/reservations', async (req: Request, res: Response) => {
  const { userId, bookId } = req.body;

  try {
    const response = await axios.get(`http://localhost:3001/books/${bookId}`);
    const book = response.data;

    if (book.status !== 'disponível') {
      return res.status(400).send('Livro não disponível');
    }

    const newReservation: Reservation = {
      id: reservationId++,
      userId,
      bookId,
      dataReserva: new Date().toISOString().split('T')[0],
      status: 'ativa'
    };

    reservations.push(newReservation);

    await axios.patch(`http://localhost:3001/books/${bookId}/status`, { status: 'reservado' });

    res.status(201).json(newReservation);
  } catch (error) {
    res.status(400).send('Erro ao processar reserva ou livro não encontrado');
  }
});

router.get('/reservations/user/:userId', (req: Request<{ userId: string }>, res: Response) => {
  const userId = +req.params.userId;
  const userReservations = reservations.filter(r => r.userId === userId);
  res.json(userReservations);
});

router.delete('/reservations/:id', async (req: Request<{ id: string }>, res: Response) => {
  const id = +req.params.id;
  const reserva = reservations.find(r => r.id === id);
  if (!reserva) return res.status(404).send('Reserva não encontrada');

  reserva.status = 'cancelada';
  await axios.patch(`http://localhost:3001/books/${reserva.bookId}/status`, { status: 'disponível' });

  res.send('Reserva cancelada');
});

export default router;