(function() {


var goal = Math.floor((Math.random() * 101)+ 19);
var wins = 0;
var losses = 0;

$("#goal").text(goal);
$("#wins").text(wins);
$("#losses").text(losses);

var counter = 0;

$("#score").text(counter);

var numberOptions = [];

for (var i = 0; i < 4; i++) {
  randOpt = Math.floor((Math.random() * 12) +1);
  //console.log(randOpt);
  numberOptions.push(randOpt);
  for (var j = 0; j < numberOptions.length; j++) {
    
  if (randOpt === numberOptions[j-1]) {
    randOpt = Math.floor((Math.random() * 12) +1);
    
    numberOptions.push(randOpt);
   console.log("Hey");
   console.log("Other " + numberOptions[j]);
  }
}
  console.log(numberOptions);
  console.log(numberOptions.indexOf(randOpt));
}

for (var i = 0; i < 4; i++) {
  var imageCrystal = $("<img>");
  imageCrystal.addClass("crystal-image");

  imageCrystal.attr("src", "assets/images/crystal-0" + (i+1) + ".png");

  imageCrystal.attr("data-crystalvalue", numberOptions[i]);

  $("#crystals").append(imageCrystal);
}

$(".crystal-image").on("click", function() {
  counter += parseInt($(this).attr("data-crystalvalue"));
  $("#score").text(counter);

  if (counter > goal) {
    alert("You lose");
    losses++;
    $("#losses").text(losses);
  } else if (counter == goal) {
    alert("You win");
    wins++;
    $("#wins").text(wins);
  }
});

})();