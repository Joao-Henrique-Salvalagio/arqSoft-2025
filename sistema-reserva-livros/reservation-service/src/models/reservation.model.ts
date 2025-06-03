export type ReservationStatus = 'ativa' | 'cancelada';

export interface Reservation {
  id: number;
  userId: number;
  bookId: number;
  dataReserva: string;
  status: ReservationStatus;
}

export const reservations: Reservation[] = [];