const basicOne = () => {
    let count = 0
    
    cells.forEach((cell,index)=>{
      checkCriteria = (index < 11) || (index % 11 === 0) || ((index - 10) % 11 === 0) || (index>=110)
      if(cells[index].classList.contains("forest") && checkCriteria) {
        count+=1;
      }
    })
    return count;
  }
  
  const basicTwo= () => {
    let count = 0
    
    for(let i=0;i<11;i++) {
      let countForest = 0;
      for(let j=0;j<11;j++) {
        if(cells[i*11 + j].classList.contains("forest")) {
          countForest+=1;
        }
      }
      if(countForest===3) {
        count+=1;
      }
    }
    return count*4;
  }
  
  const basicThree= () => {
    let count = 0
    
    cells.forEach((cell,index)=>{
      
      if(cells[index].classList.contains("water")) {
        let neighborsIndex = getNeighbors(index);
        let nextToFarm = false
        for (const neighborIndex of neighborsIndex) {
          if(cells[neighborIndex].classList.contains("farm")) {
            nextToFarm = true;
          }
        }
        if(nextToFarm) {
          count+=1;
        }
      }
    })
    return count*2;
  }
  
  
  const basicFour= () => {
    let count = 0
    for(let i=0;i<11;i++) {
      let full = true;
      let full2 = true;
      for(let j=0;j<11;j++) {
        if(cells[i*11 + j].classList.length!==2) {
          full = false;
        }
        if(cells[i+ j*11].classList.length!==2) {
          full2 = false;
        }
      }
      if(full) {
        count+=1;
      }
      if(full2) {
        count+=1;
      }
    }
    return count*6;
  }

  const basicFive = () => {
    let maxLength = 0;
    let currentLength = 0;
    let count = 0;

    // Check each column
    for (let j = 0; j < 11; j++) {
        currentLength = 0;

        for (let i = 0; i < 11; i++) {
            const index = i * 11 + j;

            if (cells[index].classList.contains("forest")) {
                currentLength += 1;
            } else {
                // Check if the current forest line is longer
                if (currentLength > maxLength) {
                    maxLength = currentLength;
                    count = currentLength;
                }

                // Reset the current length for the next line
                currentLength = 0;
            }
        }

        // Check if the last line is the longest
        if (currentLength > maxLength) {
            maxLength = currentLength;
            count = currentLength;
        }
    }

    return count * 2;
};


const basicSix = () => {
  let count = 0;

  // Check each column
  for (let j = 0; j < 11; j++) {
      let farmCount = 0;
      let waterCount = 0;
      let hasFarm = false;
      let hasWater = false;

      for (let i = 0; i < 11; i++) {
          const index = i * 11 + j;

          if (cells[index].classList.contains("farm")) {
              farmCount += 1;
              hasFarm = true;
          } else if (cells[index].classList.contains("water")) {
              waterCount += 1;
              hasWater = true;
          }
      }

      // Check if the column has at least one field of both terrain types
      if (hasFarm && hasWater && farmCount === waterCount) {
          count += 1;
      }
  }

  return count * 4;
};

const basicSeven = () => {
  let count = 0;

  cells.forEach((cell, index) => {
      if (cells[index].classList.contains("town")) {
          const neighborsIndex = getNeighbors(index);
          const terrainTypes = new Set();

          // Count the different terrain types adjacent to the town
          for (const neighborIndex of neighborsIndex) {
              const neighborClassList = cells[neighborIndex].classList;

              // Check if the neighbor has a terrain class (e.g., farm, water, forest,town)
              if (neighborClassList.length === 2) {
                  terrainTypes.add(neighborClassList[1]);
              }
          }

          // Check if the town is adjacent to at least three different terrain types
          if (terrainTypes.size >= 3) {
              count += 1;
          }
      }
  });

  return count * 3;
};

const basicEight = () => {
  let count = 0;

  cells.forEach((cell, index) => {
      if (cells[index].classList.contains("water")) {
          const neighborsIndex = getNeighbors(index);

          // Check if any of the neighbors are mountain fields
          const isAdjacentToMountain = neighborsIndex.some(neighborIndex =>
              cells[neighborIndex].classList.contains("mountain")
          );

          if (isAdjacentToMountain) {
              count += 1;
          }
      }
  });

  return count * 3;
};


const basicNine = () => {
  let count = 0;
  const checkedIndexes = new Set();

  cells.forEach((cell, index) => {
      if (cells[index].classList.contains("town")) {
          const neighborsIndex = getNeighbors(index);

          // Check and count unique empty fields adjacent to the farm
          neighborsIndex.forEach(neighborIndex => {
              const neighborCell = cells[neighborIndex];

              if (
                  neighborCell.classList.length === 1 && // Check if the cell is empty
                  !checkedIndexes.has(neighborIndex) // Ensure it hasn't been checked before
              ) {
                  count += 1;
                  checkedIndexes.add(neighborIndex);
              }
          });
      }
  });

  return count * 2;
};


const basicTen = () => {
  let maxLength = 0;
  let currentLength = 0;
  let count = 0;

  // Check each row
  for (let i = 0; i < 11; i++) {
      currentLength = 0;

      for (let j = 0; j < 11; j++) {
          const index = i * 11 + j;

          if (cells[index].classList.contains("town")) {
              currentLength += 1;
          } else {
              // Check if the current town line is longer
              if (currentLength > maxLength) {
                  maxLength = currentLength;
                  count = currentLength;
              }

              // Reset the current length for the next line
              currentLength = 0;
          }
      }

      // Check if the last line is the longest
      if (currentLength > maxLength) {
          maxLength = currentLength;
          count = currentLength;
      }
  }

  return count * 2;
};

const basicEleven = () => {
  let count = 0;

  // Check each odd-numbered column
  for (let j = 0; j < 11; j += 2) {
      let isFullColumn = true;

      for (let i = 0; i < 11; i++) {
          const index = i * 11 + j;

          // Check if the cell is not empty
          if (cells[index].classList.length === 1) {
              isFullColumn = false;
              break;
          }
      }

      // If the column is full, add 10 points
      if (isFullColumn) {
          count += 10;
      }
  }

  return count;
};


const basicTwelve = () => {
  let count = 0;

  // Check each row
  for (let i = 0; i < 11; i++) {
      const terrainTypes = new Set();

      for (let j = 0; j < 11; j++) {
          const index = i * 11 + j;
          const classList = cells[index].classList;

          // Check if the cell has a terrain type (e.g., farm, water, forest, mountain, town)
          if (classList.length === 2) {
              terrainTypes.add(classList[1]);
          } 
      }

      // Check if the row has at least five different terrain types
      if (terrainTypes.size >= 5) {
          count += 4;
      }
  }

  return count;
};



