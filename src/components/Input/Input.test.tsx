import React from 'react';
import { screen, render } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  it('Input with name', () => {
    render(<Input dataTestId="custom-element" name="user-name" />);

    const input = screen.getByTestId('custom-element');

    expect(input.children).toHaveLength(0);
    expect(input.getAttribute('name')).toBe('user-name');
  });
});
