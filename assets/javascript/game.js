(function() {

  //Current Problems
  //Need to get random numbers in array to be different

  var goal;
  var wins = 0;
  var losses = 0;
  var counter;
  var numberOptions = [];
  var imageCrystal;

  function gameLoad() {
    goal = Math.floor((Math.random() * 101)+ 19);
    $("#goal").text(goal);
    $("#wins").text(wins);
    $("#losses").text(losses);
    counter = 0;
    $("#score").text(counter);
    numberOptions = [];

    for (var i = 0; i < 4; i++) {
      randOpt = Math.floor((Math.random() * 12) +1);
      console.log("First: " + randOpt);
      numberOptions.push(randOpt);

      imageCrystal = $("<img>");
      imageCrystal.addClass("crystal-image");
      imageCrystal.attr("src", "assets/images/crystal-0" + (i+1) + ".png");
      imageCrystal.attr("data-crystalvalue", numberOptions[i]);
      $("#crystals").append(imageCrystal);
  
      //Checks if the new random number is already in the array, if it's not it replaces it with a new random number.
      //Need to make it check the second random number too.
      for (var j = 1; j < numberOptions.length; j++) { 
        while (randOpt === numberOptions[j-1]) {
          randOpt = Math.floor((Math.random() * 12) +1);
          numberOptions.splice(i, 1, randOpt);
        console.log("Second: " + randOpt);
        }
      }
      console.log(numberOptions);
    }
  }

  gameLoad();
  
 

  
  
  $("#crystals").on("click", ".crystal-image", function() {
    counter += parseInt($(this).attr("data-crystalvalue"));
    $("#score").text(counter);
    if (counter > goal) {
      alert("You lose");
      losses++;
      $("#losses").text(losses);
      $("#crystals").empty();
      $(".crystal-image").each(function(index) {
        imageCrystal.attr("data-crystalvalue", numberOptions[index]);
      });
      gameLoad();
    } else if (counter == goal) {
      alert("You win");
      wins++;
      $("#wins").text(wins);
      $("#crystals").empty();
      $(".crystal-image").each(function(index) {
        imageCrystal.attr("data-crystalvalue", numberOptions[index]);
      });
      gameLoad();
    }
  });
  
  })();