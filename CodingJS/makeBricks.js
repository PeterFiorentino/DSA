// We want to make a row of bricks that is goal inches long. 
// We have a number of small bricks (1 inch each) and big bricks (5 inches each). 
// Return true if it is possible to make the goal by choosing from the given bricks. 
// This is a little harder than it looks and can be done without any loops. 
// See also: Introduction to MakeBricks

// Examples

// makeBricks(3, 1, 8) → true
// makeBricks(3, 1, 9) → false
// makeBricks(3, 2, 10) → true

function makeBricks(small, big, goal){
    let bigInches = big * 5
    if(goal === bigInches){
      return true
    }
    if(goal === small){
      return true
    }
    if(bigInches > goal){
      let bigBricksNeeded = Math.floor(goal/5)
      if((goal - (bigBricksNeeded * 5)) <= small){
         return true
      }
    }
    if(goal > bigInches){
      if((goal - bigInches) <= small){
        return true
      }
    }
    return false
  }