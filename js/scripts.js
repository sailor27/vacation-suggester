$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var userName = $("input#user").val();
    var photoChoice = $("input:radio[name=photo]:checked").val();
    var radioChoice = $("input:radio[name=radio]:checked").val();
    var lookChoice = $("input:radio[name=look]:checked").val();
    var vehicleChoice = $("input:radio[name=vehicle]:checked").val();
    var snackChoice = $("input:radio[name=snack]:checked").val();
    var result;
    if (vehicleChoice === "jeep" || radioChoice === "rhcp") {
      result = "COACHELLA.";
     } else if (photoChoice === "boot"){
       result = "DOLLYWOOD.";
     } else if (lookChoice === "practical"){
      result = "ICE FISHING.";
     } else if (photoChoice === "fish" && lookChoice === "tasteless"){
       result = ("COACHELLA.");
     }
   $("#suggestion").slideDown();
   $("#output1").text(userName);
   $("#output2").text(result);
  });
});
