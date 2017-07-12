// Loading the Points section on the Homepage
var pointsArray = document.getElementsByClassName('point');

  var revealPoint = function(point) {
    point.style.opacity = 1;
    point.style.transform = "scaleX(1) translateY(0)";
    point.style.msTransform = "scaleX(1) translateY(0)";
    point.style.WebkitTransform = "scaleX(1) translateY(0)";
  }

// checkpoint 22 assignment
var animatePoints = function(points) {
  forEach(points, revealPoint);
};


//  for (var i = 0; i <= points.length; i++) {
//  revealPoint(i);
//  }
// };

window.onload = function() {
  // Automatically animate the points on a tall screen where scrolling can't trigger the animation.
    if (window.innerheight > 950) {
      animatePoints(pointsArray);
    }
  // In all other situations where scrolling triggers the animation:
     var sellingPoints = document.getElementsByClassName('selling-points')[0];
     var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;
  window.addEventListener('scroll', function(event) {
    if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
           animatePoints(pointsArray);
       }
  });
}
