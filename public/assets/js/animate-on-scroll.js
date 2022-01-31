var animateHTML = function () {
  var clipElement, slideElement, windowHeight;

  var init = function () {
    clipElement = document.getElementsByClassName("animate-clip");
    slideElement = document.getElementsByClassName("animate-slide");
    windowHeight = window.innerHeight;
    _addEventHandlers();
  };

  var _addEventHandlers = function () {
    window.addEventListener("load", _checkPosition);
    window.addEventListener("scroll", _checkPosition);
    window.addEventListener("resize", init);
  };
  var _checkPosition = function () {
    for (var i = 0; i < clipElement.length; i++) {
      var posFromTop = clipElement[i].getBoundingClientRect().top;
      if (posFromTop - windowHeight <= 0) {
        clipElement[i].className = clipElement[i].className.replace(
          "animate-clip",
          "animated-clip"
        );
      }
    }

    for (var i = 0; i < slideElement.length; i++) {
      var posFromTop = slideElement[i].getBoundingClientRect().top;
      if (posFromTop - windowHeight <= 0) {
        slideElement[i].className = slideElement[i].className.replace(
          "animate-slide",
          "animated-slide"
        );
      }
    }
  };

  return {
    init: init,
  };
};

animateHTML().init();
