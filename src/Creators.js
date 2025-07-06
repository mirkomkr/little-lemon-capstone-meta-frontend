import React from 'react';
import creator1 from './assets/Mario and Adrian A.jpg';
import creator2 from './assets/Mario and Adrian b.jpg';

function Creators() {
  return (
    <section className="creators-section" aria-label="About the creators">
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
          alt="Mario and Adrian, founders of Little Lemon" 
          className="creator-image first" 
          loading="lazy"
        />
        <img 
          src={creator2} 
          alt="Mario and Adrian smiling together" 
          className="creator-image second" 
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default Creators;

