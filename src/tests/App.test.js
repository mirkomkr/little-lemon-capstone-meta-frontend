import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

jest.mock('../Testimonials', () => () => <div data-testid="testimonials">Mocked Testimonials</div>);
jest.mock('../Creators', () => () => <div data-testid="creators">Mocked Creators</div>);

test('renders the main page correctly', async () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/Make Your Reservation/i)).toBeInTheDocument();
});

test('BookingForm input fields respond correctly', () => {
  render(
    <MemoryRouter initialEntries={['/booking']}>
      <App />
    </MemoryRouter>
  );

  const dateInput = screen.getByLabelText(/choose date/i);
  const guestsInput = screen.getByLabelText(/number of guests/i);

  fireEvent.change(dateInput, { target: { value: '2025-07-01' } });
  fireEvent.change(guestsInput, { target: { value: 4 } });

  expect(dateInput.value).toBe('2025-07-01');
  expect(guestsInput.value).toBe('4');
});

test('Lazy components render mocked fallback', async () => {
  render(
    <MemoryRouter initialEntries={['/testimonials']}>
      <App />
    </MemoryRouter>
  );

  const testimonials = await screen.findByTestId('testimonials');
  expect(testimonials).toHaveTextContent('Mocked Testimonials');
});

test('Navigates to About page and renders creators component', async () => {
  render(
    <MemoryRouter initialEntries={['/about']}>
      <App />
    </MemoryRouter>
  );

  const creators = await screen.findByTestId('creators');
  expect(creators).toHaveTextContent('Mocked Creators');
});
