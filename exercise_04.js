const buildings_list = [3, 7, 8, 3, 6, 1]

getSunset = buildings => {
  let buildingsWithSunset = []

  buildingsWithSunset.push(buildings[buildings.length-1])
  for (let i = buildings.length; i >= 0; i--) {
    if (buildings[i] < buildings[i - 1]){
      buildingsWithSunset.push(buildings[i - 1]);
    }
  }

  return buildingsWithSunset.length
}

console.log(getSunset(buildings_list))