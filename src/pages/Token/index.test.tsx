import React from 'react';
import { render, screen } from '@testing-library/react';
import Token from './index';

test('renders learn react link', () => {
  render(<Token />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
