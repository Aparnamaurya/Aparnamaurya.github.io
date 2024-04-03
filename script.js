window.onscroll = function() {makeSticky()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function makeSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

@media (max-width: 600px) {
    .profile-pic {
        float: none; /* Prevents the image from floating on small devices */
        display: block; /* Ensures the image and text are stacked */
        margin: 0 auto; /* Centers the image above the text */
    }
}
