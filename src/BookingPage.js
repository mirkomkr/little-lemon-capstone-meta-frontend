import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import restaurantFood from './assets/restaurantfood.jpg';
import BookingForm from './BookingForm';

function BookingPage({ availableTimes, selectedDate, onDateChange }) {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleReservation = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  // Listener resize per aggiornare windowWidth
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Da 900px in giù il form va dentro content-wrapper, da 901 in su fuori
  const isSmallScreen = windowWidth <= 900;

  return (
    <main className="site-main">
      <div className="content-wrapper">
        <div className="hero-text">
          <h1 className="marzaki">Little Lemon</h1>
          <h3 className="marzaki">Chicago</h3>
          <p className="marzaki">
            We serve the best Mediterranean food in town.
            Book your table now and enjoy a delicious dinner!
          </p>

          <button className="reserve-button" onClick={handleReservation}>
            Reserve a Table
          </button>

          {/* FORM dentro content-wrapper SOLO da 900px in giù */}
          {showForm && isSmallScreen && (
            <div className="booking-form-wrapper form-inside">
              <button
                className="close-form-button"
                onClick={handleCloseForm}
                aria-label="Close booking form"
              >
                ×
              </button>

              <BookingForm
                availableTimes={availableTimes}
                selectedDate={selectedDate}
                onDateChange={onDateChange}
              />
            </div>
          )}
        </div>

        <div className="hero-image">
          <img src={restaurantFood} alt="Delicious food" />
        </div>
      </div>

      {/* FORM fuori content-wrapper SOLO da oltre 900px */}
      {showForm && !isSmallScreen && (
        <div className="booking-form-wrapper form-outside">
          <button
            className="close-form-button"
            onClick={handleCloseForm}
            aria-label="Close booking form"
          >
            ×
          </button>

          <BookingForm
            availableTimes={availableTimes}
            selectedDate={selectedDate}
            onDateChange={onDateChange}
          />
        </div>
      )}
    </main>
  );
}

export default BookingPage;
