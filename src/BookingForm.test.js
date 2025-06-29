import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
  const mockTimes = ['12:00', '13:00', '14:00'];
  const mockDate = '2025-06-28';
  const mockOnDateChange = jest.fn();

  render(
    <BookingForm 
      availableTimes={mockTimes} 
      selectedDate={mockDate} 
      onDateChange={mockOnDateChange} 
    />
  );

  const buttonElement = screen.getByText("Make Your Reservation");
  expect(buttonElement).toBeInTheDocument();
});
