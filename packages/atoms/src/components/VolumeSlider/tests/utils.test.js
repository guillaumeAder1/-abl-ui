import { pixelToValue, valueToPixel, buildTicks } from '../utils';

describe('Utils.js', () => {
	test('pixelToValue', () => {
		expect(pixelToValue(100, 200, 150)).toBe(75);
		expect(pixelToValue(10, 120, 120)).toBe(10);
	});
	test('valueToPixel', () => {
		expect(valueToPixel(75, 100, 150)).toBe(50);
	});
	test('buildTicks should return correct values', () => {
		expect(buildTicks(3)).toEqual(['long', 'short', 'long']);
		expect(buildTicks(4)).toEqual(['long', 'short', 'short', 'long']);
		expect(buildTicks(2)).toEqual(['long', 'long']);
	});
});
