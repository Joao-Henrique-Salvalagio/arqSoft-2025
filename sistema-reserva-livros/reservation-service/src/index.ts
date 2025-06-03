import express from 'express';
import reservationRoutes from './routes/reservation.routes';

const app = express();
app.use(express.json());
app.use(reservationRoutes);

app.listen(3002, () => console.log('Reservation service running on port 3002'));