// // Text for typewriter animation
// const text = "Welcome to My Portfolio!"; // Edit this text

// // Typewriter effect
// let i = 0;
// function typeWriter() {
//     if (i < text.length) {
//         document.getElementById('typewriter-text').innerHTML += text.charAt(i);
//         i++;
//         setTimeout(typeWriter, 100); // Adjust the typing speed (in milliseconds)
//     }
// }

// // Start the typewriter animation when the page loads
// window.onload = typeWriter;


var typed = new Typed(".auto-type", {
    strings: ["a Student.", "a Developer.", "an AI Enthusiast."],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
})


function toggleMenu() {
    const MENU = document.querySelector('.menu-links');
    const ICON = document.querySelector('.ham-icon');
    MENU.classList.toggle("open")
    ICON.classList.toggle("open")
}

