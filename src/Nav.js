import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, scroller } from 'react-scroll';

// Scroll offsets for each section
const scrollOffsets = {
  top: 0,
  reservations: 0,
  order: -50,
  menu: -200,
  testimonials: 0,
  about: -50,
};

function Nav() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to section if returning to home with a stored section
  useEffect(() => {
    const sectionToScroll = sessionStorage.getItem('scrollToSection');
    if (location.pathname === '/' && sectionToScroll) {
      scroller.scrollTo(sectionToScroll, {
        smooth: true,
        duration: 600,
        offset: scrollOffsets[sectionToScroll] || 0,
      });
      sessionStorage.removeItem('scrollToSection');
    }
  }, [location]);

  // Navigation for homepage with smooth scroll links
  if (location.pathname === '/') {
    return (
      <>
        <nav aria-label="Main Navigation">
          <ul className="nav-list">
            <li>
              <ScrollLink
                to="top"
                smooth={true}
                duration={600}
                offset={scrollOffsets.top}
                onClick={() => setShowScrollTop(true)}
                aria-label="Home section"
                role="link"
                tabIndex={0}
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="reservations"
                smooth={true}
                duration={600}
                offset={scrollOffsets.reservations}
                onClick={() => setShowScrollTop(true)}
                aria-label="Reservations section"
                role="link"
                tabIndex={0}
              >
                Reservations
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="order"
                smooth={true}
                duration={600}
                offset={scrollOffsets.order}
                onClick={() => setShowScrollTop(true)}
                aria-label="Order Online section"
                role="link"
                tabIndex={0}
              >
                Order Online
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="menu"
                smooth={true}
                duration={600}
                offset={scrollOffsets.menu}
                onClick={() => setShowScrollTop(true)}
                aria-label="Menu section"
                role="link"
                tabIndex={0}
              >
                Menu
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="testimonials"
                smooth={true}
                duration={600}
                offset={scrollOffsets.testimonials}
                onClick={() => setShowScrollTop(true)}
                aria-label="Testimonials section"
                role="link"
                tabIndex={0}
              >
                Testimonials
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about"
                smooth={true}
                duration={600}
                offset={scrollOffsets.about}
                onClick={() => setShowScrollTop(true)}
                aria-label="About section"
                role="link"
                tabIndex={0}
              >
                About
              </ScrollLink>
            </li>
          </ul>
        </nav>
        {showScrollTop && (
          <button
            className="scroll-top-btn"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setShowScrollTop(false);
            }}
            aria-label="Scroll to top"
            type="button"
          >
            ↑
          </button>
        )}
      </>
    );
  }

  // Navigation for other pages, uses buttons for accessibility and navigation
  const handleNavigateToSection = (section) => {
    if (section === 'top') {
      navigate('/');
      setShowScrollTop(false);
      return;
    }
    sessionStorage.setItem('scrollToSection', section);
    navigate('/');
    setShowScrollTop(true);
  };

  return (
    <>
      <nav aria-label="Main Navigation">
        <ul className="nav-list">
          <li>
            <RouterLink to="/" onClick={() => setShowScrollTop(false)} aria-label="Home">
              Home
            </RouterLink>
          </li>
          <li>
            <button onClick={() => handleNavigateToSection('reservations')} aria-label="Go to Reservations section" type="button">
              Reservations
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigateToSection('order')} aria-label="Go to Order Online section" type="button">
              Order Online
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigateToSection('menu')} aria-label="Go to Menu section" type="button">
              Menu
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigateToSection('testimonials')} aria-label="Go to Testimonials section" type="button">
              Testimonials
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigateToSection('about')} aria-label="Go to About section" type="button">
              About
            </button>
          </li>
        </ul>
      </nav>
      {showScrollTop && (
        <button
          className="scroll-top-btn"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setShowScrollTop(false);
          }}
          aria-label="Scroll to top"
          type="button"
        >
          ↑
        </button>
      )}
    </>
  );
}

export default Nav;
