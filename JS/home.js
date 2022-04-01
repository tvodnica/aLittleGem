$(document).ready(function () {
  var hidden1 = true;
  var hidden2 = true;

  $("#hamburger").click(function (e) {
    e.preventDefault();
    if (hidden1) {
      $("#navigacijska-lista").show();

      hidden1 = false;
    } else {
      $("#navigacijska-lista").hide();
      hidden1 = true;
    }
  });

  $("#plus").click(function (e) {
    e.preventDefault();
    if (hidden2) {
      $("#header-svi-apartmani").show();

      hidden2 = false;
    } else {
      $("#header-svi-apartmani").hide();
      hidden2 = true;
    }
  });

  //Get the button:
  mybutton = document.getElementById("float-button-to-top");
  $(mybutton).hide();

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 1000 ||
      document.documentElement.scrollTop > 1000
    ) {
      $(mybutton).fadeIn();
    } else {
      $(mybutton).fadeOut();
    }
  }
});
