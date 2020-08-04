import React from 'react';
import { render } from '@testing-library/react';
import Routes from '.';

test('renders hello world', () => {
  const { getByText } = render(<Routes />);
  const linkElement = getByText(/Hello world/i);
  expect(linkElement).toBeInTheDocument();
});
