
const btn = document.getElementById('theme-toggle');
let tema = localStorage.getItem('theme') || 'dark';

aplicar(tema);

btn.addEventListener('click', () => {
    tema = tema === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', tema);
    aplicar(tema);
});

function aplicar(modo) {
    document.body.classList.toggle('light-mode', modo === 'light');
    document.documentElement.setAttribute('data-bs-theme', modo);
    btn.textContent = modo === 'light' ? '🌙' : '☀️';
}







//FUERA DEL TP ayuda de la IA

// Botón "REPROBADO" escapista
    const btnReprobado = document.getElementById('reprobado');
    if (btnReprobado) {
        let offsetX = 0;
        let offsetY = 0;
        const maxX = 140; // Máximo que se mueve a izquierda/derecha (px)
        const maxY = 90;  // Máximo que se mueve arriba/abajo (px)

        btnReprobado.style.transition = 'transform 0.18s ease';

        const huir = (e) => {
            e.preventDefault();

            // Elige un desplazamiento nuevo distinto de la posición actual
            let nuevoX;
            let nuevoY;
            do {
                nuevoX = Math.floor(Math.random() * (maxX * 2 + 1)) - maxX;
                nuevoY = Math.floor(Math.random() * (maxY * 2 + 1)) - maxY;
            } while (Math.abs(nuevoX - offsetX) < 35 && Math.abs(nuevoY - offsetY) < 25);

            offsetX = nuevoX;
            offsetY = nuevoY;
            btnReprobado.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        };

        btnReprobado.addEventListener('mouseenter', huir);
        btnReprobado.addEventListener('touchstart', huir, { passive: false });
    }