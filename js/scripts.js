
//
// Scripts
// 

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("mainNav").style.top = "0";
  } else {
    document.getElementById("mainNav").style.top = "-110px";
  }
  prevScrollpos = currentScrollPos;
}

function openCity(evt, companyName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  
  
  // Get all elements with class="experience-tab-content" and hide them
  tabcontent = document.getElementsByClassName("experience-tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  // Get all elements with class="experience-tab-button" and remove the class "active"
  tablinks = document.getElementsByClassName("experience-tab-button");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  if (companyName == "") {
    document.getElementById("linedanceAI").style.display = "block";
  evt.currentTarget.className += " active";
  }
  
  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(companyName).style.display = "block";
  evt.currentTarget.className += " active";
}