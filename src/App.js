// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import BookingForm from './BookingForm'; 
import './App.css';
import CallToAction from './CallToAction';
import Specials from './Specials';
import Testimonials from './Testimonials';
import Creators from './Creators';
import ConfirmedBooking from './ConfirmedBooking';

// Main application component with routing and layout
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Main page with optional scroll target */}
        <Route path="/:scrollTarget" element={<Main />} />
        <Route path="/" element={<Main />} />
        {/* Booking and reservation forms */}
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/reservations" element={<BookingForm />} />
        {/* Specials, menu, testimonials, about, and confirmation pages */}
        <Route path="/order" element={<Specials />} />
        <Route path="/menu" element={<CallToAction />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/about" element={<Creators />} />
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
