export type Status = 'disponível' | 'reservado';

export interface Book {
  id: number;
  titulo: string;
  autor: string;
  status: Status;
}

export const books: Book[] = [];