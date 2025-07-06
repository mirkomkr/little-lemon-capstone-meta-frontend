import React from "react";

/**
 * Displays a table of current bookings.
 * Accessible table with descriptive aria-label.
 */
function BookingDataTable({ bookingData }) {
  if (!bookingData || bookingData.length === 0) {
    return <p>No bookings found.</p>;
  }

  return (
    <table
      aria-label="Current Bookings"
      className="booking-data-table"
      role="table" // Explicit table role for assistive tech
    >
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Date</th>
          <th scope="col">Time</th>
          <th scope="col">Guests</th>
          <th scope="col">Occasion</th>
        </tr>
      </thead>
      <tbody>
        {bookingData.map(({ id, date, time, guests, occasion }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{date}</td>
            <td>{time}</td>
            <td>{guests}</td>
            <td>{occasion}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BookingDataTable;
