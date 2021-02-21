import { render, getByText } from '@testing-library/react';
import React from 'react';
import Button from 'components/button';

describe('Button', () => {
	test('should display text', () => {
		const { container } = render(<Button>We Salute You!</Button>);
		getByText(container, 'We Salute You!');
	});
});
