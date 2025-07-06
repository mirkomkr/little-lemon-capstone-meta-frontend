jest.mock('react-router-dom', () => ({
  useLocation: () => ({ search: '' }),
}));

import { useLocation } from 'react-router-dom';

test('useLocation mock works', () => {
  const location = useLocation();
  expect(location).toEqual({ search: '' });
});
