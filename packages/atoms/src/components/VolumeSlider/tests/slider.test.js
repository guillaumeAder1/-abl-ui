import { render, getByText } from '@testing-library/react';
import React from 'react';
import { Slider } from '../';

describe('Slider Component', () => {
	test('should render', () => {
		const { container, debug } = render(<Slider />);
		expect(container).toMatchSnapshot();
		getByText(container, '100');
		getByText(container, '0');
	});
});
