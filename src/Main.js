/* global submitAPI */
import React, { Suspense, useEffect, useReducer, useState } from 'react';
import { Element, scroller } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';
import BookingPage from './BookingPage';
import CallToAction from './CallToAction';
import Specials from './Specials';
import { initializeTimes, updateTimes } from './bookingUtils';

const Testimonials = React.lazy(() => import('./Testimonials'));
const Creators = React.lazy(() => import('./Creators'));

function Main() {
  const navigate = useNavigate();
  const location = useLocation();

  // Handles booking form submission and redirects on success
  const submitForm = async (formData) => {
    const success = await submitAPI(formData);
    if (success) {
      navigate('/confirmed-booking');
    }
    return success;
  };

  // Manage available booking times and selected date
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const [selectedDate, setSelectedDate] = useState('');

  // Scroll to section if URL contains ?scrollTo=...
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get('scrollTo');
    if (scrollTo) {
      scroller.scrollTo(scrollTo, {
        duration: 600,
        smooth: true,
        offset: -50,
      });
    }
  }, [location]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    dispatch({ type: 'DATE_CHANGE', date });
  };

  return (
    <>
      <Element name="reservations" aria-label="Reservations Section">
        <BookingPage
          availableTimes={availableTimes}
          selectedDate={selectedDate}
          onDateChange={handleDateChange}
          submitForm={submitForm}
        />
      </Element>

      <Element name="order" aria-label="Order Section">
        <CallToAction />
      </Element>
      <Element name="menu" aria-label="Menu Section">
        <Specials />
      </Element>

      <Suspense fallback={<div aria-live="polite">Loading testimonials...</div>}>
        <Element name="testimonials" aria-label="Testimonials Section">
          <Testimonials />
        </Element>
      </Suspense>

      <Suspense fallback={<div aria-live="polite">Loading creators...</div>}>
        <Element name="about" aria-label="About Section">
          <Creators />
        </Element>
      </Suspense>
    </>
  );
}

export default Main;
