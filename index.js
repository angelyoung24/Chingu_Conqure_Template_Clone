window.addEventListener('scroll', function (e) {
  let scrolled = window.pageYOffset;
  const background = document.querySelector('.parallax');
  parallax.style.top = - (scrolled * 0.2) + 'px';
});
