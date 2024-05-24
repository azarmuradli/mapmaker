///variables
const totalPointsElement = document.querySelector(".seasons-points span")
const gameOverScreen = document.querySelector(".right-side-game-over")
const seasonsSection = document.querySelector(".seasons-section")
const missionSection = document.querySelector(".missions")
let missionDivs = document.querySelectorAll(".missions .mission");
let rotateButton = document.querySelector(".rotate");
let flipButton = document.querySelector(".flip");
let gridElements = document.querySelectorAll(".grid .element");
let gridTime = document.querySelector(".grid .time span");
let elapsedTimeElement = document.querySelector(".elapsed-time span");
let currentSeasonElement = document.querySelector(".current-season span")
const seasonPointElements = document.querySelectorAll('.season-point span');
let missionElements = document.querySelectorAll(".missions .mission");
let encircleMountainText = document.querySelector('.encircle-mountain-text');
let rightSide = document.querySelector(".right-side")
const seasons = ["spring","summer","autumn","winter"];
let totalTime = 0;
let timeCurrentSeason = 0;
let current_season = 0
let didSeasonChange = false
let totalScore = 0;


let mapp = document.getElementById("map")
for(let i=1;i<=11;i++) {
  for(let j=1;j<=11;j++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    let alma = (i==2 && j==2) || (i==4 && j==9) || (i==6 && j==4) || (i==9 && j==10) || (i==10 && j==6)
    if(alma) {
      cell.classList.add("mountain")
    }
    mapp.appendChild(cell);
  }
}
let cells = document.querySelectorAll("#map .cell");
const basicMissions = [basicOne,basicTwo,basicThree,basicFour,basicFive,basicSix]

const updateCurrentSeason = () => {
  if (totalTime >= 7 && current_season < 1) {
    current_season = 1;
  } else if (totalTime >= 14 && current_season < 2) {
    current_season = 2;
  } else if (totalTime >= 21 && current_season < 3) {
    current_season = 3;
  } else if(totalTime>=28 && current_season<4) {
    current_season = 4;
  }

}

const updateTotalPointsElement = ()=>{

  totalPointsElement.innerHTML = totalScore.toString();
}


const updateSeason = ()=> {
  updateCurrentSeason();
  timeCurrentSeason = totalTime % 7;
  elapsedTimeElement.innerHTML = timeCurrentSeason;
  if(current_season<4){
    currentSeasonElement.innerHTML = seasons[current_season].charAt(0).toUpperCase() + seasons[current_season].slice(1);
    missionElements.forEach((element) => {
      element.classList = "mission";
    });
    missionElements[current_season].classList = "mission active";
    missionElements[(current_season+1)%4].classList = "mission active";
  }

}



function calculateScore(missionName) {
  switch (missionName) {
    case "Edge of the forest":
      return basicOne();
    case "Sleepy valley":
      return basicTwo();
    case "Watering potatoes":
      return basicThree();
    case "Borderlands":
      return basicFour();
    case "Tree Line":
      return basicFive();
    case "Watering canal":
      return basicSix();
    case "Wealthy town":
      return basicSeven();
    case "Magicians' valley":
      return basicEight();
    case "Empty site":
      return basicNine()
    case "Terraced house":
      return basicTen();
    case "Odd numbered silos":
      return basicEleven()
    case "Rich countryside":
      return basicTwelve();
      
    default:
      return 0; // or handle the case where the mission name is not recognized
  }
}


function updateMissionScore(missionDiv) {
  // Get mission name and points element from the missionDiv
  const missionName = missionDiv.getAttribute("data-mission");
  const pointsElement = missionDiv.querySelector(".points span");

  // Ensure that the existing content is a valid number or initialize it to 0
  let existingScore = parseInt(pointsElement.innerHTML) || 0;

  // Add the calculated score to the existing score and update totalScore
  let score = calculateScore(missionName);

  pointsElement.innerHTML = (existingScore + score).toString();

  // Return the updated totalScore
  return score;
}

const checkMountainsEncircled = () => {
  let encircledCount = 0;
  const mountain_locations = [12, 41, 58, 97, 104];

  for (const mountain of mountain_locations) {
    let encircled = true;
    const neighbors = getNeighbors(mountain);

    for (const neighbor of neighbors) {
      if (cells[neighbor].classList.length === 1) {
        encircled = false;
        break;
      }
    }

    if (encircled) {
      encircledCount++;
    }
  }

  return encircledCount;
};


const updateScore = () => {
  if(didSeasonChange) {
    let scoreFromFirstMission = updateMissionScore(missionDivs[current_season-1]);
    let scoreFromSecondMission = updateMissionScore(missionDivs[current_season%3]);
    totalScore+= scoreFromFirstMission + scoreFromSecondMission
    seasonPointElements[current_season-1].innerHTML = (scoreFromFirstMission+scoreFromSecondMission).toString()
    updateTotalPointsElement()
    if(current_season===4){
      mountainCircledPoints  = checkMountainsEncircled()
      if(mountainCircledPoints>0) {
        console.log("alma")
        encircleMountainText.innerHTML = `${mountainCircledPoints} point${mountainCircledPoints !== 1 ? 's' : ''} added for encircling mountains!`;
        seasonsSection.classList.add("encircled")
        totalScore+=mountainCircledPoints;
        updateTotalPointsElement();
      }
        

      rightSide.style.display = "none"
      gameOverScreen.style.display = "block"
      gameOverScreen.appendChild(seasonsSection)
      gameOverScreen.appendChild(missionSection)
      gameOverScreen.querySelectorAll(".mission").forEach((element) => {
        element.classList = "mission";
      });
      let newGameDiv = document.createElement("div");
      newGameDiv.classList.add("start-new-game-button")
      let newGameButton = document.createElement("button")
      let newGameText = document.createTextNode("START NEW GAME");
      newGameButton.appendChild(newGameText);
      newGameDiv.appendChild(newGameButton)
      
      gameOverScreen.appendChild(newGameDiv)
      newGameButton.addEventListener("click",()=>{
        location.reload()
      })
    }
  }
}



for (const missionDiv of missionDivs) {
  const randomElement = Math.floor(Math.random() * missions.length);
  missionDiv.querySelector("img").src = missions[randomElement].image;
  missionDiv.setAttribute("data-mission", missions[randomElement].title);
  missions.splice(randomElement, 1);
}



rotateButton.addEventListener("click",()=>{
  randomElement.shape = rotate90Degrees(randomElement.shape);
  gridTime.innerHTML = randomElement.time;
  flattened  = randomElement.shape.flat();
  for(let i=0;i<gridElements.length;i++) {
    if(flattened[i]===1) {
      gridElements[i].classList = `cell element ${randomElement.type}`
    }
    else {
      gridElements[i].classList = `cell element`
    }
  }
})
flipButton.addEventListener("click",()=>{
  randomElement.shape = mirrorMatrixHorizontally(randomElement.shape);
  gridTime.innerHTML = randomElement.time;
  flattened  = randomElement.shape.flat();
  for(let i=0;i<gridElements.length;i++) {
    if(flattened[i]===1) {
      gridElements[i].classList = `cell element ${randomElement.type}`
    }
    else {
      gridElements[i].classList = `cell element`
    }
  }
})



let randomElement = elements[Math.floor(Math.random() * elements.length)];
let flattened;

const changeElement = () => {
  gridTime.innerHTML = randomElement.time;
  flattened  = randomElement.shape.flat();
  for(let i=0;i<gridElements.length;i++) {
    if(flattened[i]===1) {
      gridElements[i].classList = `cell element ${randomElement.type}`
    }
    else {
      gridElements[i].classList = `cell element`
    }
  }
}

changeElement();




changeElement()
cells.forEach((cell,index)=>{
    
  cell.addEventListener("click", () => {
    if(current_season!==4) {
      let firstOneIndex = flattened.findIndex(element => element === 1);
      let remain = flattened.slice(firstOneIndex)
      function processClick(my) {
        let alma = true;
        for (let i = 0; i < remain.length; i++) {
          if (remain[i] === 1) {
            if (cells[my[i]]===undefined) {
              alma = false;
              break;
            }
            else {
              if(cells[my[i]].classList.length!==1) {
                alma = false;
                break;
              }
            }
            if ((my[i] % 11 < 3 && my[0] % 11 > 8) || (my[i] % 11 > 8 && my[0] % 11 < 3)) {
              alma = false;
              break;
            }
          }
        }
    
        if (alma) {
          for (let i = 0; i < remain.length; i++) {
            if (remain[i] === 1) {
              cells[my[i]].classList.add(randomElement.type);
            }
          }
          didSeasonChange = ((totalTime+randomElement.time) % 7) < ((totalTime) % 7)
          totalTime+= randomElement.time
          randomElement = elements[Math.floor(Math.random() * elements.length)];
          console.log(basicTwelve())
          changeElement();
          updateSeason();
          updateScore()
        } else {
          for (let i = 0; i < remain.length; i++) {
            if (remain[i] === 1) {
              if (cells[my[i]]!==undefined) {
                if((my[i] % 11 > 8 && my[0] % 11 < 2) || (my[i] % 11 < 2 && my[0] % 11 > 8) ) {
  
                }
                else {
                  cells[my[i]].classList.add("invalid");
                  setTimeout(function() {
                    cells[my[i]].classList.remove("invalid");
                  }, 500);
  
                }
  
              }
            }
          }
        }
      }
      if (firstOneIndex === 0) {
        processClick([index, index + 1, index + 2, index + 11, index + 11 + 1, index + 11 +2, index + 22, index + 22 + 1, index+22 +2]);
      }
      else if (firstOneIndex === 1) {
        processClick([index, index + 1, index + 11 - 1, index + 11, index + 11 + 1, index + 22 - 1, index + 22, index + 22 + 1]);
      } else if (firstOneIndex === 2) {
        processClick([index, index + 11 - 2, index + 11 - 1, index + 11, index + 22 - 2, index + 22 - 1, index + 22]);
      } else if (firstOneIndex === 3) {
        processClick([index, index + 1, index + 2, index + 11, index + 11 + 1, index + 11 + 2]);
      } else if (firstOneIndex === 4) {
        processClick([index, index + 1, index + 11 - 1, index + 11, index + 11 + 1]);
      } else if (firstOneIndex === 5) {
        processClick([index, index + 11 - 2, index + 11 - 1, index + 11]);
      } else if (firstOneIndex === 6) {
        processClick([index, index + 1, index + 2]);
      } else if (firstOneIndex === 7) {
        processClick([index, index + 1]);
      } else if (firstOneIndex === 8) {
        processClick([index]);
      }

    }

  });
  
      
})

function rotate90Degrees(matrix) {
  // Step 1: Transpose the matrix (swap rows with columns)
  const transposedMatrix = matrix[0].map((_, colIndex) =>
      matrix.map(row => row[colIndex])
  );

  // Step 2: Reverse the order of rows
  const rotatedMatrix = transposedMatrix.map(row => row.reverse());

  return rotatedMatrix;
}

function mirrorMatrixHorizontally(matrix) {
  return matrix.map(row => [...row].reverse());
}










