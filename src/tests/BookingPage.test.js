import { render, screen } from '@testing-library/react';
import BookingPage from '../BookingPage';

const mockSubmitForm = jest.fn(() => Promise.resolve(true));

beforeEach(() => {
  localStorage.clear();
  jest.clearAllMocks();
});

test('inizializza bookingData da localStorage se presente', () => {
  const mockData = [
    { id: 5, date: '2023-12-12', time: '19:30', guests: 3, occasion: 'Birthday' }
  ];
  localStorage.setItem('bookingData', JSON.stringify(mockData));

  render(<BookingPage availableTimes={['17:00']} selectedDate="2023-12-12" onDateChange={() => {}} submitForm={mockSubmitForm} />);
  
  expect(screen.getByText('19:30')).toBeInTheDocument();
  expect(screen.getByText('Birthday')).toBeInTheDocument();
});

test('salva bookingData su localStorage quando cambia', () => {
  const newBooking = { id: 1, date: '2023-12-12', time: '17:00', guests: 2, occasion: 'Anniversary' };
  localStorage.setItem('bookingData', JSON.stringify([newBooking]));

  const stored = JSON.parse(localStorage.getItem('bookingData'));
  expect(stored).toEqual([newBooking]);
});
