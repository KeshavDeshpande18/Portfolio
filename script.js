
var typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer","Backend Developer","Data Base Management"],
  typeSpeed: 100,
  backSpeed:100,
  backDelay:1000,
  loop:true
});

let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px";

      function toggleMenu() {
        if (menuList.style.maxHeight == "0px") {
            menuList.style.maxHeight = "300px";
          

        } else {
            menuList.style.maxHeight = "0px";
        }
      }

  