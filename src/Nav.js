import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, scroller } from 'react-scroll';

// Sposto scrollOffsets fuori dal componente per evitare warning ESLint
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

  // Scroll automatico quando arrivo su '/' da un'altra pagina con sezione da scrollare
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

  // Nav per la home con ScrollLink e gestione freccia
  if (location.pathname === '/') {
    return (
      <>
        <nav>
          <ul className="nav-list">
            <li>
              <ScrollLink
                to="top"
                smooth={true}
                duration={600}
                offset={scrollOffsets.top}
                onClick={() => setShowScrollTop(true)}
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
            aria-label="Torna in cima"
          >
            ↑
          </button>
        )}
      </>
    );
  }

  // Nav per altre pagine con navigate e sessionStorage per scroll differito
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
      <nav>
        <ul className="nav-list">
          <li>
            <RouterLink to="/" onClick={() => setShowScrollTop(false)}>
              Home
            </RouterLink>
          </li>
          <li>
            <button onClick={() => handleNavigateToSection('reservations')}>
              Reservations
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigateToSection('order')}>
              Order Online
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigateToSection('menu')}>
              Menu
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigateToSection('testimonials')}>
              Testimonials
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigateToSection('about')}>
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
          aria-label="Torna in cima"
        >
          ↑
        </button>
      )}
    </>
  );
}

export default Nav;
