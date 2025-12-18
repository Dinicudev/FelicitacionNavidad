const MESSAGE = `
De parte del equipo de Sistemas,

queremos desearos una Feliz Navidad
y agradeceros el esfuerzo, la paciencia
y el trabajo en equipo durante todo el año.

Que estas fiestas traigan descanso,
alegría y un gran comienzo para el año que viene.
`;

const TYPE_SPEED = 40;
let index = 0;

function startExperience() {
    document.querySelector(".start-screen").style.display = "none";
    document.getElementById("content").classList.add("show");
    document.getElementById("music").play();

    typeText();
    startParticles();
    showFunButtonLater();
}

function typeText() {
    const el = document.getElementById("message");
    if (index < MESSAGE.length) {
        el.textContent += MESSAGE.charAt(index++);
        setTimeout(typeText, TYPE_SPEED);
    }
}

function startParticles() {
    createParticles("❄", 40, 6, 12, 0.9);
    createParticles("✨", 15, 8, 14, 0.8);
    createParticles("🎄", 8, 12, 18, 0.7);
    createParticles("🎁", 6, 14, 20, 0.8);
    createParticles("⭐", 10, 10, 16, 0.9);
    createParticles("💻", 5, 16, 22, 0.6);
}

function createParticles(symbol, amount, minSpeed, maxSpeed, opacity) {
    for (let i = 0; i < amount; i++) {
        const p = document.createElement("div");
        p.className = "particle";
        p.textContent = symbol;
        p.style.left = Math.random() * 100 + "vw";
        p.style.fontSize = (14 + Math.random() * 18) + "px";
        p.style.opacity = opacity;
        p.style.animationDuration =
            minSpeed + Math.random() * (maxSpeed - minSpeed) + "s";
        document.body.appendChild(p);
    }
}

function showFunButtonLater() {
    setTimeout(() => {
        document.getElementById("funButton").style.display = "block";
    }, 8000);
}

function showSurprise() {
    document.getElementById("surpriseBox").style.transform =
        "translate(-50%, -50%) scale(1)";
}

function closeSurprise() {
    document.getElementById("surpriseBox").style.transform =
        "translate(-50%, -50%) scale(0)";
}
