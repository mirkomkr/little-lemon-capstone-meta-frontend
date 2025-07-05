import React from "react";

function BookingDataTable({ bookingData }) {
  if (!bookingData || bookingData.length === 0) {
    return <p>No bookings found.</p>;
  }

  return (
    <table aria-label="Current Bookings" className="booking-data-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>Time</th>
          <th>Guests</th>
          <th>Occasion</th>
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
