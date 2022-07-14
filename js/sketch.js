
//dropdown-city-change

$("body").on("click", "#city1", function(event){
  event.preventDefault();
  $(".title-maastricht").text("MAASTRICHT");
  $(".book-a-guide").text("Book a guide in Maastricht");
  $(".maastricht-guided-tour").text("MAASTRICHT");
});

$("body").on("click", "#city2", function(event){
  event.preventDefault();
  $(".title-maastricht").text("AACHEN");
  $(".book-a-guide").text("Book a guide in Aachen");
  $(".maastricht-guided-tour").text("AACHEN");
});

$("body").on("click", "#city3", function(event){
  event.preventDefault();
  $(".title-maastricht").text("LONDON");
  $(".book-a-guide").text("Book a guide in London");
  $(".maastricht-guided-tour").text("LONDON");
});

$("body").on("click", "#city4", function(event){
  event.preventDefault();
  $(".title-maastricht").text("LISSABON");
  $(".book-a-guide").text("Book a guide in Lissabon");
  $(".maastricht-guided-tour").text("LISSABON");
});

$("body").on("click", "#city5", function(event){
  event.preventDefault();
  $(".title-maastricht").text("SCHIMMERT");
  $(".book-a-guide").text("Book a guide in Schimmert");
  $(".maastricht-guided-tour").text("SCHIMMERT");
});

$("body").on("click", "#city6", function(event){
  event.preventDefault();
  $(".title-maastricht").text("ROTJEKNOR");
  $(".book-a-guide").text("Book a guide in RotjeKnor");
  $(".maastricht-guided-tour").text("ROTJEKNOR");
});

$("body").on("click", "#city7", function(event){
  event.preventDefault();
  $(".title-maastricht").text("DUBLIN");
  $(".book-a-guide").text("Book a guide in Dublin");
  $(".maastricht-guided-tour").text("DUBLIN");
});


// pop-up


const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);



// carousel

$('.carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  });

  // dropdowns

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function myFunction2() {
    document.getElementById("myDropdown-2").classList.toggle("show-2");
}

// datepicker

$( function() {
  $( "#datepicker" ).datepicker({
    showOn: "button",
    buttonImage: "images/calendar.svg",  
    buttonImageOnly: true,
  });
} );

// timepicker

Vue.component('timepicker', window.VueTimepickr.default);

new Vue({
  el: '#app',
  data: ({
    time: '13:20'
  })
});



// video player

let currentVideo = 1;
let video = document.getElementById('video');
let source = document.getElementById('source');

$('.button-1').click(function() {
    if (currentVideo != 1) {
        currentVideo = 1;
        source.setAttribute('src', 'images/videos/luchtballon.mp4');
        video.load();
    }
    if (currentVideo == 1) {
        if (video.paused == true) {
            video.play();
            document.getElementById('play-video1').setAttribute("src", "images/play-button.svg");
            // de rest krijgt play icon
            document.getElementById('play-video2').setAttribute("src", "images/play-button.svg");
            document.getElementById('play-video3').setAttribute("src", "images/play-button.svg");
            document.getElementById('play-video4').setAttribute("src", "images/play-button.svg");
        } else {
            video.pause();
            document.getElementById('play-video1').setAttribute("src", "images/play-button.svg");
        }
    }
});

$('.button-2').click(function() {
    if (currentVideo != 2) {
        currentVideo = 2;
        source.setAttribute('src', 'images/videos/mountains.mp4');
        video.load();
    }
    if (currentVideo == 2) {
        if (video.paused == true) {
            video.play();
            document.getElementById('playvideo2').setAttribute("src", "images/pause-button.png");
            // de rest krijgt play icon
            document.getElementById('play-video1').setAttribute("src", "images/play-button.svg");
            document.getElementById('play-video3').setAttribute("src", "images/play-button.svg");
            document.getElementById('play-video4').setAttribute("src", "images/play-button.svg");
        } else {
            video.pause();
            document.getElementById('play-video2').setAttribute("src", "images/play-button.svg");
        }
    }
});

$('.button-3').click(function() {
    if (currentVideo != 3) {
        currentVideo = 3;
        source.setAttribute('src', 'images/videos/motor.mp4');
        video.load();
    }
    if (currentVideo == 3) {
        if (video.paused == true) {
            video.play();
            document.getElementById('play-video3').setAttribute("src", "images/pause-button.png");
            // de rest krijgt play icon
            document.getElementById('play-video1').setAttribute("src", "images/play-button.svg");
            document.getElementById('play-video2').setAttribute("src", "images/play-button.svg");
            document.getElementById('play-video4').setAttribute("src", "images/play-button.svg");
        } else {
            video.pause();
            document.getElementById('play-video3').setAttribute("src", "images/play-button.svg");
        }
    }
});

$('.button-4').click(function() {
    if (currentVideo != 4) {
        currentVideo = 4;
        source.setAttribute('src', 'images/videos/airplane.mp4');
        video.load();
    }
    if (currentVideo == 4) {
        if (video.paused == true) {
            video.play();
            document.getElementById('play-video4').setAttribute("src", "images/pause-button.png");
            // de rest krijgt play icon
            document.getElementById('play-video1').setAttribute("src", "images/play-button.svg");
            document.getElementById('play-video2').setAttribute("src", "images/play-button.svg");
            document.getElementById('play-video3').setAttribute("src", "images/play-button.svg");
        } else {
            video.pause();
            document.getElementById('play-video4').setAttribute("src", "images/play-button.svg");
        }
    }
});

$('#skipper').click(function() {
    event.preventDefault();
    video.currentTime += 10;
});











//video player

// let= theVideo = 1;
// let video = document.getElementById('video');
// let source = document.getElementById('source');


// //video-maas

// $('.button-1').click(function(){
//   if(theVideo != 1){
//     theVideo = 1;
//     source.setAttribute('src','..images/videos/luchtballon.mp4');
//     video.load();
//   }

//   if (theVideo == 1) {
//     if(video.paused == true){
//       video.play();
//       $("#vb1").attr("src",".images/play-button.svg");
//     }
//     else{
//       video.pause();
//       $("#vb1").attr("src",".images/play-button.svg");
//     }
//   }
// });

// //video aachen

// $('.button-2').click(function(){
//   if(theVideo  != 2){
//     theVideo = 2;
//     source.setAttribute('src','..images/videos/mountains.mp4');
//     video.load();
//   }

//   if (theVideo == 2) {
//     if(video.paused == true){
//       video.play();
//       $("#vb2").attr("src",".images/play-button.svg");
//     }
//     else{
//       video.pause();
//       $("#vb2").attr("src",".images/play-button.svg");
//     }
//   }
// });


// //video schimmert

// $('.button-3').click(function(){
//   if(theVideo  != 3){
//     theVideo = 3;
//     source.setAttribute('src','..images/videos/motor.mp4');
//     video.load();
//   }

//   if (theVideo == 3) {
//     if(video.paused == true){
//       video.play();
//       $("#vb3").attr("src",".images/play-button.svg");
//     }
//     else{
//       video.pause();
//       $("#vb3").attr("src",".images/play-button.svg");
//     }
//   }
// });

// //video new york

// $('.button-4').click(function(){
//   if(theVideo  != 4){
//     theVideo = 4;
//     source.setAttribute('src','..images/videos/airplane.mp4');
//     video.load();
//   }

//   if (theVideo == 4) {
//     if(video.paused == true){
//       video.play();
//       $("#vb4").attr("src",".images/play-button.svg");
//     }
//     else{
//       video.pause();
//       $("#vb4").attr("src",".images/play-button.svg");
//     }
//   }
// });
