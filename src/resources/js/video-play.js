var vid = document.getElementById("myVideo");
var button = document.getElementById("myButton");

button.onclick = function playVid() {
    vid.play();
    button.style.display = "none";
    vid.style.filter = "none";
}

vid.onclick = function() {
    button.style.display = "none";
    vid.style.filter = "none";
}