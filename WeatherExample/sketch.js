//A wind direction vector
var wind;
// Circle position
var position;
// background transprency
var humidity;
// red value
var temp;

var clearSky;
var fewClouds;
var scatteredClouds;
var brokenClouds;
var showerRain;
var rain;
var thunderStorm;
var snow;
var mist;


var x, y;



function setup() {
  createCanvas(720, 400);

  // Request the data from openweathermap
  loadJSON('http://api.openweathermap.org/data/2.5/weather?q=Johannesburg&units=metric', gotWeather);



sunMan = loadImage("assets/sunMan.gif");
cloudMan = loadImage("assets/cloudMan.gif");
rainMan = loadImage("assets/rainMan.gif");





}

function draw() {


      if (weather1 == 993800){
  var imageDiv = createDiv(image(rainMan, 360, 400));
rain();

}


} 

function gotWeather(weather) {


  weather1 = (weather.id);

      if (weather1 == 993800){
  var imageDiv = createDiv(image(rainMan, 0, 0));
rain();
}


}
  function rain(){

      // Draw a circle
  noStroke();
  fill(0,50,200,50);
  rect(x, y, 5, 15);

 // Jiggling randomly on the horizontal axis
  // x = x + random(-1, 1);
  x = random(0,width);
  y = random(0,height);
  // Moving up at a constant speed
  y = y + 1;
  
  // Reset to the bottom
  if (y > height) {
    y = 0;
  }
}












