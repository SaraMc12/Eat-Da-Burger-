// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  // Logoic for change sleep it toggles between true and false
  $(".burgerAvailable").on("click", function(event) {
    var id = $(this).data("id");
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
     
    }).then(
      function() {
       
        // Reload the page to get the updated list
        location.reload();
      }
    );
    console.log(id)
  });
  
  $(".addBurgerButton").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurgers = {
      burger_name: $("#name").val().trim(),
      devoured: 0
    };
console.log(newBurgers);
    // Send the POST request.
    $.ajax("/burgers", {
      type: "POST",
      data: newBurgers
    }).then(
      function(response) {
        console.log("response", response);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
