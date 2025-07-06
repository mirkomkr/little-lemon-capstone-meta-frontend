/* global fetchAPI */

// Utility to initialize available booking times for today
export function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

// Reducer to update available times based on selected date
export function updateTimes(state, action) {
  switch (action.type) {
    case 'DATE_CHANGE':
      return fetchAPI(new Date(action.date));
    default:
      return state;
  }
}
