window.addEventListener('load', function () {

    getLocation();
})
var x = document.getElementById("demo");



function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;

}


document.getElementById("sos").addEventListener("click", dososfunction);


function dososfunction() {
    Swal.fire({
        title: '<strong>Emergency <u>Help</u></strong>',
        icon: 'info',
        html: '<p>Select one Emergency Service</p>' + '<button onclick="changeit1()" class="emergency1">Police</button> <br> <button onclick="changeit2()" class="emergency2">Fire</button> <br> <button onclick="changeit3()" class="emergency3">Ambulance</button>',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: '<i class="fas fa-check-circle"></i> Confirm!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText: '<i class="fas fa-ban"></i> Cancel',
        cancelButtonAriaLabel: 'Thumbs down'
    }).then((result) => {
        let timerInterval
        Swal.fire({
            title: 'Sending Emergency Message',
            html: 'Your message is delivering in <b></b> milliseconds.',
            timer: 5000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                }, 10)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
            }
        })
    })
}

function changeit1() {
    document.querySelector(".emergency1").style.backgroundColor = "#F9FBDC";
    document.querySelector(".emergency1").style.color = "#000000";
}

function changeit2() {
    document.querySelector(".emergency2").style.backgroundColor = "#F62817";
}

function changeit3() {
    document.querySelector(".emergency3").style.backgroundColor = "#f3f3f3";
    document.querySelector(".emergency3").style.color = "#333";
}