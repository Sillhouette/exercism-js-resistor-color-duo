import { decodedValue } from './resistor-color-duo.js'

describe("decodedValue", () => {
  test("it should return 10 when invoked with 'Brown' and 'Black'", () => {
    expect(decodedValue("Brown", "Black")).toEqual(10)
  })

  test("it should return 19 when invoked with 'Brown' and 'White'", () => {
    expect(decodedValue("Brown", "White")).toEqual(19)
  })

  test("it should return 35 when invoked with 'Orange' and 'Green'", () => {
    expect(decodedValue("Orange", "Green")).toEqual(35)
  })

  test("it should return 27 when invoked with 'Red' and 'Violet'", () => {
    expect(decodedValue("Red", "Violet")).toEqual(27)
  })
})
