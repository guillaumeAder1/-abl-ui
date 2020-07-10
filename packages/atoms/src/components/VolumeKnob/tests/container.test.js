import { render, screen } from '@testing-library/react';
import React from 'react';
import Container from '../container';

describe('Volume Knob Container', () => {
	test('should display label and output value', () => {
		const { rerender } = render(<Container />);
		screen.getByRole('slider');
		expect(screen.getByText(/setting/i)).toBeInTheDocument();
		expect(screen.getByText(/33/)).toBeInTheDocument();
		rerender(<Container min={0} max={50} />);
		screen.debug();

		// screen.getByRole('circle');
	});
});
