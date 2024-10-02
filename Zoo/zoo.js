console.log("hello world hehe");
function canOpenRoam(isHerbivore, weight, isPredator) {
  // Check the conditions based on the truth map
  if (isHerbivore && weight < 50 && !isPredator) {
    return "The animal is allowed in the open area";
  } else if (!isHerbivore && weight < 50 && !isPredator) {
    return "The animal is allowed in the open area";
  } else if (!isHerbivore && weight >= 50 && !isPredator) {
    return "The animal is NOT allowed in the open area";
  } else if (!isHerbivore && weight >= 50 && isPredator) {
    return "The animal is NOT allowed in the open area";
  } else if (isHerbivore && weight >= 50 && !isPredator) {
    return "The animal is allowed in the open area";
  } else if (isHerbivore && weight >= 50 && isPredator) {
    return "The animal is NOT allowed in the open area";
  } else if (isHerbivore && weight < 50 && isPredator) {
    return "The animal is NOT allowed in the open area";
  }
  // Default case
  return "The animal is NOT allowed in the open area";
}

console.log(canOpenRoam(true, 30, true));
