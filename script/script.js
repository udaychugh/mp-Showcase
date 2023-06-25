var jQueryScript = document.createElement('script');
jQueryScript.setAttribute('src', 'https://cdn.jsdelivr.net/npm/sweetalert2@11.3.6/dist/sweetalert2.all.min.js');
document.head.appendChild(jQueryScript);


function start() {
    location.replace("first-form.html");
}

function next1() {
    location.replace("second-form.html");
}

function next2() {
    window.location.replace("journey.html");
}


function showWorks() {
    location.replace("works.html");
}

function help() {
    location.replace("help.html");
}

function checkValue() {
    var valueofpersons = document.getElementById("no_of_people").value;
    if (valueofpersons <= 0) {
        alert("wrong Input");
    }
}

document.getElementById("returnBtn").onclick = function () {
    location.replace("journey.html");
}

function gotomaps() {

    var city1 = document.getElementById("location").value;
    var city2 = document.getElementById("destination").value;

    if (city1 == "" || city2 == "") {
        alert("Enter Both City Name First")
    } else {
        location.replace("map.html");
        localStorage.setItem("city1", city1);
        localStorage.setItem("city2", city2);
    }


}
