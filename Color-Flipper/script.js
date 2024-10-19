const body = document.getElementsByTagName("body")[0];
body.style.backgroundColor = "red";

function setColor(color) {
    body.style.backgroundColor = color;
}

function randomColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const colors = `rgb(${red}, ${green}, ${blue})`;
    setColor(colors);
}

