import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../BookingForm';

const availableTimes = ['17:00', '17:30', '18:00'];
const selectedDate = '2023-12-12';
const onDateChange = jest.fn();
const submitForm = jest.fn(() => Promise.resolve(true));

test('modifica campi form e chiama onDateChange', () => {
  render(<BookingForm availableTimes={availableTimes} selectedDate={selectedDate} onDateChange={onDateChange} submitForm={submitForm} />);

  const dateInput = screen.getByLabelText(/choose date/i);
  fireEvent.change(dateInput, { target: { value: '2023-12-13' }});
  
  expect(onDateChange).toHaveBeenCalledWith('2023-12-13');

  const guestsInput = screen.getByLabelText(/number of guests/i);
  fireEvent.change(guestsInput, { target: { value: '4' }});
  expect(guestsInput.value).toBe('4');
});

test('submit form chiama submitForm con dati', async () => {
  render(<BookingForm availableTimes={availableTimes} selectedDate={selectedDate} onDateChange={onDateChange} submitForm={submitForm} />);

  const button = screen.getByRole('button', { name: /make your reservation/i });
  fireEvent.click(button);

  expect(submitForm).toHaveBeenCalled();
});
