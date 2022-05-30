

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