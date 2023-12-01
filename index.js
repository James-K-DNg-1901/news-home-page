const nav_bar = document.getElementById("my-nav");
const nav_element = document.getElementsByTagName("a");
const open_btn = document.getElementById("open-btn");
const close_btn = document. getElementById("close-btn");
const faded_layer = document.getElementById("faded-layer");

window.onresize = function change_lauch(pageWidth)
{
    var pageWidth  = document.documentElement.scrollWidth;
    if (pageWidth <= 900) {
        nav_bar.classList.remove("selection-box");
        nav_bar.classList.add("hidden-selection-box");
        nav_bar.classList.add("hide_nav");
        open_btn.hidden = false;
        for (var i = 0; i < 5; i++) {
            nav_element[i].classList.add("hidden-selection-element");
            nav_element[i].classList.remove("selection-element");
        }
        open_btn.addEventListener ("click", function open_nav () {
            nav_bar.classList.add("show_nav");
            nav_bar.classList.remove("hide_nav");
            close_btn.hidden = false;
            faded_layer.hidden = false;
        });
        close_btn.addEventListener("click", function close_nav () {
            nav_bar.classList.remove("show_nav");
            nav_bar.classList.add("hide_nav");
            close_btn.hidden = true;
            faded_layer.hidden = true;
        })
        
    } else {
        nav_bar.classList.add("selection-box");
        nav_bar.classList.remove("hidden-selection-box");
        nav_bar.classList.remove("hide_nav");
        open_btn.hidden = true;
        for (var i = 0; i < 5; i++) {
            nav_element[i].classList.add("selection-element");
            nav_element[i].classList.remove("hidden-selection-element");
        }   
    } 
};

