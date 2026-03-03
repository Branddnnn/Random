const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

let size = 1;

const esMovil = window.innerWidth < 600;

function lanzarFuegos() {
    const duration = 5000;
    const animationEnd = Date.now() + duration;

    const intervalo = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(intervalo);
        }

        confetti({
            particleCount: esMovil ? 25 : 50,
            spread: 100,
            startVelocity: 40,
            origin: {
                x: Math.random(),
                y: Math.random() - 0.2
            }
        });
    }, 300);
}



noBtn.addEventListener("click", () => {
    size -= 0.2;
    noBtn.style.transform = `scale(${size})`;
    yesBtn.style.transform = `scale(${1 + (1 - size)})`;
    if (size <= 0.2) {
        noBtn.style.display = "none";
    }
});

const audio = document.getElementById("audio");

yesBtn.addEventListener("click", () => {
    message.textContent = "Sabía que dirías que sí 😌✨";
    audio.play();
    lanzarFuegos();
});

function lanzarFuegos() {
    const duration = 10000; // duración en milisegundos (5 segundos)
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}
