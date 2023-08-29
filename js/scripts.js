
//
// Scripts
// 

const splash = document.querySelector(".splash-page-container");

document.addEventListener("DOMContentLoaded", (e)=>{
  setTimeout(()=>{
    splash.classList.add("display-none");
  }, 3700);
})

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
  
  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(companyName).style.display = "block";
  evt.currentTarget.className += " active";
}

const txHeight = 16;
const tx = document.getElementsByTagName("textarea");

for (let i = 0; i < tx.length; i++) {
  if (tx[i].value == '') {
    tx[i].setAttribute("style", "height:" + txHeight + "px;overflow-y:hidden;");
  } else {
    tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;padding:10px 10px 0px 10px");
  }
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput(e) {
  this.style.height = 0;
  this.style.height = (this.scrollHeight) + "px";
  
}

