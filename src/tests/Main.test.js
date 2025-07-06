// Questo va all'inizio, prima di importare Main
import { initializeTimes, updateTimes } from '../Main'

jest.mock('react-router-dom', () => ({
  useLocation: () => ({ search: '' }),
  MemoryRouter: ({ children }) => children,
}));

describe('initializeTimes', () => {
  test('should return the initial list of available times', () => {
    expect(initializeTimes()).toEqual(["18:00", "19:00", "20:00"]);
  });
});

describe('updateTimes', () => {
  test('should return the same state for unknown actions', () => {
    const currentState = ["17:00", "18:00"];
    const action = { type: 'UNKNOWN_ACTION' };
    expect(updateTimes(currentState, action)).toEqual(currentState);
  });

  test('should return initial times on DATE_CHANGE action', () => {
    const currentState = ["17:00", "18:00"];
    const action = { type: 'DATE_CHANGE', date: '2025-06-28' };
    expect(updateTimes(currentState, action)).toEqual(initializeTimes());
  });
});
