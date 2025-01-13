// Инициализация Telegram Web App
const tg = window.Telegram.WebApp;

// Получение параметров темы
const themeParams = tg.themeParams;

// Применение цветов темы
document.body.style.backgroundColor = themeParams.bg_color || '#ffffff';
document.body.style.color = themeParams.text_color || '#000000';

const appElement = document.querySelector('.app');
appElement.style.backgroundColor = themeParams.secondary_bg_color || '#f5f5f5';
appElement.style.color = themeParams.text_color || '#000000';

const buttonElement = document.getElementById('action-btn');
buttonElement.style.backgroundColor = themeParams.button_color || '#0088cc';
buttonElement.style.color = themeParams.button_text_color || '#ffffff';

// Дополнительно: развернуть приложение
tg.expand();
