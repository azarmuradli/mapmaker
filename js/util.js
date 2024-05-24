function getNeighbors(index) {
    const gridSize = 11;
    const neighbors = [];
  
    // Check if the element has a neighbor to the left
    if (index % gridSize !== 0) {
        neighbors.push(index - 1);
    }
  
    // Check if the element has a neighbor to the right
    if (index % gridSize !== gridSize - 1) {
        neighbors.push(index + 1);
    }
  
    // Check if the element has a neighbor above
    if (index >= gridSize) {
        neighbors.push(index - gridSize);
    }
  
    // Check if the element has a neighbor below
    if (index < gridSize * (gridSize - 1)) {
        neighbors.push(index + gridSize);
    }
  
    return neighbors;
  }