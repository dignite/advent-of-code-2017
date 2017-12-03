import algorithm from './index'

/* eslint
  fp/no-nil: "off",
  better/explicit-return: "off",
  fp/no-unused-expression: "off"
*/

describe('corruption checksum', () => {
  it("Data from square 1 is carried 0 steps, since it's at the access port.", () => {
    const input = 1

    const output = algorithm(input)

    expect(output).toEqual(0)
  })
  it('Data from square 12 is carried 3 steps, such as: down, left, left.', () => {
    const input = 12

    const output = algorithm(input)

    expect(output).toEqual(3)
  })
  it('Data from square 23 is carried only 2 steps: up twice.', () => {
    const input = 23

    const output = algorithm(input)

    expect(output).toEqual(2)
  })
  it('Data from square 1024 must be carried 31 steps.', () => {
    const input = 1024

    const output = algorithm(input)

    expect(output).toEqual(31)
  })
  it('How many steps are required to carry the data from the square identified in your puzzle input all the way to the access port?', () => {
    const input = 312051

    const output = algorithm(input)

    expect(output).toMatchSnapshot()
  })
})