let missions = [

    {
      "title": "Edge of the forest",
      "description": "You get one point for each forest field adjacent to the edge of your map.",
      "image":"assets//missions_eng/Group 69.png",
      "number":1
    },
    {
      "title": "Sleepy valley",
      "description": "For every row with three forest fields, you get four points.",
      "image":"assets//missions_eng/Group 74.png",
      "number":2
    },
    {
      "title": "Watering potatoes",
      "description": "You get two points for each water field adjacent to your farm fields.",
      "image":"assets//missions_eng/Group 70.png",
      "number":3
    },
    {
      "title": "Borderlands",
      "description": "For each full row or column, you get six points.",
      "image":"assets//missions_eng/Group 78.png",
      "number":4
    },
    {
      "title": "Tree line",
      "description": "You get two points for each of the fields in the longest vertically uninterrupted continuous forest. If there are two or more tree lines with the same longest length, only one counts.",
      "image":"assets//missions_eng/Group 68.png"
    },
    {
      "title": "Watering canal",
      "description": "For each column of your map that has the same number of farm and water fields, you will receive four points. You must have at least one field of both terrain types in your column to score points.",
      "image":"assets//missions_eng/Group 75.png"
    },
    
    {
      "title": "Wealthy town",
      "description": "You get three points for each of your village fields adjacent to at least three different terrain types.",
      "image":"assets//missions_eng/Group 71.png"
    },
    
    {
      "title": "Magicians' valley",
      "description": "You get three points for your water fields adjacent to your mountain fields.",
      "image":"assets//missions_eng/Group 76.png"
    },
    
    {
      "title": "Empty site",
      "description": "You get two points for empty fields adjacent to your village fields.",
      "image":"assets//missions_eng/Group 77.png"
    },
    
    {
      "title": "Terraced house",
      "description": "For each field in the longest village fields that are horizontally uninterrupted and contiguous you will get two points.",
      "image":"assets//missions_eng/Group 72.png"
    },
    
    {
      "title": "Odd numbered silos",
      "description": "For each of your odd numbered full columns you get 10 points.",
      "image":"assets//missions_eng/Group 79.png"
    },
    
    {
      "title": "Rich countryside",
      "description": "For each row with at least five different terrain types, you will receive four points.",
      "image":"assets//missions_eng/Group 79.png"
    }
    
]

const elements = [
  {
      time: 2,
      type: 'water',
      shape: [[1,1,1],
              [0,0,0],
              [0,0,0]],
      rotation: 0,
      mirrored: false
  },
  {
      time: 2,
      type: 'town',
      shape: [[1,1,1],
              [0,0,0],
              [0,0,0]],
      rotation: 0,
      mirrored: false        
  },
  {
      time: 1,
      type: 'forest',
      shape: [[1,1,0],
              [0,1,1],
              [0,0,0]],
      rotation: 0,
      mirrored: false  
  },
  {
      time: 2,
      type: 'farm',
      shape: [[1,1,1],
              [0,0,1],
              [0,0,0]],
          rotation: 0,
          mirrored: false  
      },
  {
      time: 2,
      type: 'forest',
      shape: [[1,1,1],
              [0,0,1],
              [0,0,0]],
      rotation: 0,
      mirrored: false  
  },
  {
      time: 2,
      type: 'town',
      shape: [[1,1,1],
              [0,1,0],
              [0,0,0]],
      rotation: 0,
      mirrored: false  
  },
  {
      time: 2,
      type: 'farm',
      shape: [[1,1,1],
              [0,1,0],
              [0,0,0]],
      rotation: 0,
      mirrored: false  
  },
  {
      time: 1,
      type: 'town',
      shape: [[1,1,0],
              [1,0,0],
              [0,0,0]],
      rotation: 0,
      mirrored: false  
  },
  {
      time: 1,
      type: 'town',
      shape: [[1,1,1],
              [1,1,0],
              [0,0,0]],
      rotation: 0,
      mirrored: false  
  },
  {
      time: 1,
      type: 'farm',
      shape: [[1,1,0],
              [0,1,1],
              [0,0,0]],
      rotation: 0,
      mirrored: false  
  },
  {
      time: 1,
      type: 'farm',
      shape: [[0,1,0],
              [1,1,1],
              [0,1,0]],
      rotation: 0,
      mirrored: false  
  },
  {
      time: 2,
      type: 'water',
      shape: [[1,1,1],
              [1,0,0],
              [1,0,0]],
      rotation: 0,
      mirrored: false  
  },
  {
      time: 2,
      type: 'water',
      shape: [[1,0,0],
              [1,1,1],
              [1,0,0]],
      rotation: 0,
      mirrored: false  
  },
  {
      time: 2,
      type: 'forest',
      shape: [[1,1,0],
              [0,1,1],
              [0,0,1]],
      rotation: 0,
      mirrored: false  
  },
  {
      time: 2,
      type: 'forest',
      shape: [[1,1,0],
              [0,1,1],
              [0,0,0]],
      rotation: 0,
      mirrored: false  
  },
  {
      time: 2,
      type: 'water',
      shape: [[1,1,0],
              [1,1,0],
              [0,0,0]],
      rotation: 0,
      mirrored: false  
  },
]