import { expect } from '@jest/globals';
import React from 'react';
import { render } from '@testing-library/react';
import { HelloMessage } from './HelloMessage';

test('Displays the correct text', () => {
    const result = render(<HelloMessage name="David" />);
    const someText = result.container.querySelector('div');

    expect(someText.textContent).toBe('Hello David');
});
