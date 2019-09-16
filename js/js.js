
//Her tilføjer vi noget parallakse scrolling til vores elementer på siden
window.addEventListener('scroll', function(e) {
        const target = document.querySelectorAll('.scroll');

          var index = 0, length = target.length;
          for (index; index < length; index++) {


            if (target[index].getBoundingClientRect().top >= 0 || target[index].getBoundingClientRect().bottom < window.innerHeight) {

              var firstTop = target[index].getBoundingClientRect().top;
              var winScrollTop = window.pageYOffset;
              var shiftDistance = (firstTop - winScrollTop)*-0.5-1;

              target[index].style.transform = 'translate3d(0px, '+shiftDistance+'px, 0px)';
          }
        }
    });


 // -------------- Her laver vi en section med 3 billeder af elever der kommer med en udtalelse, der fungerer som Play/puase knapper.-----------

var list = ["url('images/pic1.jpg')", "url('images/pic2.jpg')", "url('images/pic3.jpg')"];

var elever = [document.getElementById("elev1"), document.getElementById("elev2"), document.getElementById("elev3")];

for(var n = 0; n < list.length; n++){
  console.log(n)
  elever[n].style.backgroundImage = list[n];
};




let i = 1;

let elev1 = document.getElementById("elev1");
let lyd1 = document.getElementById("lyd1");

let elev2 = document.getElementById("elev2");
let lyd2 = document.getElementById("lyd2");

let elev3 = document.getElementById("elev3");
let lyd3 = document.getElementById("lyd3");


elev1.addEventListener("click", player1);
elev2.addEventListener("click", player2);
elev3.addEventListener("click", player3);


function player1(){
  if(i == 1){
    lyd1.play(); // Start lyd
    elev1.style.height = "300px";
    elev1.style.width = "300px";

    i = 2;
  }
  else if(i == 2){
  lyd1.pause(); // Pause Lyd
  lyd1.currentTime = 0; // Start lyd forfra
  elev1.style.height = "200px";
  elev1.style.width = "200px";


  i = 1;
}
};

function player2(){
  if(i == 1){
    lyd2.play(); // Start lyd
    elev2.style.height = "300px";
    elev2.style.width = "300px";

    i = 2;
  }
  else if(i == 2){
  lyd2.pause(); // Pause Lyd
  lyd2.currentTime = 0; // Start lyd forfra
  elev2.style.height = "200px";
  elev2.style.width = "200px";

  i = 1;
}
};

function player3(){
  if(i == 1){
    lyd3.play(); // Start lyd
    elev3.style.height = "300px";
    elev3.style.width = "300px";

    i = 2;
  }
  else if(i == 2){
  lyd3.pause(); // Pause Lyd
  lyd3.currentTime = 0; // Start lyd forfra
  elev3.style.height = "200px";
  elev3.style.width = "200px";

  i = 1;
}
};

// VIDEO

function elFllVsbl(el) {
  return (el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom < window.innerHeight);
}

window.addEventListener("scroll", function() { // detect scroll event

  var myVideo = document.getElementById("myVideo");
  var video = document.getElementById("video");
  console.log("Er div vidoen synlig? " + elFllVsbl(video)); // test

// Start og stop Video
  if (elFllVsbl(video)) {
    if (!(myVideo.curentTime > 0)) {
      myVideo.play();
    }
  } else {
    myVideo.pause();
  }
})

// this function will check whether a tag is visible
