const utils = require('./utils.js')

const alphabetMatrix = [
  ['A', 'B', 'C', 'D', 'E'],
  ['F', 'G', 'H', 'I', 'J'],
  ['K', 'L', 'M', 'N', 'O'],
  ['P', 'Q', 'R', 'S', 'T'],
  ['U', 'V', 'W', 'X', 'Y'],
]

const colorMatrix = [
  ['',    '', 'red',    '',       '',   ''],
  ['',    '', 'red',    '',       '',   ''],
  ['',    '', 'black',  '',       '',   ''],
  ['',    '', 'red',    'black',  '',   ''],
  ['red', '', 'red',    'black',  '',   ''],
]

test('adds 1 + 2 to equal 3', () => {
  expect(utils.sum(1, 2)).toBe(3)
})

describe('should find columns and diagonals', () => {

  test('find columns with getMatrixAsColumns', () => {
    const matrixAsColumns = utils.getMatrixAsColumns(alphabetMatrix)
    // console.log(matrixAsColumns)
    expect(matrixAsColumns[0]).toEqual(['U','P','K','F','A'])
    expect(matrixAsColumns[3]).toEqual(['X','S','N','I','D'])
    expect(matrixAsColumns.length).toBe(alphabetMatrix[0].length)
  })

  test('find diagonal / with getMatrixAsDiagonal', () => {
    const matrixAsDiagonal = utils.getMatrixAsDiagonal(alphabetMatrix, 'NE')
    // console.log(matrixAsDiagonal)
    expect(matrixAsDiagonal[0]).toEqual(['A'])
    expect(matrixAsDiagonal[3]).toEqual(['P','L','H','D'])
    expect(matrixAsDiagonal[6]).toEqual(['W','S','O'])
    expect(matrixAsDiagonal.length).toBe(9)
  })

  test('find diagonal \ with getMatrixAsDiagonal', () => {
    const matrixAsDiagonal = utils.getMatrixAsDiagonal(alphabetMatrix, 'SE')
    // console.log(matrixAsDiagonal)
    expect(matrixAsDiagonal[0]).toEqual(['E'])
    expect(matrixAsDiagonal[3]).toEqual(['B','H','N','T'])
    expect(matrixAsDiagonal[6]).toEqual(['K','Q','W'])
    expect(matrixAsDiagonal.length).toBe(9)
  })

})