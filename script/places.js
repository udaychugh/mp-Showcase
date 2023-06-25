window.onload = function () {
    document.getElementById("restro").style.background = "#F65429";
    var divBoxColorArray = ["rgba(56, 98, 248, 0.37)", "rgba(209, 248, 56, 0.37)", "rgba(83, 248, 56, 0.37)", "rgba(180, 248, 199, 0.37)"];


}

document.getElementById("restro").onclick = function () {

    document.getElementById("hotelshow").style.display = "none";
    document.getElementById("restoshow").style.display = "flex";
    document.getElementById("restro").style.background = "#F65429";
    document.getElementById("hotel").style.background = "none";
    
}

document.getElementById("hotel").onclick = function () {

    document.getElementById("restoshow").style.display = "none";
    document.getElementById("hotelshow").style.display = "flex";
    document.getElementById("restro").style.background = "none";
    document.getElementById("hotel").style.background = "#F65429";
    
}


let starsContainer = document.querySelector('.stars');
starsContainer.style.color = "gray";

randomStarNumber = Math.ceil(Math.random() * 5);

// GET RANDOM STARS
starsContainer.querySelectorAll('.fas').forEach((el, i) => el.style.color = i <= randomStarNumber ? '#ffb703' : 'gray');


//geting div random color
