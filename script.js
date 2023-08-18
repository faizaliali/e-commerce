var swiper = new Swiper('.swiper', {
    slidesPerView: "auto",
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// -----------------------------------------------email------------------------------------------------
var signup = document.getElementById("sign");
signup.addEventListener("click", success);

function success() {
    alert("successfully submitted");
}
// ------------------------------------------details-------------------------------
var x = document.getElementById("add");
x.addEventListener("click", pata);

function pata() {
    x.innerHTML = "Address:Jairampur,Aurai,Bhadohi"
    x.style.color = "yellow";
}


var y = document.getElementById("phone");
y.addEventListener("click", call);

function call() {
    y.innerHTML = "Phone:999888811"
    y.style.color = "yellow";
}

var z = document.getElementById("hrs");
z.addEventListener("click", hour);


function hour() {
    z.innerHTML = "10:00-11:00"
    z.style.color = "yellow";
}
// ------------------------------mobile------------------------
var bar = document.getElementById("bar");
var nav = document.getElementById("navbar");
var close = document.getElementById("close");
close.addEventListener("click", removenav);
bar.addEventListener("click", navdisplay);

function navdisplay() {
    nav.classList.add("active");
}

function removenav() {
    nav.classList.remove("active");
}