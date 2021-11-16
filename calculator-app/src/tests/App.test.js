import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders calculator', () => {
  render(<App />);
  const calculatorComponent = screen.getByTestId('calculator');
  expect(calculatorComponent).toBeInTheDocument();
});