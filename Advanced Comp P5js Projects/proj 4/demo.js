
var limit = 2500;
var myApiUrl = "https://data.cityofnewyork.us/resource/uvpi-gqnh.json?$offset=150&$limit=" + limit; // tree data set

var data; // data holder for the JSON dataset

var selection; // selection DOM element

function preload() {

  // data is loaded as an array
  data = loadJSON(myApiUrl);

}


function setup() {

  createCanvas(innerWidth, innerHeight);

  console.log(data); // data doesn't have a length, wtf


  selection = createSelect();

  selection.position(100, 400);

  selection.option('Manhattan');
  selection.option('Staten Island');
  selection.option('Queens');
  selection.option('Brooklyn');
  selection.option('Bronx');


}

function draw() {

  background(220);

  
  for (var i = 0; i < limit; i++) {

    // console.log(data[i].latitude, data[i].longitude);

    var mappedX = map(data[i].longitude, -74.1, -73.7, 500, 1200);
    var mappedY = map(data[i].latitude, 40.5, 40.9, 1000, 200);

    if (selection.selected() == data[i].boroname)
      text("🌳", mappedX, mappedY);

    // console.log(mappedX);
  }
}
