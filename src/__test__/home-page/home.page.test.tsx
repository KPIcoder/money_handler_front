import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import HomePage from '@/home-page/home.page';

// Tests
describe('Renders main page correctly', () => {
  it('Should render the page correctly', () => {
    render(<HomePage />);

    const h2 = screen.queryByText('hello world');

    // Expectations
    expect(h2).toBeInTheDocument();
  });
});
