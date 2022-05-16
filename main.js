// /*Setting top nav function*/ 
// function responsive_nav() {
//     var x = document.getElementById("MyTopnav");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "topnav";
      
//     }
//   }

function responsive_nav(){
    const topnav = document.getElementById("MyTopnav");
  
    topnav.classList.contains("responsive")
      ? topnav.classList.remove("responsive")
      : topnav.classList.add("responsive");
    }
  
  /* Settings sticky nav */
  window.onscroll = function() {
    topnav()
  };
  
  var navbar = document.getElementById("MyTopnav");
  var sticky = navbar.offsetTop;
  
  function topnav() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
      
    } else {
      navbar.classList.remove("sticky");
    }
  }