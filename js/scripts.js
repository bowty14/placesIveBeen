function Person (name, location, transportPreference) {
  this.name = name;
  this.location = location;
  this.transportPreference = transportPreference;
  this.places = [];
}

Person.prototype.addPlace = function(place) {
  this.places.push(place);
}


function Place (name, country, climate, rating) {
  this.name = name;
  this.country = country;
  this.climate = climate;
  this.rating = rating;
}

var jessica = new Person("Jessica", "Seattle", "Train");
var julia = new Person("Julia", "Issaquah", "Slow Train");
var tyler = new Person("Tyler", "Salem","car");

var disneyLand = new Place("Disney Land", "USA", "Hot,Dry", "11/10");
var vik = new Place("Vik", "Iceland", "Temperate", "Awesome!");
var disneyWorld = new Place ("DisneyWorld", "USA", "hot and humid", "12/10");
var scottsdale = new Place ("Scottsdale, AZ", "USA", "too hot to be reasonable", "2/10");
var pdx = new Place("Portland,Oregon", "USA", "rainy,depressing","7/10 good for tourism");