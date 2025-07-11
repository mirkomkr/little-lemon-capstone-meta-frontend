// BookingForm.jsx
import React, { useState, useEffect } from 'react';

function BookingForm({ availableTimes, selectedDate, onDateChange, submitForm }) {
  const [formData, setFormData] = useState({
    date: selectedDate || '',
    time: availableTimes[0] || '',
    guests: 1,
    occasion: 'Birthday',
  });

  const [isFormValid, setIsFormValid] = useState(false);

  // Sync form date with selectedDate prop
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      date: selectedDate || '',
    }));
  }, [selectedDate]);

  // Update time when availableTimes changes
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      time: availableTimes[0] || '',
    }));
  }, [availableTimes]);

  // Validate form fields
  useEffect(() => {
    const { date, time, guests, occasion } = formData;
    const valid = date && time && occasion && guests >= 1 && guests <= 10;
    setIsFormValid(valid);
  }, [formData]);

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === 'res-date') {
      setFormData((prev) => ({ ...prev, date: value }));
      onDateChange(value);
    } else if (id === 'res-time') {
      setFormData((prev) => ({ ...prev, time: value }));
    } else if (id === 'guests') {
      setFormData((prev) => ({ ...prev, guests: parseInt(value, 10) }));
    } else if (id === 'occasion') {
      setFormData((prev) => ({ ...prev, occasion: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitForm(formData);
  };

  return (
    <form
      className="booking-form"
      onSubmit={handleSubmit}
      aria-labelledby="booking-form-title"
      role="form"
    >
      {/* Hidden heading for screen readers */}
      <h2 id="booking-form-title" className="visually-hidden">
        Reservation Form
      </h2>

      <div>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={formData.date}
          onChange={handleChange}
          aria-required="true"
          aria-label="Choose date"
          required
        />
      </div>

      <div>
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={formData.time}
          onChange={handleChange}
          aria-required="true"
          aria-label="Choose time"
          required
        >
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          min="1"
          max="10"
          value={formData.guests}
          onChange={handleChange}
          aria-required="true"
          aria-label="Number of guests"
          required
        />
      </div>

      <div>
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={formData.occasion}
          onChange={handleChange}
          aria-label="Occasion"
          aria-required="true"
          required
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </div>

      <button
        type="submit"
        className="booking-submit"
        disabled={!isFormValid}
        aria-label="Make your reservation"
      >
        Make Your Reservation
      </button>
    </form>
  );
}

export default BookingForm;
