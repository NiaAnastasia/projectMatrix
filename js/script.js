function randomText() {
    const text = "❤️ANASTASIA$";
    return text[Math.floor(Math.random() * text.length)];
}

function rain() {
    let e = document.createElement('div');
    e.classList.add('drop');
    document.body.appendChild(e); // Append to body

    let left = Math.floor(Math.random() * window.innerWidth); // Full width of the viewport
    let size = Math.random() * 1.5;
    let duration = Math.random() * 2 + 1; // Fall duration

    e.innerText = randomText();
    e.style.left = left + 'px';
    e.style.fontSize = 0.5 + size + 'em';
    e.style.animationDuration = 1 + duration + 's';

    setTimeout(function () {
        document.body.removeChild(e); // Remove from body after falling
    }, 2000);
}

// Create rain at intervals
setInterval(function () {
    rain();
}, 20);
