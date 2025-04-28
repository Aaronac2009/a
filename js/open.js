let menu = document.getElementById("menu");
let show = document.getElementById("show");
let menuShowed = false;
menu.addEventListener("click", function() {
    if (menuShowed == false) {
        show.style.display = "grid";
        menuShowed = true
    }
    else {
        show.style.display = "none";
        menuShowed = false
    }
    }
);