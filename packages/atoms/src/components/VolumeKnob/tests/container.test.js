import { render, screen } from '@testing-library/react';
import React from 'react';
import Container from '../container';

describe('Volume Knob Container', () => {
	test('should display label and output value', () => {
		render(<Container />);
		screen.getByRole('slider');
		expect(screen.getByText(/setting/i)).toBeInTheDocument();
	});
});
