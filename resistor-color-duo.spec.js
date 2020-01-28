import { decodedValue } from './resistor-color-duo.js'

describe("decodedValue", () => {
  test("it should return 10 when invoked with 'Brown' and 'Black'", () => {
    expect(decodedValue(["Brown", "Black"])).toEqual(10)
  })

  test("it should return 89 when invoked with 'Grey' and 'White'", () => {
    expect(decodedValue(["Grey", "White"])).toEqual(89)
  })

  test("it should return 35 when invoked with 'Orange' and 'Green'", () => {
    expect(decodedValue(["Orange", "Green"])).toEqual(35)
  })

  test("it should return 27 when invoked with 'Red' and 'Violet'", () => {
    expect(decodedValue(["Red", "Violet"])).toEqual(27)
  })

  test("it should return 46 when invoked with 'Yellow' and 'Blue'", () => {
    expect(decodedValue(["Yellow", "Blue"])).toEqual(46)
  })

  test("it should return 46 when invoked with 'Yellow', 'Blue', and 'Red'", () => {
    expect(decodedValue(["Yellow", "Blue", "Red"])).toEqual(46)
  })
})
