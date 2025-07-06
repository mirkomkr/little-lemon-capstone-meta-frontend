function BookingSlot({ time, isAvailable, onSelect, isSelected }) {
  // Button represents a selectable booking time slot
  return (
    <button
      type="button"
      disabled={!isAvailable}
      className={`booking-slot ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(time)}
      aria-pressed={isSelected}
      aria-label={`Booking slot for ${time}${!isAvailable ? ' (unavailable)' : ''}`}
      role="option"
      aria-selected={isSelected}
    >
      {time}
    </button>
  );
}

export default BookingSlot;
