$(document).ready(function(){

  // browser refreshes on submit
  $('form').on('submit', function(){
    var name = $('#name').val();
    $("#hello").text("Hello, " + name);
  });


  $('form').on('submit', function(event){
    var name = $('#name').val();
    $("#hello").text("Hello, " + name);
    debugger;
    event.preventDefault();
  });

  $('form').on('submit', function(event){
    var name = $('#name').val();
    $("#hello").text("Hello, " + name);
    event.preventDefault();
  });

});
