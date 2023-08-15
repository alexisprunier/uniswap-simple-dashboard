import React from 'react';
import { render, screen } from '@testing-library/react';
import Pool from './index';

test('renders learn react link', () => {
  render(<Pool />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
