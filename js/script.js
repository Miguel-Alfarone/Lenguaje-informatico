document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const html = document.documentElement;

    //Revisar si hay un tema guardado
    const savedTheme = localStorage.getItem('theme') || 'dark';
    aplicarTema(savedTheme);

    //aplicar tema si clickeo
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isLight = body.classList.contains('light-mode');
            const newTheme = isLight ? 'dark' : 'light';

            aplicarTema(newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    function aplicarTema(theme) {
        // Sincroniza tus variables CSS (body.light-mode) y los componentes de Bootstrap (data-bs-theme)
        html.setAttribute('data-bs-theme', theme);

        // Seleccionar todos los botones con clase outline-light / outline-dark (como el toggle y el de Inscripciones)
        const outlineButtons = document.querySelectorAll('.btn-outline-light, .btn-outline-dark');

        if (theme === 'light') {
            body.classList.add('light-mode');
            if (themeToggleBtn) themeToggleBtn.textContent = '🌙';

            outlineButtons.forEach(btn => {
                btn.classList.remove('btn-outline-light');
                btn.classList.add('btn-outline-dark');
            });
        } else {
            body.classList.remove('light-mode');
            if (themeToggleBtn) themeToggleBtn.textContent = '☀️';

            outlineButtons.forEach(btn => {
                btn.classList.remove('btn-outline-dark');
                btn.classList.add('btn-outline-light');
            });
        }
    }
});