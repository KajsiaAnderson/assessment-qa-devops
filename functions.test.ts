const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('test data type of shuffleArray', () => {
        expect(typeof shuffleArray).toBe('function')
    })
    test('test array', () => {
        const expected=[1, 2, 3]
        expect(shuffleArray([1,2,3])).toEqual(
            expect.arrayContaining(expected),
          )
    })
})

