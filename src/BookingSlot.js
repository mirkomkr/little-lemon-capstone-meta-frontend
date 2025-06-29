function BookingSlot({ time, isAvailable, onSelect, isSelected }) {
  return (
    <button
      type="button"
      disabled={!isAvailable}
      className={`booking-slot ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(time)}
    >
      {time}
    </button>
  );
}

export default BookingSlot;
