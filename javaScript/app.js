
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


// Time
setInterval(() => {
    
  let date = new Date(),
  hour = date.getHours(),
  minute = date.getMinutes(),
  second = date.getSeconds()

  if (hour < 10) {
      hour = '0' + hour
  }

  if (minute < 10) {
      minute = '0' + minute
  }

  if (second < 10) {
      second = '0' + second
  }


  document.querySelector('.hour-num').innerText = hour
  document.querySelector('.min-num').innerText = minute
  document.querySelector('.sec-num').innerText = second

  let d;
  if (hour < 12) {
      d = 'AM'
  } else {
      d = 'PM'
  }

  document.querySelector('.am-pm').innerText = d

}, 1000);

// Countdown

const countDays = document.getElementById('days')
const countHours = document.getElementById('hours')
const countMinute = document.getElementById('minutes')
const countSeconds = document.getElementById('seconds')

const eventTime = new Date('December 12, 2022 09:00:00').getTime()

// update CountDown

function updateCountDown() {
  const currentTime = new Date()
  const diff = eventTime - currentTime

  const days = Math.floor(diff / 1000 / 60 / 60 / 24)
  const hours = Math.floor(diff / 1000 / 60 / 60) % 24
  const minutes = Math.floor(diff / 1000 / 60) % 60
  const seconds = Math.floor(diff / 1000) % 60

  countDays.innerHTML = days
  countHours.innerHTML = hours
  countMinute.innerHTML = minutes
  countSeconds.innerHTML = seconds




  // console.log(days)
  // console.log(hours)
  // console.log(minutes)
  // console.log(seconds)
}

setInterval(updateCountDown, 1000)