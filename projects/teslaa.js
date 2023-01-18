
let header = document.getElementById("header");
let ms = document.getElementById("models");
let m3 = document.getElementById("model3");
let mx = document.getElementById("modelx");
let my = document.getElementById("modely");
let model = document.getElementById("model");
let firsth2 = document.getElementById("firsth2");
let firstp = document.getElementById("firstp");
let secondh2 = document.getElementById("secondh2");
let secondp = document.getElementById("secondp");
let thirdh2 = document.getElementById("thirdh2");
let thirdp = document.getElementById("thirdp");



ms.onclick = () => {
    header.style.backgroundImage = "url(./images/image-1.png)";
    model.innerHTML = "Model S";
    firsth2.innerHTML = "1.9 s";
    firstp.innerHTML = "60 mph";
    secondh2.innerHTML = "200 mph";
    secondp.innerHTML = "Top Speed";
    thirdh2.innerHTML = "396 mi";
    thirdp.innerHTML = "Max Range";
}
m3.onclick = () => {
    header.style.backgroundImage = "url(./images/image-2.png)";
    model.innerHTML = "Model 3";
    firsth2.innerHTML = "1.5 3";
    firstp.innerHTML = "75 mph";
    secondh2.innerHTML = "500 mph";
    secondp.innerHTML = "Top Speed";
    thirdh2.innerHTML = "406 mi";
    thirdp.innerHTML = "Max Range";
}
mx.onclick = () => {
    header.style.backgroundImage = "url(./images/image-3.png)";
    model.innerHTML = "Model X";
    firsth2.innerHTML = "2.0 x";
    firstp.innerHTML = "100 mph";
    secondh2.innerHTML = "20 mph";
    secondp.innerHTML = "Top Speed";
    thirdh2.innerHTML = "236 mi";
    thirdp.innerHTML = "Max Range";
}
my.onclick = () => {
    header.style.backgroundImage = "url(./images/image-4.png)";
    model.innerHTML = "Model Y";
    firsth2.innerHTML = "3.2 y";
    firstp.innerHTML = "90 mph";
    secondh2.innerHTML = "190 mph";
    secondp.innerHTML = "Top Speed";
    thirdh2.innerHTML = "758 mi";
    thirdp.innerHTML = "Max Range";
}

