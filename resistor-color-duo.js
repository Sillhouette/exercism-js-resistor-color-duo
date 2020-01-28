export const decodedValue = ([firstColor, secondColor]) => {
  return parseInt(`${COLORS.indexOf(firstColor)}${COLORS.indexOf(secondColor)}`)
};

const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]
