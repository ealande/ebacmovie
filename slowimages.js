document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    var image = document.getElementsByClassName("header__logo")[0];
    image.src = "dist/images/menu/nospoon.png";
  }, 3000);

  setTimeout(function() {
    var image = document.getElementsByClassName("hero__image")[0];
    image.src = "dist/images/logo/matrixherologo.png";
  }, 5000);

  setTimeout(function() {
    var image = document.getElementById("movie__container__image");
    image.src = "dist/images/movieimages/neoexhausted.jpg";
  }, 8000);
});
