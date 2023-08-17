import React from 'react';
import { render, screen } from '@testing-library/react';
import CommandBar from './index';

test('renders learn react link', () => {
  render(<CommandBar />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
