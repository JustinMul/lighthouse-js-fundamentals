const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

const finalPosition = function (moves) {
  let x = 0;
  let y = 0;
  
  for (let i = 0; i < moves.length; i++) {
    const direction = moves[i];
    if (direction === 'north'){
      y++;
    }
    else if(direction === 'south'){
      y--;
    }
    else if(direction === 'east'){
      x++;
    }
    else{
      x--;
    }
  }
  return [x,y];
}
console.log(finalPosition(moves)); 