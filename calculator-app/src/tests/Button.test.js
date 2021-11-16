import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Button from '../components/Button';

describe('Button component tests', () => {
  it('Should render the button', () => {
    render(<Button />);
    const button = screen.getByTestId('button');
    expect(button).toBeInTheDocument();
  });

  it('Should have "button" class', () => {
    render(<Button />);
    const button = screen.getByTestId('button');
    expect(button).toHaveClass('button');
  })

  it('Should trigger on click event', () => {
    let wasClicked = false;
    render(
      <Button 
        onClick={() => {
          wasClicked = true;
        }}
      />
    )
    const button = screen.getByTestId('button');
    userEvent.click(button);
    expect(wasClicked).toBe(true);
  })

  it('Should render children text', () => {
    render(<Button>button</Button>);
    const button = screen.getByTestId('button');
    expect(button).toHaveTextContent('button');
  })
});