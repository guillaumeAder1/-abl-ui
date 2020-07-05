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

export const convertDashArray = (min, max, value, angleMin, angleMax) => {
	const valueInPercentage = (value - min) / (max - min);
	const perc = (valueInPercentage / (angleMax - angleMin)) * 100;
	const angleProp = (angleMax / 360) * 100;
	return perc * angleProp;
};
/**
 * Calculate value base on angle input
 * this it to be used for the strokeArray calculation
 * @param {Number} min
 * @param {Number} max
 * @param {Number} angleValue
 * @param {Number} angleMin
 * @param {Number} angleMax
 * @returns {Number}
 */
export const angleToValue = (min, max, angleValue, angleMin, angleMax) => {
	const temp = angleValue / (angleMax - angleMin);
	const res = min + (max - min) * temp;
	return res * (angleMax / 360);
};

export const valueToAbsolute = (angleValue, min, max, angleMin, angleMax) => {
	const percAngle = (angleValue / (angleMax - angleMin)) * 100;
	const percValue = percAngle / (max - min);
	return Math.floor(percValue * 100);
};
