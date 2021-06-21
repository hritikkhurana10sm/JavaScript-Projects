function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

var vw = window.innerWidth;
var vh = window.innerHeight;

  var div = document.getElementById('obj');

  div.addEventListener('mouseover' , function func(event){
      
       console.log("mouse hovering");

       var h = getRandomInt(parseInt(vh - div.offsetHeight));
       var w = getRandomInt(parseInt(vw - div.offsetWidth));
         
        div.style.top = h + "px";
        div.style.left = w + "px";
  });