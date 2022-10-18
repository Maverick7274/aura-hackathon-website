
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

scrollFunction();

window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    

    logo.innerHTML = `<img id="brand" src="./assets/FusionTechClub.svg" alt="Logo">
    <span id="brand-text">Fusion Tech Club</span>`

    logo.classList.remove("animate-logo-reverse");
    logo.classList.add("animate-logo");
    
  } else {
    document.getElementById("navigation").style.background = "transparent";

    logo.innerHTML = `<img id="brand" src="./assets/UkernaaLogo.svg" alt="Logo">
    <img id="brand-text" src="./assets/ukernaa_text_logo.svg" alt="Logo">`

    logo.classList.remove("animate-logo");
    logo.classList.add("animate-logo-reverse");
  }
}
