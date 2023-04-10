const matrix = [
    [1,2,3],
    [4,5,6],[1,9],[10,11],[4,5,
    [7,8,9],[1,2]],
  ]
  
  const flatArray = []
  
/*   for(let i=0; i<matrix.length; i++){
    const array = matrix[i]
    for(let j=0; j<array.length; j++){
      flatArray.push(matrix[i][j])
    }
  }
  
  console.log(flatArray)
  // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
   */
  console.log(matrix.flat(3))