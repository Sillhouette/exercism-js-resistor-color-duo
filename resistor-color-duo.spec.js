import { decodedValue } from './resistor-color-duo.js'

describe("decodedValue", () => {
  test("it should return 10 when invoked with 'Brown' and 'Black'", () => {
    expect(decodedValue(["brown", "black"])).toEqual(10)
  })

  test("it should return 89 when invoked with 'Grey' and 'White'", () => {
    expect(decodedValue(["grey", "white"])).toEqual(89)
  })

  test("it should return 35 when invoked with 'Orange' and 'Green'", () => {
    expect(decodedValue(["orange", "green"])).toEqual(35)
  })

  test("it should return 27 when invoked with 'Red' and 'Violet'", () => {
    expect(decodedValue(["red", "violet"])).toEqual(27)
  })

  test("it should return 46 when invoked with 'Yellow' and 'Blue'", () => {
    expect(decodedValue(["yellow", "blue"])).toEqual(46)
  })

  test("it should return 46 when invoked with 'Yellow', 'Blue', and 'Red'", () => {
    expect(decodedValue(["yellow", "blue", "red"])).toEqual(46)
  })
})
