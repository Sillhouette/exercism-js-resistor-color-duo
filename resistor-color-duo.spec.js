import { decodedValue } from './resistor-color-duo.js'

describe("decodedValue", () => {
  test("it should return 10 when invoked with 'Brown' and 'Black'", () => {
    const given = ["brown", "black"]
    const action = decodedValue(given)
    expect(action).toEqual(10)
  })

  test("it should return 89 when invoked with 'Grey' and 'White'", () => {
    const given = ["grey", "white"]
    const action = decodedValue(given)
    expect(action).toEqual(89)
  })

  test("it should return 35 when invoked with 'Orange' and 'Green'", () => {
    const given = ["orange", "green"]
    const action = decodedValue(given)
    expect(action).toEqual(35)
  })

  test("it should return 27 when invoked with 'Red' and 'Violet'", () => {
    const given = ["red", "violet"]
    const action = decodedValue(given)
    expect(action).toEqual(27)
  })

  test("it should return 46 when invoked with 'Yellow' and 'Blue'", () => {
    const given = ["yellow", "blue"]
    const action = decodedValue(given)
    expect(action).toEqual(46)
  })

  test("it should return 46 when invoked with 'Yellow', 'Blue', and 'Red'", () => {
    const given = ["yellow", "blue", "red"]
    const action = decodedValue(given)
    expect(action).toEqual(46)
  })
})
