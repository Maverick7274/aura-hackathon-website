
// Play Pause Button

const video = document.getElementById("video");
const playBtn = document.getElementById('play-pause-button');

function playPause() {
  if (video.paused) {
    video.play();
    playBtn.innerHTML = "<i class=\"fa-solid fa-pause\"></i>";
  } else {
    video.pause();
    playBtn.innerHTML = "<i class=\"fa-solid fa-play\"></i>";
  }
}

// FAQ Accordion

const faqItemHeaders = document.querySelectorAll(".faq-item-header")

faqItemHeaders.forEach(faqItemHeaders =>{
  faqItemHeaders.addEventListener("click", event =>{
    faqItemHeaders.classList.toggle("active")
    const faqItemBody = faqItemHeaders.nextElementSibling
    if(faqItemHeaders.classList.contains('active'))
    {
      faqItemBody.style.maxHeight = faqItemBody.scrollHeight + "px"
    }
    else
    {
      faqItemBody.style.maxHeight = 0
    }
  })
})


// On Scroll Effect

// scrollFunction();

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {

//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    
//   } else {
//     document.getElementById("navigation").style.background = "transparent";
//   }
// }

// Sidebar

const sidebar = document.getElementById("sidebar");

function showSidebar() {
  sidebar.classList.remove("sidebar-hide");
  sidebar.classList.add("sidebar-show");
  document.body.style.overflowY = "hidden"
}


function hideSidebar() {
  sidebar.classList.remove("sidebar-show");
  sidebar.classList.add("sidebar-hide");
  document.body.style.overflowY = "scroll"
}

