$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var photoChoice = $("input:radio[name=photo]:checked").val();
    var radioChoice = $("input:radio[name=radio]:checked").val();
    var lookChoice = $("input:radio[name=look]:checked").val();
    var vehicleChoice = $("input:radio[name=vehicle]:checked").val();
    var snackChoice = $("input:radio[name=snack]:checked").val();
    var result;

    if (vehicleChoice === "jeep") {
      result = "COACHELLA";
    }

  $("#output").text(result);
  });
});
