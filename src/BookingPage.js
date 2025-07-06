// BookingPage.jsx
import React, { useState, useEffect } from 'react';
import restaurantFood from './assets/restaurantfood.jpg';
import BookingForm from './BookingForm';
import BookingDataTable from './BookingDataTable';

function BookingPage({ availableTimes, selectedDate, onDateChange, submitForm }) {
  // Load booking data from localStorage or use default data
  const [bookingData, setBookingData] = useState(() => {
    const saved = localStorage.getItem('bookingData');
    return saved ? JSON.parse(saved) : [
      { id: 1, date: '2023-10-01', time: '18:00', guests: 2, occasion: 'Birthday' },
      { id: 2, date: '2023-10-02', time: '19:00', guests: 4, occasion: 'Anniversary' },
    ];
  });

  // Persist booking data to localStorage
  useEffect(() => {
    localStorage.setItem('bookingData', JSON.stringify(bookingData));
  }, [bookingData]);

  const [showForm, setShowForm] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isSmallScreen = windowWidth <= 900;

  // Track window size for responsive layout
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleReservation = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  // Add a new booking entry
  const addBooking = (newBooking) => {
    setBookingData((prev) => [
      ...prev,
      { ...newBooking, id: prev.length ? prev[prev.length - 1].id + 1 : 1 },
    ]);
    setShowForm(false);
  };

  // Handle booking form submission
  const handleBookingSubmit = async (formData) => {
    const success = await submitForm(formData);
    if (success) {
      addBooking(formData);
    } else {
      alert('Reservation failed. Please try again.');
    }
  };

  return (
    <main className="site-main" role="main">
      <div className="content-wrapper">
        <div className="hero-text">
          <h1 className="marzaki">Little Lemon</h1>
          <h3 className="marzaki">Chicago</h3>
          <p className="marzaki">
            We serve the best Mediterranean food in town.
            Book your table now and enjoy a delicious dinner!
          </p>

          <button
            className="reserve-button"
            onClick={handleReservation}
            aria-label="Reserve a Table"
            type="button"
          >
            Reserve a Table
          </button>

          {/* Show booking form and data table on small screens */}
          {showForm && isSmallScreen && (
            <div className="booking-form-wrapper form-inside" role="dialog" aria-modal="true" aria-label="Booking Form">
              <button
                className="close-form-button"
                onClick={handleCloseForm}
                aria-label="Close booking form"
                type="button"
              >
                ×
              </button>

              <BookingForm
                availableTimes={availableTimes}
                selectedDate={selectedDate}
                onDateChange={onDateChange}
                submitForm={handleBookingSubmit}
              />

              <section className="booking-data" aria-label="Current Bookings">
                <h2>Current Bookings</h2>
                <BookingDataTable bookingData={bookingData} />
              </section>
            </div>
          )}
        </div>

        <div className="hero-image">
          <img src={restaurantFood} alt="Delicious food" />
        </div>
      </div>

      {/* Show booking form and data table on large screens */}
      {showForm && !isSmallScreen && (
        <>
          <div className="booking-form-wrapper form-outside" role="dialog" aria-modal="true" aria-label="Booking Form">
            <button
              className="close-form-button"
              onClick={handleCloseForm}
              aria-label="Close booking form"
              type="button"
            >
              ×
            </button>

            <BookingForm
              availableTimes={availableTimes}
              selectedDate={selectedDate}
              onDateChange={onDateChange}
              submitForm={handleBookingSubmit}
            />
          </div>

          <section className="booking-data" aria-label="Current Bookings">
            <h2>Current Bookings</h2>
            <BookingDataTable bookingData={bookingData} />
          </section>
        </>
      )}
    </main>
  );
}

export default BookingPage;
