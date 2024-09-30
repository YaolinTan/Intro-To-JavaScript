console.log("hello world hehe");
function canOpenRoam(isHerbivore, weight, isNotPredator) {
  // Check the conditions based on the truth map
  if (isHerbivore && weight < 50 && isNotPredator) {
    return true;
  } else if (!isHerbivore && weight < 50 && isNotPredator) {
    return true;
  } else if (!isHerbivore && weight >= 50 && isNotPredator) {
    return false;
  } else if (!isHerbivore && weight >= 50 && !isNotPredator) {
    return false;
  } else if (isHerbivore && weight >= 50 && isNotPredator) {
    return true;
  } else if (isHerbivore && weight >= 50 && !isNotPredator) {
    return false;
  } else if (isHerbivore && weight < 50 && !isNotPredator) {
    return false;
  }
  // Default case
  return false;
}

console.log(canOpenRoam(true, 30, true));
