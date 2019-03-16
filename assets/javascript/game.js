$(document).ready(function() {
  var winNumber = 0;
  var lossNumber = 0;
  // Create a number to hold the sum of jewel clicks.
  var totalNumber =  0;
  // For each iteration, generate a new random number between 19 and 120.
  var targetNumber = Math.floor(Math.random() * 102) + 19;
  // For each iteration, generate a new random number between 1 and 12.
  var rubyNumber = Math.floor(Math.random() * 12) + 1;
  var emeraldNumber = Math.floor(Math.random() * 12) + 1;
  var diamondNumber = Math.floor(Math.random() * 12) + 1;
  var sapphireNumber = Math.floor(Math.random() * 12) + 1;

  function reset() {
    // For each iteration, generate a new random number between 19 and 120.
    targetNumber = Math.floor(Math.random() * 102) + 19;
    // For each iteration, generate a new random number between 1 and 12.
    rubyNumber = Math.floor(Math.random() * 12) + 1;
    emeraldNumber = Math.floor(Math.random() * 12) + 1;
    diamondNumber = Math.floor(Math.random() * 12) + 1;
    sapphireNumber = Math.floor(Math.random() * 12) + 1;
    totalNumber =  0;
    $("#targetText").html("<h3>" + targetNumber + "</h3>");
  }

  // function click() {
    $("#ruby").on("click", function() {
      totalNumber = totalNumber + rubyNumber;
      // console.log("Ruby: " + rubyNumber);
      console.log("Total: " + totalNumber);
    });

    $("#emerald").on("click", function() {
      totalNumber = totalNumber + emeraldNumber;
      // console.log("Emerald: " + emeraldNumber);
      console.log("Total: " + totalNumber);
    });

    $("#diamond").on("click", function() {
      totalNumber = totalNumber + diamondNumber;
      // console.log("Diamond: " + diamondNumber);
      console.log("Total: " + totalNumber);
    });

    $("#sapphire").on("click", function() {
      totalNumber = totalNumber + sapphireNumber;
      // console.log("Sapphire: " + sapphireNumber);
      console.log("Total: " + totalNumber);
    });
  // }

  $(".gem").on("click", function() {
    if (totalNumber > targetNumber) {
      lossNumber++;
      $("#lossText").html("<h4>" + "Loss: " + lossNumber + "</h4>");
      reset();
    } else if (totalNumber == targetNumber) {
      winNumber++;
      $("#winText").html("<h4>" + "Win: " + winNumber + "</h4>");
      reset();
    }
    $("#totalText").html("<h4>" + "Total: " + totalNumber + "</h4>");
  });

  $("#targetText").html("<h3>" + targetNumber + "</h3>");
  $("#winText").html("<h4>" + "Win: " + winNumber + "</h4>");
  $("#lossText").html("<h4>" + "Loss: " + lossNumber + "</h4>");
  $("#totalText").html("<h4>" + "Total: " + totalNumber + "</h4>");
});
