import { pixelToValue, valueToPixel } from '../utils';

describe('Utils.js', () => {
	test('pixelToValue', () => {
		expect(pixelToValue(100, 200, 150)).toBe(75);
		expect(pixelToValue(10, 120, 120)).toBe(10);
	});
	test('valueToPixel', () => {
		expect(valueToPixel(75, 100, 150)).toBe(50);
	});
});
