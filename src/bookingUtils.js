/* global fetchAPI */

export function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

export function updateTimes(state, action) {
  switch (action.type) {
    case 'DATE_CHANGE':
      return fetchAPI(new Date(action.date));
    default:
      return state;
  }
}
