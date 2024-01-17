import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LandingPage from './landing.page';

describe('<GreetingSection />', () => {
  it('renders the component and checks for specific text', () => {
    render(<LandingPage />);

    // Check if the main text is rendered
    expect(screen.getByText('Let us save your time with managing your finances')).toBeInTheDocument();

    // Check for the presence of buttons
    expect(screen.getByText('Log in')).toBeInTheDocument();
    expect(screen.getByText('Create new account')).toBeInTheDocument();
    expect(screen.getByAltText(/money/)).toBeInTheDocument();
  });
});
