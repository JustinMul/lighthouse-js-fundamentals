const station = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];
const chooseStations = function(stations){
  const goodStations =[];
  for (let i = 0; i < stations.length; i++) {
    let stationNum = stations[i]
    let capicity = stationNum[1];
    if (capicity >= 20) {
        let typeOfBuilding = stationNum[2];
        if (typeOfBuilding==='school' || typeOfBuilding === 'community centre') {
         goodStations.push(stationNum[0]);

        }
      }
  }
  return goodStations;
};
console.log(chooseStations(station));