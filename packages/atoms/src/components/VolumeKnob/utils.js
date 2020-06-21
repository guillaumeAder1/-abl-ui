export const angleToValue = (angMin, angMax, value) => {};
export const valueToAngle = (angMin, angMax, value) => {};
/**
 * Calculate 360 degree angle values based on inputs
 * - use to calculate slider pointer angle value
 * @param {Number} min
 * @param {Number} max
 * @param {Number} value
 * @param {Number} angleMin
 * @param {Number} angleMax
 * @returns {Number} Angle value... e.g 90, 127...
 */
export const calculateInitValue = (min, max, value, angleMin, angleMax) => {
	const valueInPercentage = (value - min) / (max - min);
	return (angleMax - angleMin) * valueInPercentage;
};

export const convertDashArray = (value, angleMin, angleMax) => {
	return circlePercentage;
};
