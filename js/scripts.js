// Business Logic -------------------------------------------------
function Person (name, location, transportPreference) {
  this.name = name;
  this.location = location;
  this.transportPreference = transportPreference;
  this.places = [];
}

Person.prototype.addPlace = function(place) {
  this.places.push(place);
}

// Person.prototype.appendPlaces = function() {
//   for (var i=0; i < this.places.length; i++) {
//     $("." + this.name.toLowerCase() + "Places").append("<li>" + this.places[i].name + "</li>");
//     // $(("." + this.name.toLowerCase() + "Places").toString()).hide();

//     console.log(("." + this.name.toLowerCase() + "Places").toString());
//     console.log(typeof(("." + this.name.toLowerCase() + "Places").toString()));
//   }
// }


function Place (name, country, climate, rating) {
  this.name = name;
  this.country = country;
  this.climate = climate;
  this.rating = rating;
}

// var getKeys = function(place) {
//   var keys = [];
//   for (var key in place) {
//     keys.push(key);
//   }
//   return keys
// }


// Place.prototype.appendDetails = function() {
//   $("").append("<li> Country: " + this.country + "</li>");
// }

var jessica = new Person("Jessica", "Seattle", "Train");
var julia = new Person("Julia", "Issaquah", "Slow Train");
var tyler = new Person("Tyler", "Salem","car");

var disneyLand = new Place("Disney Land", "USA", "Hot,Dry", "11/10");
var vik = new Place("Vik", "Iceland", "Temperate", "Awesome!");
var disneyWorld = new Place ("Disney World", "USA", "hot and humid", "12/10");
var scottsdale = new Place ("Scottsdale, AZ", "USA", "too hot to be reasonable", "2/10");
var pdx = new Place("Portland, Oregon", "USA", "rainy, depressing","7/10 good for tourism");

jessica.addPlace(vik);
jessica.addPlace(disneyWorld);
julia.addPlace(scottsdale);
julia.addPlace(disneyLand);
julia.addPlace(disneyWorld);
julia.addPlace(pdx);
tyler.addPlace(disneyLand);
tyler.addPlace(pdx);

// jessica.appendPlaces();
// tyler.appendPlaces();
// julia.appendPlaces();

// User Interface Logic --------------------------------------------
$(document).ready(function() {
  for (var i=0; i < julia.places.length; i++){
    $(".juliaPlaces").append("<li class='" + julia.places[i].name.slice(0, 4) + "'>" + julia.places[i].name + "</li>");
    $("." + julia.places[i].name.slice(0, 4)).append("<ul><li>" + "test" + "</li></ul>")
  }
  $(".juliaPlaces").hide();

  for (var i=0; i < tyler.places.length; i++){
    $(".tylerPlaces").append("<li>" + tyler.places[i].name + "</li>");
  }
  $(".tylerPlaces").hide();

  for (var i=0; i < jessica.places.length; i++){
    $(".jessicaPlaces").append("<li>" + jessica.places[i].name + "</li>");
  }
  $(".jessicaPlaces").hide();


  
  $("h4").click(function(){
    var nameClicked = $(this).attr("id");

    if (nameClicked === "juliaClick"){
      $(".julia").children().toggle();
    } else if (nameClicked == "tylerClick") {
      $(".tylerPlaces").toggle();
    } else if (nameClicked = "jessicaClick") {
      $(".jessicaPlaces").toggle();
    }

    })
})

$("li").click(function() {
  var placeClicked = $(this).attr("id");

  if (placeClicked === x) {
    $("").children().toggle();
  }
})
