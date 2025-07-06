/* global submitAPI */
import React, { Suspense, useEffect, useReducer, useState } from 'react';
import { Element, scroller } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';
import BookingPage from './BookingPage';
import CallToAction from './CallToAction';
import Specials from './Specials';
import { initializeTimes, updateTimes } from './bookingUtils'; // <-- IMPORT FUNZIONI

const Testimonials = React.lazy(() => import('./Testimonials'));
const Creators = React.lazy(() => import('./Creators'));

function Main() {
  const navigate = useNavigate();
  const location = useLocation();

  const submitForm = async (formData) => {
    const success = await submitAPI(formData);
    if (success) {
      navigate('/confirmed-booking');
    }
    return success;
  };

  // useReducer gestisce gli orari disponibili
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const [selectedDate, setSelectedDate] = useState('');

  // Scroll automatico se l'URL contiene ?scrollTo=...
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
      <Element name="reservations">
        <BookingPage
          availableTimes={availableTimes}
          selectedDate={selectedDate}
          onDateChange={handleDateChange}
          submitForm={submitForm}
        />
      </Element>

      <Element name="order"><CallToAction /></Element>
      <Element name="menu"><Specials /></Element>

      <Suspense fallback={<div>Loading testimonials...</div>}>
        <Element name="testimonials"><Testimonials /></Element>
      </Suspense>

      <Suspense fallback={<div>Loading creators...</div>}>
        <Element name="about"><Creators /></Element>
      </Suspense>
    </>
  );
}

export default Main;
