let myNav = document.getElementById("tendina");

window.onscroll = function () {
    "use strict";
    if (document.body.scrollTop >= 380 || document.documentElement.scrollTop >= 380) {
        myNav.classList.add("scroll");
    } else {
        myNav.classList.remove("scroll");
    }
};