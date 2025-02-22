function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}
window.addEventListener('scroll', function () {
  const scrollThreshold = 200; // Change to the scroll position where you want the logo to change
  const logoText = document.getElementById('logoText');
  const logoImageLink = document.getElementById('logoImageLink');

  if (window.scrollY > scrollThreshold) {
    // Hide text logo, show image logo
    logoText.classList.add('hidden');
    logoImageLink.classList.add('visible');
  } else {
    // Revert to original state
    logoText.classList.remove('hidden');
    logoImageLink.classList.remove('visible');
  }
});