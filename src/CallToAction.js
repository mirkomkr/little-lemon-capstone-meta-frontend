import React from 'react';

function CallToAction() {
  return (
    <div className="dishes-header">
      <h1 className="marzaki">This Week's Specials!</h1>
      <button
        className="dishes-action-button"
        aria-label="View Online Menu"
        type="button"
      >
        Online Menu
      </button>
    </div>
  );
}

export default CallToAction;
