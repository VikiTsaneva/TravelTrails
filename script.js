emailjs.init('1HnRmk_dhUEdS49Eq');

// Функция за скролване до съответната секция
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Мобилно меню
const toggleButton = document.querySelector('.navbar-toggle');
const navSections = document.querySelector('.nav-sections');

// Добавяне на събитие за натискане на бутон ☰ за отваряне на менюто
toggleButton.addEventListener('click', () => {
    // Добавяне или премахване на клас "show" за показване/скриване на менюто
    navSections.classList.toggle('show');
});

// Функция за затваряне на менюто при натискане на линк
const navLinks = document.querySelectorAll('.nav-sections a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            // Скриваме менюто след натискане на линк в мобилния изглед
            navSections.classList.remove('show');
        }
    });
});

document.querySelectorAll('.nav-buttons button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('active');
        setTimeout(() => button.classList.remove('active'), 300);
    });
});

const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

document.querySelectorAll('section').forEach(section => {
    section.style.transition = 'all 0.6s ease-out';
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
});

// Добавяне на клас за анимация, когато секцията е видима
window.addEventListener('scroll', () => {
    const section = document.getElementById('about-us');
    const rect = section.getBoundingClientRect();
    
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        section.classList.add('visible'); // Добавя клас, когато секцията е видима
    }
});

// Добавяне на събитие за скролиране до секцията "За нас"
document.querySelector('.nav-sections a[href="#about"]').addEventListener('click', (e) => {
    e.preventDefault(); // Предотвратява стандартното поведение на линка
    scrollToSection('about-us'); // Скролваме до секцията с ID 'about-us'
});

function openRouteDetails() {
    const button = document.querySelector('button[onclick="openRouteDetails();"]');
    button.classList.add('active');
    
    setTimeout(() => {
        button.classList.remove('active');
        window.location.href = 'readyroutes.html'; // Или window.open(), ако искате нов раздел
    }, 300); // Изчакайте за анимацията преди пренасочването
}

document.getElementById('region-Gabrovo').addEventListener('click', function () {
    window.open('gabrovotour.html', '_blank');
});

const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const form = this;
        emailjs.sendForm('service_p50p4vx', 'template_wysw9kl', form) // Заменете с вашите Service ID и Template ID
            .then(function(response) {
                alert("Съобщението е изпратено успешно!");
                form.reset();
            }, function(error) {
                alert("Възникна грешка. Моля, опитайте отново.");
                console.error('Грешка:', error);
            });
    });
}

// Функция за проверка дали потребителят е влязъл
function isLoggedIn() {
    return localStorage.getItem('loggedIn') === 'true';
}

// Функция за актуализиране на потребителския интерфейс
function updateUI() {
    const savedRoutesLink = document.getElementById('savedRoutesLink');
    const savedRoutesButton = document.getElementById('savedRoutesButton');
    const profileLink = document.getElementById('profileLink');
    const logoutLink = document.getElementById('logoutLink');

    if (isLoggedIn()) {
        const username = localStorage.getItem('username');
        savedRoutesLink.style.display = 'block';
        savedRoutesButton.style.display = 'inline-block';
        profileLink.style.display = 'none'; // Скрива бутона за профил
        logoutLink.style.display = 'block'; // Показва бутона за изход
    } else {
        savedRoutesLink.style.display = 'none';
        savedRoutesButton.style.display = 'none';
        profileLink.style.display = 'block'; // Показва бутона за профил
        profileLink.href = '/login'; // Връща линка към логин страницата
        logoutLink.style.display = 'none'; // Скрива бутона за изход
    }
}

// Функция за влизане в профила
function login(username) {
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('username', username);
    updateUI();
}

// Функция за излизане от профила
function logout() {
    localStorage.setItem('loggedIn', 'false');
    localStorage.removeItem('username');
    updateUI();
    window.location.href = '/'; // Пренасочване към началната страница
}

// Проверка при зареждане на страницата
document.addEventListener('DOMContentLoaded', () => {
    updateUI();
});

// Бутон за изход
document.getElementById('logoutLink').addEventListener('click', (e) => {
    e.preventDefault();
    logout();
});