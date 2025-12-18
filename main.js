const MESSAGE = `
De parte del equipo de Sistemas,

queremos desearos una Feliz Navidad
y agradeceros el esfuerzo, la paciencia
y el trabajo en equipo durante todo el año.

Que estas fiestas traigan descanso,
alegría y un gran comienzo para el año que viene.
`;

const SYSTEM_PHRASES = [
    "No funciona",
    "Ya lo tienes tío",
    "Es que no abre",
    "De repente ha dejado de ir",
    "¿Puedes venir un segundo?",
    "No me imprime las etiquetas",
    "Ya lo tienes tío",
    "No sé, es muy raro",
    "Arreglame la secuencia de los bultos",
    "¿Has probado a reiniciar?",
    "Ya lo tienes tío",
    "No me sale el informe",
    "¿Por qué va tan lento?",
];

const POSITIONS = [
    { top: "15%", left: "10%" },
    { top: "15%", right: "10%" },
    { bottom: "20%", left: "12%" },
    { bottom: "20%", right: "12%" },
    { top: "50%", left: "5%" }
];

let index = 0;
let phraseIndex = 0;

function startExperience() {
    document.querySelector(".start-screen").style.display = "none";
    document.getElementById("content").classList.add("show");
    document.getElementById("music").play();

    typeText();
    startParticles();
    setTimeout(startSystemPhrases, 5000);
    setTimeout(showFunButton, 12000);
}

function typeText() {
    const el = document.getElementById("message");
    if (index < MESSAGE.length) {
        el.textContent += MESSAGE.charAt(index++);
        setTimeout(typeText, 40);
    }
}

/* ❄ + ✨ */
function startParticles() {
    createParticles("❄", 40, 6, 12);
    createParticles("✨", 15, 8, 14);
    createParticles("🎄", 8, 12, 18);
    createParticles("🎁", 6, 14, 20);
    createParticles("⭐", 10, 10, 16);
    createParticles("💻", 5, 16, 22);
}
function createParticles(symbol, amount, min, max) {
    for (let i = 0; i < amount; i++) {
        const p = document.createElement("div");
        p.className = "particle";
        p.textContent = symbol;
        p.style.left = Math.random() * 100 + "vw";
        p.style.fontSize = (14 + Math.random() * 18) + "px";
        p.style.animationDuration = min + Math.random() * (max - min) + "s";
        document.body.appendChild(p);
    }
}

function startSystemPhrases() {
    const box = document.getElementById("systemPhrase");

    function showNext() {
        if (phraseIndex >= SYSTEM_PHRASES.length) return;

        const pos = POSITIONS[phraseIndex % POSITIONS.length];
        box.style.top = "";
        box.style.left = "";
        box.style.right = "";
        box.style.bottom = "";

        Object.assign(box.style, pos);

        box.textContent = SYSTEM_PHRASES[phraseIndex];
        box.classList.add("show");

        setTimeout(() => {
            box.classList.remove("show");
            phraseIndex++;
            setTimeout(showNext, 600);
        }, 1800);
    }

    showNext();
}

function showFunButton() {
    document.getElementById("funButton").style.display = "block";
}

function showSurprise() {
    document.getElementById("surpriseBox").style.transform =
        "translate(-50%,-50%) scale(1)";
}

function closeSurprise() {
    document.getElementById("surpriseBox").style.transform =
        "translate(-50%,-50%) scale(0)";
}
