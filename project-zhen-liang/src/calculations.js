const calories = (fat, carb, protein) => fat * 9 + (carb + protein) * 4
const bodyFatPercentage = (length, weight, waist, gender) => {
	if (gender)
		return (waist * 0.74 - (weight * 0.0822 + 44.74)) / weight * 100
	else
		return (waist * 0.74 - (weight * 0.0822 + 34.89)) / weight * 100
}
const BMI = (length, weight) => weight / (length ^ 2)
const BMR = (length, weight, gender, age) => {
	if (gender)
		return 10 * weight + 6.25 * length - 5 * age + 5
	else
		return 10 * weight + 6.25 * length - 5 * age - 161

}

export { calories, bodyFatPercentage, BMI, BMR }; 