function shortestDistance(start, path) {
    let x = start[0];
    let y = start[1];
  
    for (let i = 0; i < path.length; i++) {
      if (path[i] === "N") {
        y++;
      } else if (path[i] === "S") {
        y--;
      } else if (path[i] === "E") {
        x++;
      } else if (path[i] === "W") {
        x--;
      }
    }
  
    let distance = Math.sqrt(Math.pow(x - start[0], 2) + Math.pow(y - start[1], 2));
    console.log(distance);
  }
  
  let start = [0, 0];
  let path = "NNNNEEENE";
  shortestDistance(start, path);
  
  // Output: 6.4
  
  start = [1, 2];
  path = "NEWS";
  shortestDistance(start, path);
  
  // Output: 0
  