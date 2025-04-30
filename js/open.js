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

let event_click = document.querySelectorAll(".propertie__button");
let properties = document.getElementById("properties")
let img_container = document.getElementById("img__container")
event_click.forEach(function(button) {
    button.addEventListener("click", function() {
        let img_id = "img" + button.id;
        let imgs = document.getElementsByClassName(img_id);
        properties.style.display = "none";
        img_container.style.display = "grid";
        Array.from(imgs).forEach(function(img) {
            img.style.display = "grid";
        })
    })
})