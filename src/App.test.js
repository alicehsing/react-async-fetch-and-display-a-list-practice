import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Pass the arrays as props', () => {
  render(<App />);
  const linkElement = screen.getByText(/Pass the arrays as props/i);
  expect(linkElement).toBeInTheDocument();
});
