let video = document.getElementById('video')
video.play()
$(window).focus(function () {
 let videoContainer = document.querySelector('.video')
 video = document.getElementById('video')
 let newVideo = video.cloneNode(true)
 video.remove()
 videoContainer.appendChild(newVideo)
 newVideo.play()
});

if (navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/)) {
 let gif = document.createElement('div')
 gif.classList.add('gif')
 let videoContainer = document.querySelector('.video')
 video.remove()
 videoContainer.appendChild(gif)
}

$(".popup .close").on("click", function () {
 $(".popup").removeClass("active");
});

$(".popup").on("click", e => {
 if ($(e.target).hasClass("popup")) {
  $(".popup").removeClass("active");
 }
});

// window.addEventListener("scroll", () => {
//   let footerMobileOffsetTop = document.querySelector("footer").offsetTop;
//   let joinusOffsetTop = document.querySelector(".join-us").offsetTop;
//   let offsetTop = window.scrollY;
//   let windowHeight = window.innerHeight;
//   let joinusHeight = document.querySelector(".join-us").offsetHeight;
//   let footerHeight = document.querySelector("footer").offsetHeight;

//   if ((offsetTop + windowHeight >= footerMobileOffsetTop) && (isPopupClosed === false) && (window.innerWidth < 1080)) {
//     document.querySelector(".popup").classList.add("active");
//     isPopupClosed = true;
//   } else if ((offsetTop + windowHeight >= joinusOffsetTop) && (isPopupClosed === false) && (window.innerWidth >= 1080)) {
//     document.querySelector(".popup").classList.add("active");
//     isPopupClosed = true;
//   }
// })

function setCookie(name, value, days) {
 var expires = "";
 if (days) {
  var date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  expires = "; expires=" + date.toUTCString();
 }
 document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
 var nameEQ = name + "=";
 var ca = document.cookie.split(';');
 for (var i = 0; i < ca.length; i++) {
  var c = ca[i];
  while (c.charAt(0) == ' ') c = c.substring(1, c.length);
  if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
 }
 return null;
}

function eraseCookie(name) {
 document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

setTimeout(() => {
 if (!getCookie('popupWasShown')) {
  document.querySelector(".popup").classList.add("active");
  setCookie('popupWasShown', true, 1);
 }
}, 15000)