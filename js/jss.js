
let elev1 = document.getElementById("elev1");
let lyd1 = document.getElementById("lyd1");


elev1.addEventListener("click", test);


function test(){
  if (!(lyd1.curentTime > 0)) {
    lyd1.play(); // play audio
  }
  else {
  lyd1.pause();
  }
};
