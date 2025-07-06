import { initializeTimes, updateTimes } from '../bookingUtils';

// Mock della funzione fetchAPI
jest.mock('../bookingUtils', () => {
  const originalModule = jest.requireActual('../bookingUtils');
  return {
    ...originalModule,
    fetchAPI: jest.fn(() => ['17:00', '18:00']),
  };
});
import { fetchAPI } from '../bookingUtils';

describe('bookingUtils', () => {
  test('initializeTimes chiama fetchAPI con la data di oggi', () => {
    const times = initializeTimes();
    expect(fetchAPI).toHaveBeenCalledWith(expect.any(Date));
    expect(Array.isArray(times)).toBe(true);
  });

  test('updateTimes cambia orari disponibili con DATE_CHANGE', () => {
    const initial = ['17:00', '18:00'];
    const action = { type: 'DATE_CHANGE', date: '2023-12-12' };
    const updated = updateTimes(initial, action);
    expect(fetchAPI).toHaveBeenCalledWith(new Date('2023-12-12'));
    expect(Array.isArray(updated)).toBe(true);
  });

  test('updateTimes ritorna stato originale se azione sconosciuta', () => {
    const state = ['17:00'];
    const action = { type: 'UNKNOWN' };
    expect(updateTimes(state, action)).toBe(state);
  });
});
