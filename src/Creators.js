import React from 'react';
import creator1 from './assets/Mario and Adrian A.jpg';
import creator2 from './assets/Mario and Adrian b.jpg';

function Creators() {
  return (
    <section className="creators-section">
      <div className="creators-text">
        <h2 className="marzaki">Little Lemon</h2>
        <h3 className="marzaki">Chicago</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="creators-images">
        <img 
          src={creator1} 
          alt="Creator 1" 
          className="creator-image first" 
          loading="lazy"  // <-- lazy loading immagine
        />
        <img 
          src={creator2} 
          alt="Creator 2" 
          className="creator-image second" 
          loading="lazy"  // <-- lazy loading immagine
        />
      </div>
    </section>
  );
}

export default Creators;

