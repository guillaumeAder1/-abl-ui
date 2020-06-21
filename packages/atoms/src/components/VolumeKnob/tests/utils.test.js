import { calculateInitValue, convertDashArray } from '../utils';

test('calculate init value', () => {
	expect(calculateInitValue(0, 100, 75, 0, 360)).toEqual(270);
	expect(calculateInitValue(0, 100, 75, 90, 270)).toEqual(135);
	expect(calculateInitValue(50, 100, 75, 90, 270)).toEqual(90);
});

test('convertDashArray', () => {
	expect(convertDashArray());
});
