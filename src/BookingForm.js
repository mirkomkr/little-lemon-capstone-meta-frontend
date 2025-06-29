import React from "react";

function BookingForm({ availableTimes, selectedDate, onDateChange }) {
  const handleDateInputChange = (e) => {
    onDateChange(e.target.value);  // Passa la nuova data a Main tramite callback
  };

  return (
    <form className="booking-form" aria-labelledby="booking-form-title" role="form">
      <h2 id="booking-form-title" className="visually-hidden">
        Reservation Form
      </h2>

      <div>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={selectedDate}
          onChange={handleDateInputChange}
          aria-required="true"
        />
      </div>

      <div>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" aria-required="true">
          {availableTimes.map((time) => (
            <option key={time} value={time}>{time}</option>
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
          aria-required="true"
        />
      </div>

      <div>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion">
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </div>

      <button type="submit" className="booking-submit">
        Make Your Reservation
      </button>
    </form>
  );
}

export default BookingForm;
