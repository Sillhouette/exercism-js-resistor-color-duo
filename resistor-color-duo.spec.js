import { decodedValue } from './resistor-color-duo.js'

describe("decodedValue", () => {
  test("it should return 10 when invoked with 'Brown' and 'Black'", () => {
    expect(decodedValue("Brown", "Black")).toEqual(10)
  })
})
