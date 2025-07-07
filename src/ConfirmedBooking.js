import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ConfirmedBooking() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequest: '',
    confirmation: false,
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        navigate('/');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted, navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Invalid email format';
      }
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else {
      const phoneRegex = /^[+\d]?(?:[\d\s-]{7,})$/;
      if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = 'Invalid phone number format';
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setSubmitted(true);
    }
  };

  const isFormIncomplete =
    !formData.firstName.trim() ||
    !formData.lastName.trim() ||
    !formData.email.trim() ||
    !formData.phone.trim() ||
    !!errors.email ||
    !!errors.phone;

  if (submitted) {
    return (
      <div
        className="confirmation-message"
        role="status"
        aria-live="polite"
        aria-label="Reservation confirmed"
        tabIndex={-1}
      >
        <h1>Reservation Confirmed!</h1>
        <p>Thank you for your booking. We look forward to seeing you!</p>
        <p>You will be redirected to the homepage shortly.</p>
      </div>
    );
  }

  return (
    <div className="booking-profile">
      <h1>Little Lemon Reservation Profile</h1>
      <form onSubmit={handleSubmit} noValidate aria-describedby="form-instructions">
        <label htmlFor="firstName">
          First Name *
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.firstName}
            aria-describedby={errors.firstName ? 'firstName-error' : undefined}
            required
            autoComplete="off"
          />
        </label>
        {errors.firstName && (
          <span id="firstName-error" className="error-message" role="alert">
            {errors.firstName}
          </span>
        )}

        <label htmlFor="lastName">
          Last Name *
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.lastName}
            aria-describedby={errors.lastName ? 'lastName-error' : undefined}
            required
            autoComplete="off"
          />
        </label>
        {errors.lastName && (
          <span id="lastName-error" className="error-message" role="alert">
            {errors.lastName}
          </span>
        )}

        <label htmlFor="email">
          Email *
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            required
            autoComplete="off"
          />
        </label>
        {errors.email && (
          <span id="email-error" className="error-message" role="alert">
            {errors.email}
          </span>
        )}

        <label htmlFor="phone">
          Phone Number *
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            required
            autoComplete="off"
          />
        </label>
        {errors.phone && (
          <span id="phone-error" className="error-message" role="alert">
            {errors.phone}
          </span>
        )}

        <label htmlFor="specialRequest">
          Special Request
          <textarea
            id="specialRequest"
            name="specialRequest"
            value={formData.specialRequest}
            onChange={handleChange}
            rows="4"
            autoComplete="off"
          />
        </label>

        <p id="form-instructions" className="sr-only">
          All fields marked with * are required.
        </p>

        <button type="submit" aria-label="Submit reservation profile" disabled={isFormIncomplete}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ConfirmedBooking;
