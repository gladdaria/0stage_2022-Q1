const i18Obj = {
    'en': {
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that they always stay with you',
      'skill-title-3': 'Rotouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'send-message': 'Send message'
    },
    'ru': {
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
      'hire': 'Пригласить',
      'skill-title-1': 'Фотография',
      'skill-text-1': 'Высококачественные фото в студии и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'price-description-1-span-1': 'Одна локация',
      'price-description-1-span-2': '120 цветных фото',
      'price-description-1-span-3': '12 отретушированных фото',
      'price-description-1-span-4': 'Готовность через 2-3 недели',
      'price-description-1-span-5': 'Макияж, визаж',
      'price-description-2-span-1': 'Одна-две локации',
      'price-description-2-span-2': '200 цветных фото',
      'price-description-2-span-3': '20 отретушированных фото',
      'price-description-2-span-4': 'Готовность через 1-2 недели',
      'price-description-2-span-5': 'Макияж, визаж',
      'price-description-3-span-1': 'Три локации и больше',
      'price-description-3-span-2': '300 цветных фото',
      'price-description-3-span-3': '50 отретушированных фото',
      'price-description-3-span-4': 'Готовность через 1 неделю',
      'price-description-3-span-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contact-me': 'Свяжитесь со мной',
      'send-message': 'Отправить'
    }
  }
// open/close burger menu

const burgerItem = document.querySelector('.burger');
const menu = document.querySelector('.main-nav');

burgerItem.addEventListener('click', () => {
    burgerItem.classList.toggle('open');
    menu.classList.toggle('main-nav_open'); 
})

function closeMenu(event) {
    if ((event.target.classList.contains('nav-link'))) {
        menu.classList.remove('main-nav_open');
        burgerItem.classList.remove('open');
    }
}

menu.addEventListener('click', closeMenu);  

// change images

const portfolioBtns = document.querySelectorAll('.portfolio-btn');
const portfolioImages = document.querySelectorAll('.portfolio-img');
const seasons = ['winter', 'spring', 'summer', 'autumn'];

function changeClassActive(event) {
    portfolioBtns.forEach(portfolioBtn => portfolioBtn.classList.remove('portfolio-btn__active'));
    event.target.classList.add('portfolio-btn__active');
}

function changeImage(event) {
    if (event.target.classList.contains('portfolio-btn')) {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`);
    }
}

portfolioBtns.forEach((portfolioBtn) => portfolioBtn.addEventListener('click', changeImage));
portfolioBtns.forEach((portfolioBtn) => portfolioBtn.addEventListener('click', changeClassActive));

function preloadImages() {
    for(let i = 1; i <= 6; i++) {
      const img = new Image();
      seasons.forEach((value) => {
        img.src = `./assets/img/${value}/${i}.jpg`;
      })
    }
  }

  preloadImages();

 // translate

 const vocabulary = document.querySelectorAll('[data-i18]');
 const languages = document.querySelectorAll('.language');
 const langRu = document.querySelector('.rus');
 const langEn = document.querySelector('.eng');

 let lang =  localStorage.getItem('lang') || 'en';
 
 languages.forEach((language) => language.addEventListener('click', changeLanguage));
 
 function changeLanguage() {
     langRu.classList.toggle('current__language');
     langEn.classList.toggle('current__language');
     if (langRu.classList.contains('current__language')) {
         lang = 'ru';
     }
     if (langEn.classList.contains('current__language')) {
         lang = 'en';
     }
     getTranslated(lang);
 }
 
 function getTranslated(lang) {
     vocabulary.forEach((el) => {
         const key = el.getAttribute('data-i18');
         el.textContent = i18Obj[lang][key];
       });
     if(lang === 'ru') {
         document.getElementsByName('email')[0].placeholder = 'Эл. почта';
         document.getElementsByName('phone')[0].placeholder = 'Телефон';
         document.getElementsByName('message')[0].placeholder = 'Сообщение';
     }  else {
         document.getElementsByName('email')[0].placeholder = 'E-mail';
         document.getElementsByName('phone')[0].placeholder = 'Phone';
         document.getElementsByName('message')[0].placeholder = 'Message';
     }
 }

 // change theme
 
 const page = document.querySelector('.page');
 const themeButton = document.querySelector('.theme-button');

 let theme = localStorage.getItem('theme') || 'dark';
 
 themeButton.addEventListener('click', () => {
     page.classList.toggle('light-theme');
     page.classList.toggle('dark-theme');
     if (page.classList.contains('light-theme')) {
         theme = 'light';
     }
     if (page.classList.contains('dark-theme')) {
         theme = 'dark';
     }
 });

 // Дополнительный функционал: данные хранятся в local storage
 
 function setLocalStorage() {
    localStorage.setItem('theme', theme);
    localStorage.setItem('lang', lang);
}

window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if (localStorage.getItem('theme') === 'light') {
        page.classList.add('light-theme');
        page.classList.remove('dark-theme');
    }
    if (localStorage.getItem('lang') === 'ru') {
        langRu.classList.add('current__language');
        langEn.classList.remove('current__language');
        getTranslated(lang);
    }
}

window.addEventListener('load', getLocalStorage);

//buttons effect

 function bubblyEffect() {
    const buttons = document.querySelectorAll('.bubbly-button');
    buttons.forEach(bubblyBtn => {
        bubblyBtn.addEventListener('mouseover', (event) => {
            event.target.classList.toggle('animate');
        })
  })
}

 bubblyEffect();

console.log(`1. Смена изображений в секции portfolio +25 
2. Перевод страницы на два языка +25
3. Переключение светлой и тёмной темы +25
4. Дополнительный функционал: выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы +5 
5. Дополнительный функционал: сложные эффекты для кнопок при наведении и/или клике +5

Итоговая оценка за задание 75 баллов`);