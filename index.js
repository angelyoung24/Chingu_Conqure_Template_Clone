window.addEventListener("scroll", function(e) {
  const target = this.document.querySelectorAll(".parallax");

  var scrolled = window.pageYOffset;
  var rate = scrolled * -2;
  target.style.transform = 'translate3d(0px, '+rate+'px, 0px)';
});
