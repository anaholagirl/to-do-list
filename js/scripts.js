$(document).ready(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var inputtedFirstTask = $("input#new-first-task").val();
    var newTask = { task1: inputtedFirstTask };
                       // lastName: inputtedLastName,
                       // address: inputtedAddress};

    $("ul#tasks").append("<li><span class='task'>" +
                              newTask.task1 +
                            "</span></li>");

    $("input#new-first-task").val("");


    // $(".contact").last().click(function() {
    // $("#show-contact").show();
    // $("#show-contact h2").text(newContact.firstName + " " + newContact.lastName);
    // $(".first-name").text(newContact.firstName);
    // $(".last-name").text(newContact.lastName);
    // $(".address").text(newContact.address);




    $(".task").last().click(function() {
      $("#show-task").show();
      $(".completed-task").text(newTask.task1);
    });

  });
});
