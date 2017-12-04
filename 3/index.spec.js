import algorithm, { toPosition, getRing } from './index'

/* eslint
  fp/no-nil: "off",
  better/explicit-return: "off",
  fp/no-unused-expression: "off"
*/

const test = implementation => inputPrefix => input => output => {  
  it(`${inputPrefix}${input} => ${output}`, () => {
    expect(implementation(input)).toEqual(output)
  })
}

describe('spiral memory', () => {
  const spiralMemoryTest = test(algorithm)('Position ')
  spiralMemoryTest(1)(0)
  spiralMemoryTest(2)(1)
  spiralMemoryTest(11)(2)
  spiralMemoryTest(12)(3)
  spiralMemoryTest(23)(2)
  spiralMemoryTest(1024)(31)

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

describe('getRing', () => {
  const ringTest = test(getRing)('Position ')
  
  ringTest(1)(0)
  ringTest(2)(1)
  ringTest(3)(1)
  ringTest(4)(1)
  ringTest(5)(1)
  ringTest(6)(1)
  ringTest(7)(1)
  ringTest(8)(1)
  ringTest(9)(1)
  ringTest(10)(2)
  ringTest(11)(2)
  ringTest(12)(2)
  ringTest(13)(2)
  ringTest(14)(2)
  ringTest(15)(2)
  ringTest(16)(2)
  ringTest(17)(2)
  ringTest(18)(2)
  ringTest(19)(2)
  ringTest(20)(2)
  ringTest(21)(2)
  ringTest(22)(2)
  ringTest(23)(2)
  ringTest(24)(2)
  ringTest(25)(2)
  ringTest(26)(3)
})