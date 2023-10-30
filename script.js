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


const phrases = ["I'm a Student", "I'm a Developer"];

let currentPhrase = 0;
let isDeleting = false;
let i = 0;

function typeWriter() {
    const text = phrases[currentPhrase];
    const speed = isDeleting ? 50 : 100;

    if (!isDeleting && i <= text.length) {
        document.getElementById('typewriter-text').innerHTML = text.substring(0, i);
        i++;
        setTimeout(typeWriter, speed);
    } else if (isDeleting && i >= 0) {
        document.getElementById('typewriter-text').innerHTML = text.substring(0, i);
        i--;
        setTimeout(typeWriter, speed);
    } else {
        isDeleting = !isDeleting;
        if (isDeleting) {
            currentPhrase = (currentPhrase + 1) % phrases.length;
            i = text.length; // Set i to the length of the current phrase for erasing
        }
        setTimeout(typeWriter, 500);
    }
}

window.onload = typeWriter;
