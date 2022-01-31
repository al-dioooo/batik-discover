const main = document.getElementById("app");

let sx = 0, // For scroll positions
  sy = 0;
let dx = sx, // For container positions
  dy = sy;

// Bind event
window.addEventListener("scroll", easeScroll);
window.addEventListener("resize", resizeWindow);

function easeScroll() {
  sx = window.pageXOffset;
  sy = window.pageYOffset;
}

if (
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/webOS/i) ||
  navigator.userAgent.match(/iPhone/i) ||
  navigator.userAgent.match(/iPad/i) ||
  navigator.userAgent.match(/iPod/i) ||
  navigator.userAgent.match(/BlackBerry/i) ||
  navigator.userAgent.match(/Windows Phone/i)
) {

  console.log("Mobile Device");

} else {
  body.style.height = main.clientHeight + "px";

  main.style.position = "fixed";
  main.style.top = 0;
  main.style.left = 0;
  window.requestAnimationFrame(render);
}

function resizeWindow() {
  body.style.height = main.clientHeight + "px";
}

function render() {
  // Calculate container position by linear interpolation method
  dy = li(dy, sy, 0.1);
  dx = li(dx, sx, 0.1);

  dx = Math.floor(dx * 100) / 100;
  dy = Math.floor(dy * 100) / 100;

  main.style.transform = `translate3d(-${dx}px, -${dy}px, 0px)`;

  window.requestAnimationFrame(render);
}

function li(a, b, n) {
  return (1 - n) * a + n * b;
}
