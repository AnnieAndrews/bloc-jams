var animatePoints = function() {
  var points = document.getElementsByClassName('point');

  var revealPoint = function(point) {
    points[point].style.opacity = 1;
    points[point].style.transform = "scaleX(1) translateY(0)";
    points[point].style.msTransform = "scaleX(1) translateY(0)";
    points[point].style.WebkitTransform = "scaleX(1) translateY(0)";
  }

  for (var i = 0; i <= points.length; i++) {
    revealPoint(i);
  }
};
