const images = [
    "1.jpg", "2.jpg", "3.jpg", "4.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bg = document.createElement("img");

bg.src = `img/${chosenImage}`;

document.body.appendChild(bg);