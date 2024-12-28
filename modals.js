//Script for the modal
// Get the modal
var locationInfoModal = document.getElementById("locationInfoModal");
var gojiPropertiesModal = document.getElementById("gojiPropertiesModal");
/*var redBerryModal = document.getElementById("redBerryModal");
var yellowBerryModal = document.getElementById("yellowBerryModal");
var blackBerryModal = document.getElementById("blackBerryModal");*/

// Get the button that opens the modal
var locationInfoBtn = document.getElementById("locationInfoBtn");
var gojiPropertiesBtn = document.getElementById("gojiPropertiesBtn");
/*var redBerryBtn = document.getElementById("redBerryBtn");
var yellowBerryBtn = document.getElementById("yellowBerryBtn");
var blackBerryBtn = document.getElementById("blackBerryBtn");*/

// Get the <span> element that closes the modal
var closebtns = document.getElementsByName("close-btn");

// When the user clicks the button, open the modal 
locationInfoBtn.onclick = function() {
  locationInfoModal.style.display = "flex";
  document.body.style.overflow = "hidden"; 
  document.body.style.height = "100%"; 
}

gojiPropertiesBtn.onclick = function() {
  gojiPropertiesModal.style.display = "flex";
  document.body.style.overflow = "hidden"; 
  document.body.style.height = "100%"; 
}

// When the user clicks on <span> (x), close the modal
closebtns.forEach(
  closeBtn => closeBtn.onclick = function() {
    if (locationInfoModal.style.display === "flex") {
      locationInfoModal.style.display = "none";
    } else if (gojiPropertiesModal.style.display === "flex") {
      gojiPropertiesModal.style.display = "none";
    }
    
    document.body.style.overflow = "auto"; 
    document.body.style.height = "auto";
  }
)


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == locationInfoModal) {
    locationInfoModal.style.display = "none";
    document.body.style.overflow = "auto"; 
    document.body.style.height = "auto";
  } else if (event.target == gojiPropertiesModal) {
    gojiPropertiesModal.style.display = "none";
    document.body.style.overflow = "auto"; 
    document.body.style.height = "auto";
  }
}