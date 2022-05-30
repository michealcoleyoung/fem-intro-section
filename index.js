function menuToggle() {
    var image = document.getElementById('menu');
    if (image.src.match("images/icon-close-menu.svg")) {
        image.src = "images/icon-menu.svg";
        document.getElementById('sidebar-active').style.display = "none";
    }
    else {
        image.src = "images/icon-close-menu.svg";
        document.getElementById('sidebar-active').style.display = "block";
    }
}

function featuresToggle() {
    var image = document.getElementById('features');
    if (image.src.match("images/icon-arrow-up.svg")) {
        image.src = "images/icon-arrow-down.svg";
        document.getElementById('features-sub').style.display = "none";
    }
    else {
        image.src = "images/icon-arrow-up.svg";
        document.getElementById('features-sub').style.display = "block";
    }
}

function companyToggle() {
    var image = document.getElementById('company');
    if (image.src.match("images/icon-arrow-up.svg")) {
        image.src = "images/icon-arrow-down.svg";
        document.getElementById('company-sub').style.display = "none";
    }
    else {
        image.src = "images/icon-arrow-up.svg";
        document.getElementById('company-sub').style.display = "block";
    }
}