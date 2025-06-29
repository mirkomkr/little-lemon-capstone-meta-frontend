import React, { Suspense, useEffect, useReducer, useState } from 'react';
import { Element, scroller } from 'react-scroll';
import { useLocation } from 'react-router-dom';
import BookingPage from './BookingPage';
import CallToAction from './CallToAction';
import Specials from './Specials';

const Testimonials = React.lazy(() => import('./Testimonials'));
const Creators = React.lazy(() => import('./Creators'));

// Inizializza orari disponibili
function initializeTimes() {
  return ["18:00", "19:00", "20:00"];
}

// Reducer per aggiornare orari
function updateTimes(state, action) {
  switch (action.type) {
    case 'DATE_CHANGE':
      return initializeTimes();
    default:
      return state;
  }
}

function Main() {
  const location = useLocation();

  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const [selectedDate, setSelectedDate] = useState('');

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
