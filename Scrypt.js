
document.addEventListener('DOMContentLoaded', () => {
    const loginTrigger = document.getElementById('loginTrigger');
    const loginModal = document.getElementById('loginModal');
    const closeModalBtn = document.querySelector('.close-modal');
    const loginForm = document.getElementById('loginForm');

    // Функция открытия окна
    const openModal = () => {
        loginModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Запрещаем скролл фона
    };

    // Функция закрытия окна
    const closeModal = () => {
        loginModal.classList.remove('active');
        document.body.style.overflow = ''; // Возвращаем скролл
    };

    // 1. Открытие по клику на иконку
    loginTrigger.addEventListener('click', openModal);

    // 2. Закрытие по клику на крестик
    closeModalBtn.addEventListener('click', closeModal);

    // 3. Закрытие по клику ВНЕ формы (на затемненный фон)
    loginModal.addEventListener('click', (event) => {
        // Если клик был именно по оверлею (фону), а не по самой форме
        if (event.target === loginModal) {
            closeModal();
        }
    });

    // 4. Закрытие по нажатию клавиши Esc (хороший тон)
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && loginModal.classList.contains('active')) {
            closeModal();
        }
    });

    // 5. Обработка отправки формы (заглушка)
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Отменяем перезагрузку страницы
        alert('Форма отправлена! (Здесь будет логика авторизации)');
        closeModal();
        loginForm.reset(); // Очищаем поля
    });
});

 const themeToggleBtn = document.getElementById('theme-toggle');
        const themeIcon = themeToggleBtn.querySelector('.theme-icon');

        // Проверяем, сохранена ли тема в localStorage
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            document.body.classList.add('dark-theme');
            themeIcon.textContent = '☀️';
        }

        // Обработчик клика
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            
            if (document.body.classList.contains('dark-theme')) {
                localStorage.setItem('theme', 'dark');
                themeIcon.textContent = '☀️';
            } else {
                localStorage.setItem('theme', 'light');
                themeIcon.textContent = '🌙';
            }
        });