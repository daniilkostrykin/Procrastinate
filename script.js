let phrases = [
  { text: "отправить другу смешную гифку", image: "https://code.s3.yandex.net/web-code/procrastinate/1.gif" },
  { text: "посмотреть скидки на авиабилеты", image: "https://code.s3.yandex.net/web-code/procrastinate/2.png" },
  { text: "разобраться, о чём поют рэперы", image: "https://code.s3.yandex.net/web-code/procrastinate/3.png" },
  { text: "Arzamas", image: "https://code.s3.yandex.net/web-code/procrastinate/4.png" },
  { text: "расставить книги на полке по цвету", image: "https://code.s3.yandex.net/web-code/procrastinate/5.png" },
  { text: "читать про зарплаты в Сан-Франциско", image: "https://code.s3.yandex.net/web-code/procrastinate/6.png" },
  { text: "прочитать новости и ужаснуться в комментариях", image: "https://code.s3.yandex.net/web-code/procrastinate/7.png" },
  { text: "попасть в поток грустных песен и вспомнить все ошибки молодости", image: "https://code.s3.yandex.net/web-code/procrastinate/8.png" },
  { text: "посмотреть трейлер сериала и заодно первый сезон", image: "https://code.s3.yandex.net/web-code/procrastinate/9.png" },
  { text: "проверить непрочитанное в Telegram-каналах", image: "https://code.s3.yandex.net/web-code/procrastinate/10.png" },
  { text: "посмотреть новое видео на youtube" },
  { text: "поиграть в мобильную игру" },
  { text: "послушать подкаст" },
  { text: "просмотреть ленту в instagram" },
  { text: "провести время на reddit" },
  { text: "посмотреть мемы" },
  { text: "прочитать новости" },
  { text: "изучить новые рецепты" },
  { text: "посмотреть старые фотографии" },
  { text: "проверить непрочитанное в telegram-каналах" },
  { text: "посмотреть трейлеры новых фильмов" },
  { text: "послушать новый альбом" },
  { text: "провести время на pinterest" },
  { text: "поискать интересные статьи" },
  { text: "составить список задач" },
  { text: "изучить новое хобби" },
  { text: "поиграть в старые видеоигры" },
  { text: "провести время на форумах" },
  { text: "почитать блоги" },
  { text: "посмотреть документальные фильмы" },
  { text: "пообщаться с друзьями онлайн" },
  { text: "провести время в онлайн-магазинах" },
  { text: "посмотреть старинные документальные фильмы" },
  { text: "послушать аудиокнигу" },
  { text: "изучить методы личной эффективности" },
  { text: "поиграть в настольные игры онлайн" },
  { text: "посмотреть старинные телешоу" },
  { text: "посмотреть обучающие видео по дизайну" },
  { text: "найти интересные книги для чтения" },
  { text: "посмотреть кулинарные шоу" },
  { text: "провести время на платформах для саморазвития" },
  { text: "проверить обновления на linkedin" },
  { text: "послушать новый подкаст" },
  { text: "посмотреть комедийные шоу" },
  { text: "изучить новые увлечения" },
  { text: "провести время на платформах для изучения языков" },
  { text: "посмотреть обзоры техники" },
  { text: "почитать о новых технологиях" },
  { text: "изучить биографии известных личностей" },
  { text: "посмотреть старые фильмы" },
  { text: "посмотреть истории успеха" },
  { text: "изучить новые культурные тренды" },
  { text: "провести время на платформах для творчества" },
  { text: "проверить новые видео на twitch" },
  { text: "посмотреть трейлеры игр" },
  { text: "изучить новые методы медитации" },
  { text: "посмотреть старинные рекламные ролики" },
  { text: "провести время на сайтах для самопознания" },
  { text: "посмотреть видео о моде" },
  { text: "составить план на будущее" },
  { text: "изучить работу известных дизайнеров" },
  { text: "провести время на сайтах с кулинарными рецептами" },
  { text: "посмотреть интервью с экспертами" },
  { text: "послушать интервью с известными личностями" },
  { text: "посмотреть видеоблоги о личном развитии" },
  { text: "посмотреть старинные документальные фильмы" },
  { text: "посмотреть комедийные клипы" },
  { text: "провести время на платформах для чтения" },
  { text: "изучить биографии успешных предпринимателей" },
  { text: "посмотреть видеоблоги о путешествиях" },
  { text: "провести время на платформах для изучения истории" },
  { text: "изучить новые методы обучения" },
  { text: "посмотреть старинные телепередачи" },
  { text: "посмотреть популярные музыкальные клипы" },
  { text: "изучить новейшие тренды в искусстве" },
  { text: "посмотреть вебинары по интересным темам" },
  { text: "посмотреть видеоуроки по искусству" },
  { text: "провести время на сайтах о психологии" },
  { text: "послушать музыку разных жанров" },
  { text: "провести время на платформах для изучения искусств" },
  { text: "посмотреть популярные тренды в моде" },
  { text: "читать статьи о науке" },
  { text: "посмотреть видеообзоры на книги" },
  { text: "послушать аудиогиды по музеям" },
  { text: "поиграть в мозговые тренажеры" },
  { text: "изучить новые тренды в психологии" },
  { text: "посмотреть старинные шоу" },
  { text: "изучить новую технику рисования" },
  { text: "посмотреть видеообзоры на старую технику" },
  { text: "посмотреть обзор модных коллекций" },
  { text: "провести время на сайтах для изучения кулинарии" },
  { text: "посмотреть старые документальные фильмы о природе" },
  { text: "изучить биографии известных художников" },
  { text: "посмотреть документальные фильмы о путешествиях" },
  { text: "изучить новые культурные тренды" },
  { text: "посмотреть интервью с успешными бизнесменами" },
  { text: "посмотреть видеоклипы о спорте" },
  { text: "изучить новые методы расслабления" },
  { text: "провести время на сайтах для личностного роста" },
  { text: "посмотреть старинные интервью" },
  { text: "изучить новые тренды в технологии" },
  { text: "посмотреть старинные музыкальные клипы" },
  { text: "посмотреть видео о личной эффективности" },
  { text: "изучить работы современных архитекторов" },
  { text: "посмотреть обзор новых гаджетов" },
  { text: "посмотреть видео о современных трендах в искусстве" },
  { text: "провести время на сайтах с историческими фактами" },
  { text: "послушать аудиокниги о бизнесе" },
  { text: "посмотреть документальные фильмы о науке" },
  { text: "посмотреть видеоклипы о личностном развитии" }
];

// Функция для перемешивания массива
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Перемешиваем массив
shuffleArray(phrases);

let button = document.querySelector(".button");
let phrase = document.querySelector(".phrase");
let advice = document.querySelector(".advice");
let image = document.querySelector(".image");

let currentIndex = 0;

button.addEventListener("click", function () {
  if (currentIndex >= phrases.length) {
    currentIndex = 0; // Возвращаемся к началу, если все подсказки использованы
    shuffleArray(phrases); // Перемешиваем снова
  }
  
  let randomElement = phrases[currentIndex];
  currentIndex++;
  
  smoothly(phrase, "textContent", randomElement.text);
  smoothly(image, "src", randomElement.image);
  image.onerror = function () {
    image.style.display = "none";
  };
  
  if (randomElement.text.length > 40) {
    advice.style.fontSize = "33px";
  } else {
    advice.style.fontSize = "42px";
  }
});

for (let i = 0; i < 3; i++) {
  smoothly(phrase, "textContent", phrases[i].text);
  smoothly(image, "src", phrases[i].image);
  image.onerror = function () {
    image.style.display = "none";
  };
}
