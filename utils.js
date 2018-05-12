const utils = {
  sum(a, b) {
    return a + b;
  },

  getMatrixAsColumns(matrix) {
    const matrixHeight = matrix.length
    ,     matrixWidth = matrix[0].length
    const matrixAsColumns = []
    for (let i = 0; i < matrixWidth; i++) {
      matrixAsColumns.push(new Array(matrixHeight).fill(''))
    }
    matrix.map((row, i) => {
      row.map((col, j) => {
        matrixAsColumns[i][j] = matrix[j][i]
      })
    })
    matrixAsColumns.map(row => row = row.reverse())
    return matrixAsColumns
  },

  pushElementToRowIfItExists(row, matrix, i, j) {
    if (typeof matrix[i] !== 'undefined' && typeof matrix[i][j] !== 'undefined') {
      row.push(matrix[i][j])
    }
  },

  getDiagonalCoords(row, matrix, direction, iterationLength, n) {
    if (direction === 'NE') {
      for (let i = n; i >= 0; i--) {
        utils.pushElementToRowIfItExists(row, matrix, i, n - i)
      }
    } else if (direction === 'SE') {
      for (let i = 0; i < iterationLength; i++) {
        utils.pushElementToRowIfItExists(row, matrix, n + i, i)
      }
    }
    return row
  },

  getMatrixAsDiagonal(matrix, direction) {
    const matrixHeight = matrix.length
    ,     matrixWidth = matrix[0].length
    ,     iterationLength = matrixWidth + matrixHeight - 1
    ,     matrixAsDiagonal = []
    if (direction === 'SE') {
      for (let i = 0; i < matrixWidth - 1; i++) {
        matrix.unshift([])
      }
    }
    for (let i = 0; i < iterationLength; i++) {
      const diagonalRow = []
      matrixAsDiagonal.push(utils.getDiagonalCoords(diagonalRow, matrix, direction, iterationLength, i))
    }
    return matrixAsDiagonal
  }
}

module.exports = utils;