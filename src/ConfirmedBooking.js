import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ConfirmedBooking() {
  const navigate = useNavigate();

  // Redirect to homepage after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="confirmation-message" role="status" aria-live="polite" aria-label="Reservation confirmed">
      <h1>Reservation Confirmed!</h1>
      <p>Thank you for your booking. We look forward to seeing you!</p>
      <p>You will be redirected to the homepage shortly.</p>
    </div>
  );
}

export default ConfirmedBooking;
