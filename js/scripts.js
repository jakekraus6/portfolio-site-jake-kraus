// Handle menu toggle for the hamburger menu
function menuToggle() {
  console.log("Hamburger menu clicked!");
  var x = document.getElementById('myNavtoggle');
  console.log(x.className);
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}

document.getElementById("lightbox").addEventListener("click", function(event) {
  // Prevent lightbox from closing when clicking inside the navigation menu or the hamburger icon
  if (event.target.closest(".navtoggle") || event.target.closest(".icon")) {
    event.stopPropagation();  // Prevent the event from propagating to the lightbox click listener
    return;  // Don't close the lightbox
  }

  // Close lightbox when clicking outside the image area
  if (event.target !== this) return; 
  closeLightbox(); 
});

// Lightbox swipe functionality (for touch devices)
let touchStartX = 0;
let touchEndX = 0;

const lightbox = document.getElementById("lightbox");

lightbox.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

lightbox.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

// Handle swipe logic
function handleSwipe() {
  if (touchStartX - touchEndX > 50) {
    nextImage(event); // Swipe left → Next
  } else if (touchEndX - touchStartX > 50) {
    prevImage(event); // Swipe right → Previous
  }
}

// Prevent lightbox click from interfering with the hamburger menu
document.getElementById("lightbox").addEventListener("click", function(event) {
  // Prevent lightbox from closing when clicking on the menu
  if (event.target.closest(".navtoggle")) {
    return; // Stop if the click is inside the navigation menu
  }
  
  // Only close the lightbox if clicking outside the image area
  if (event.target !== this) return; 
  closeLightbox(); 
});