import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ConfirmedBooking() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/'); // torna alla home page dopo 5 secondi
    }, 5000);

    // Cleanup del timer se il componente viene smontato prima
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="confirmation-message">
      <h1>Reservation Confirmed!</h1>
      <p>Thank you for your booking. We look forward to seeing you!</p>
      <p>You will be redirected to the homepage shortly.</p>
    </div>
  );
}

export default ConfirmedBooking;
