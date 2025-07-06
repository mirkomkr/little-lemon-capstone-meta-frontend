import { render, screen } from '@testing-library/react';
import BookingDataTable from '../BookingDataTable';

test('mostra messaggio se bookingData è vuoto', () => {
  render(<BookingDataTable bookingData={[]} />);
  expect(screen.getByText(/no bookings found/i)).toBeInTheDocument();
});

test('mostra tabella con dati di prenotazione', () => {
  const data = [
    { id: 1, date: '2023-12-12', time: '18:00', guests: 2, occasion: 'Birthday' }
  ];
  render(<BookingDataTable bookingData={data} />);
  expect(screen.getByText('18:00')).toBeInTheDocument();
  expect(screen.getByText('Birthday')).toBeInTheDocument();
});
