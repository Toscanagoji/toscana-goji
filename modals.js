//Script for the modal
// Get the modal
var locationInfoModal = document.getElementById("locationInfoModal");
var gojiPropertiesModal = document.getElementById("gojiPropertiesModal");
var redBerryModal = document.getElementById("redBerryModal");
var yellowBerryModal = document.getElementById("yellowBerryModal");
var blackBerryModal = document.getElementById("blackBerryModal");

// Get the button that opens the modal
var locationInfoBtns = document.getElementsByName("locationInfoBtn");
var gojiPropertiesBtn = document.getElementById("gojiPropertiesBtn");
var redBerryBtn = document.getElementById("redBerryBtn");
var yellowBerryBtn = document.getElementById("yellowBerryBtn");
var blackBerryBtn = document.getElementById("blackBerryBtn");

// Get the <span> element that closes the modal
var closebtns = document.getElementsByName("close-btn");

// When the user clicks the button, open the modal 
locationInfoBtns.forEach(
  locationInfoBtn => locationInfoBtn.onclick = function() {
    locationInfoModal.style.display = "flex";
    document.body.style.overflow = "hidden"; 
    document.body.style.height = "100%"; 
  }
)

gojiPropertiesBtn.onclick = function() {
  gojiPropertiesModal.style.display = "flex";
  document.body.style.overflow = "hidden"; 
  document.body.style.height = "100%"; 
}

redBerryBtn.onclick = function() {
  redBerryModal.style.display = "flex";
  document.body.style.overflow = "hidden"; 
  document.body.style.height = "100%"; 
}

yellowBerryBtn.onclick = function() {
  yellowBerryModal.style.display = "flex";
  document.body.style.overflow = "hidden"; 
  document.body.style.height = "100%"; 
}

blackBerryBtn.onclick = function() {
  blackBerryModal.style.display = "flex";
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
    } else if (redBerryModal.style.display === "flex") {
      redBerryModal.style.display = "none";
    } else if (yellowBerryModal.style.display === "flex") {
      yellowBerryModal.style.display = "none";
    } else if (blackBerryModal.style.display === "flex") {
      blackBerryModal.style.display = "none";
    }
    
    document.body.style.overflow = "auto"; 
    document.body.style.height = "auto"; 
  }
)


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == locationInfoModal) {
    locationInfoModal.style.display = "none";
  }
  if (event.target == gojiPropertiesModal) {
    gojiPropertiesModal.style.display = "none";
  }
  if (event.target == redBerryModal) {
    redBerryModal.style.display = "none";
  }
  if (event.target == yellowBerryModal) {
    yellowBerryModal.style.display = "none";
  }
  if (event.target == blackBerryModal) {
    blackBerryModal.style.display = "none";
  }
  
  document.body.style.overflow = "auto"; 
  document.body.style.height = "auto"; 
}