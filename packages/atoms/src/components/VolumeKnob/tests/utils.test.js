import { calculateInitValue, convertDashArray, angleToValue } from '../utils';

test('calculate init value', () => {
	expect(calculateInitValue(0, 100, 75, 0, 360)).toEqual(270);
	expect(calculateInitValue(0, 100, 75, 90, 270)).toEqual(135);
	expect(calculateInitValue(50, 100, 75, 90, 270)).toEqual(90);
});

test('convertDashArray', () => {
	// expect(convertDashArray(0, 100, 75, 0, 360)).toEqual(270);
});

test('angleToValue for strokeArray', () => {
	expect(angleToValue(0, 100, 90, 0, 360)).toEqual(25);
	expect(angleToValue(50, 100, 90, 0, 360)).toEqual(62.5);
	expect(angleToValue(0, 100, 270, 0, 270)).toEqual(75);
	expect(angleToValue(50, 100, 90, 0, 180)).toEqual(37.5);
});
