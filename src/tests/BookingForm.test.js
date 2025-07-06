// BookingForm.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../BookingForm';

describe('BookingForm Component', () => {
  const availableTimes = ['17:00', '18:00', '19:00'];
  const selectedDate = '2025-07-06';

  let onDateChangeMock;
  let submitFormMock;

  beforeEach(() => {
    onDateChangeMock = jest.fn();
    submitFormMock = jest.fn().mockResolvedValue();

    render(
      <BookingForm
        availableTimes={availableTimes}
        selectedDate={selectedDate}
        onDateChange={onDateChangeMock}
        submitForm={submitFormMock}
      />
    );
  });

  describe('HTML5 validation attributes', () => {
    test('date input has required and correct type', () => {
      const dateInput = screen.getByLabelText(/choose date/i);
      expect(dateInput).toHaveAttribute('required');
      expect(dateInput).toHaveAttribute('type', 'date');
    });

    test('time select has required attribute', () => {
      const timeSelect = screen.getByLabelText(/choose time/i);
      expect(timeSelect).toHaveAttribute('required');
    });

    test('guests input has type number and min/max attributes', () => {
      const guestsInput = screen.getByLabelText(/number of guests/i);
      expect(guestsInput).toHaveAttribute('type', 'number');
      expect(guestsInput).toHaveAttribute('min', '1');
      expect(guestsInput).toHaveAttribute('max', '10');
      expect(guestsInput).toHaveAttribute('required');
    });

    test('occasion select has required attribute', () => {
      const occasionSelect = screen.getByLabelText(/occasion/i);
      expect(occasionSelect).toHaveAttribute('required');
    });
  });

  describe('React-driven validation (isFormValid)', () => {
    test('submit button is initially enabled when selectedDate prop is valid', () => {
      const button = screen.getByRole('button', { name: /make your reservation/i });
      expect(button).not.toBeDisabled();
    });

    test('submit button becomes disabled if date is cleared', () => {
      const dateInput = screen.getByLabelText(/choose date/i);
      fireEvent.change(dateInput, { target: { value: '' } });

      const button = screen.getByRole('button', { name: /make your reservation/i });
      expect(button).toBeDisabled();
    });

    test('submit button becomes enabled again when all fields are valid', () => {
      // clear date first
      const dateInput = screen.getByLabelText(/choose date/i);
      fireEvent.change(dateInput, { target: { value: '' } });
      let button = screen.getByRole('button', { name: /make your reservation/i });
      expect(button).toBeDisabled();

      // re-fill all fields
      fireEvent.change(dateInput, { target: { value: '2025-07-07' } });
      fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '18:00' } });
      fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '4' } });
      fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Anniversary' } });

      button = screen.getByRole('button', { name: /make your reservation/i });
      expect(button).not.toBeDisabled();
    });
  });

  describe('Interactions and callbacks', () => {
    test('calls onDateChange when date is changed', () => {
      const dateInput = screen.getByLabelText(/choose date/i);
      fireEvent.change(dateInput, { target: { value: '2025-07-08' } });
      expect(onDateChangeMock).toHaveBeenCalledWith('2025-07-08');
    });

    test('calls submitForm with correct data when form is submitted', async () => {
      // Fill form with known values
      fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2025-07-09' } });
      fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '19:00' } });
      fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '2' } });
      fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });

      const button = screen.getByRole('button', { name: /make your reservation/i });
      fireEvent.click(button);

      // attendi che la promise submitForm venga chiamata
      expect(submitFormMock).toHaveBeenCalledWith({
        date: '2025-07-09',
        time: '19:00',
        guests: 2,
        occasion: 'Birthday',
      });
    });
  });
});
