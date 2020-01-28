export const decodedValue = ([firstColor, secondColor]) => {
  return parseInt(`${COLORS.indexOf(firstColor)}${COLORS.indexOf(secondColor)}`)
};

const COLORS = ["Black", "Brown", "Red", "Orange", "Yellow", "Green", "Blue", "Violet", "Grey", "White"]
