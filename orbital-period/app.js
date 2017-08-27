/*
This function calculates the orbital period for objects orbiting the Earth, based on their average altitude.
-- run with node app.js
*/

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
  var out = [];
  
  for (var i = 0; i < arr.length; i++) {
    var T = 2 * Math.PI * Math.sqrt( Math.pow((earthRadius + arr[i].avgAlt), 3) / GM);
    T = Math.round(T);
    out.push({name: arr[i].name, orbitalPeriod: T});
  }
  return out;
}

function main() {
	tests = [[{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}], [{name : "sputnik", avgAlt : 35873.5553}]]
	tests.forEach(function(test) {
		console.log("Input : " + JSON.stringify(test));
		console.log("Output: " + JSON.stringify(orbitalPeriod(test)));
		console.log()
	});
}

main()