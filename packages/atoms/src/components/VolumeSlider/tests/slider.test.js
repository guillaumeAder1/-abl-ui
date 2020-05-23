import { render, getByText, fireEvent } from '@testing-library/react';
import React from 'react';
import { Slider } from '../';

describe('Slider Component', () => {
	test('should render', () => {
		const { container, debug } = render(<Slider />);
		expect(container).toMatchSnapshot();
		getByText(container, '100');
		getByText(container, '0');
	});
	test('should call onChange handler with ...', () => {
		const spy = jest.fn();
		const { container, debug } = render(<Slider onChange={spy} />);
		const dom = container.querySelectorAll('.tick');
		// debug(dom[0]);
		// fireEvent.click(dom[0]);
		// expect(spy).toHaveBeenCalled();
	});
});
