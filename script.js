let phrases = [
  {
    text: "отправить другу смешную гифку",
    image: "https://code.s3.yandex.net/web-code/procrastinate/1.gif",
  },
  {
    text: "посмотреть скидки на авиабилеты",
    image: "https://code.s3.yandex.net/web-code/procrastinate/2.png",
  },
  {
    text: "разобраться, о чём поют рэперы",
    image: "https://code.s3.yandex.net/web-code/procrastinate/3.png",
  },
  {
    text: "Arzamas",
    image: "https://code.s3.yandex.net/web-code/procrastinate/4.png",
  },
  {
    text: "расставить книги на полке по цвету",
    image: "https://code.s3.yandex.net/web-code/procrastinate/5.png",
  },
  {
    text: "читать про зарплаты в Сан-Франциско",
    image: "https://code.s3.yandex.net/web-code/procrastinate/6.png",
  },
  {
    text: "прочитать новости и ужаснуться в комментариях",
    image: "https://code.s3.yandex.net/web-code/procrastinate/7.png",
  },
  {
    text: "попасть в поток грустных песен и вспомнить все ошибки молодости",
    image: "https://code.s3.yandex.net/web-code/procrastinate/8.png",
  },
  {
    text: "посмотреть трейлер сериала и заодно первый сезон",
    image: "https://code.s3.yandex.net/web-code/procrastinate/9.png",
  },
  {
    text: "проверить непрочитанное в Telegram-каналах",
    image: "https://code.s3.yandex.net/web-code/procrastinate/10.png",
  },

  {
    text: "Посмотреть новое видео на YouTube",
    image: "https://code.s3.yandex.net/web-code/procrastinate/1.png",
  },
  {
    text: "Поиграть в мобильную игру",
    image: "https://code.s3.yandex.net/web-code/procrastinate/2.png",
  },
  {
    text: "Послушать подкаст",
    image: "https://code.s3.yandex.net/web-code/procrastinate/3.png",
  },
  {
    text: "Просмотреть ленту в Instagram",
    image: "https://code.s3.yandex.net/web-code/procrastinate/4.png",
  },
  {
    text: "Провести время на Reddit",
    image: "https://code.s3.yandex.net/web-code/procrastinate/5.png",
  },
  {
    text: "Посмотреть мемы",
    image: "https://code.s3.yandex.net/web-code/procrastinate/6.png",
  },
  {
    text: "Прочитать новости",
    image: "https://code.s3.yandex.net/web-code/procrastinate/7.png",
  },
  {
    text: "Изучить новые рецепты",
    image: "https://code.s3.yandex.net/web-code/procrastinate/8.png",
  },
  {
    text: "Посмотреть старые фотографии",
    image: "https://code.s3.yandex.net/web-code/procrastinate/9.png",
  },
  {
    text: "Проверить непрочитанное в Telegram-каналах",
    image: "https://code.s3.yandex.net/web-code/procrastinate/10.png",
  },
  {
    text: "Посмотреть трейлеры новых фильмов",
    image: "https://code.s3.yandex.net/web-code/procrastinate/11.png",
  },
  {
    text: "Послушать новый альбом",
    image: "https://code.s3.yandex.net/web-code/procrastinate/12.png",
  },
  {
    text: "Провести время на Pinterest",
    image: "https://code.s3.yandex.net/web-code/procrastinate/13.png",
  },
  {
    text: "Поискать интересные статьи",
    image: "https://code.s3.yandex.net/web-code/procrastinate/14.png",
  },
  {
    text: "Составить список задач",
    image: "https://code.s3.yandex.net/web-code/procrastinate/15.png",
  },
  {
    text: "Изучить новое хобби",
    image: "https://code.s3.yandex.net/web-code/procrastinate/16.png",
  },
  {
    text: "Поиграть в старые видеоигры",
    image: "https://code.s3.yandex.net/web-code/procrastinate/17.png",
  },
  {
    text: "Провести время на форумах",
    image: "https://code.s3.yandex.net/web-code/procrastinate/18.png",
  },
  {
    text: "Почитать блоги",
    image: "https://code.s3.yandex.net/web-code/procrastinate/19.png",
  },
  {
    text: "Посмотреть документальные фильмы",
    image: "https://code.s3.yandex.net/web-code/procrastinate/20.png",
  },
  {
    text: "Пообщаться с друзьями онлайн",
    image: "https://code.s3.yandex.net/web-code/procrastinate/21.png",
  },
  {
    text: "Провести время в онлайн-магазинах",
    image: "https://code.s3.yandex.net/web-code/procrastinate/22.png",
  },
  {
    text: "Посмотреть старинные документальные фильмы",
    image: "https://code.s3.yandex.net/web-code/procrastinate/23.png",
  },
  {
    text: "Послушать аудиокнигу",
    image: "https://code.s3.yandex.net/web-code/procrastinate/24.png",
  },
  {
    text: "Изучить методы личной эффективности",
    image: "https://code.s3.yandex.net/web-code/procrastinate/25.png",
  },
  {
    text: "Поиграть в настольные игры онлайн",
    image: "https://code.s3.yandex.net/web-code/procrastinate/26.png",
  },
  {
    text: "Посмотреть старинные телешоу",
    image: "https://code.s3.yandex.net/web-code/procrastinate/27.png",
  },
  {
    text: "Посмотреть обучающие видео по дизайну",
    image: "https://code.s3.yandex.net/web-code/procrastinate/28.png",
  },
  {
    text: "Найти интересные книги для чтения",
    image: "https://code.s3.yandex.net/web-code/procrastinate/29.png",
  },
  {
    text: "Посмотреть кулинарные шоу",
    image: "https://code.s3.yandex.net/web-code/procrastinate/30.png",
  },
  {
    text: "Провести время на платформах для саморазвития",
    image: "https://code.s3.yandex.net/web-code/procrastinate/31.png",
  },
  {
    text: "Проверить обновления на LinkedIn",
    image: "https://code.s3.yandex.net/web-code/procrastinate/32.png",
  },
  {
    text: "Послушать новый подкаст",
    image: "https://code.s3.yandex.net/web-code/procrastinate/33.png",
  },
  {
    text: "Посмотреть комедийные шоу",
    image: "https://code.s3.yandex.net/web-code/procrastinate/34.png",
  },
  {
    text: "Изучить новые увлечения",
    image: "https://code.s3.yandex.net/web-code/procrastinate/35.png",
  },
  {
    text: "Провести время на платформах для изучения языков",
    image: "https://code.s3.yandex.net/web-code/procrastinate/36.png",
  },
  {
    text: "Посмотреть обзоры техники",
    image: "https://code.s3.yandex.net/web-code/procrastinate/37.png",
  },
  {
    text: "Почитать о новых технологиях",
    image: "https://code.s3.yandex.net/web-code/procrastinate/38.png",
  },
  {
    text: "Изучить биографии известных личностей",
    image: "https://code.s3.yandex.net/web-code/procrastinate/39.png",
  },
  {
    text: "Посмотреть старые фильмы",
    image: "https://code.s3.yandex.net/web-code/procrastinate/40.png",
  },
  {
    text: "Посмотреть истории успеха",
    image: "https://code.s3.yandex.net/web-code/procrastinate/41.png",
  },
  {
    text: "Изучить новые культурные тренды",
    image: "https://code.s3.yandex.net/web-code/procrastinate/42.png",
  },
  {
    text: "Провести время на платформах для творчества",
    image: "https://code.s3.yandex.net/web-code/procrastinate/43.png",
  },
  {
    text: "Проверить новые видео на Twitch",
    image: "https://code.s3.yandex.net/web-code/procrastinate/44.png",
  },
  {
    text: "Посмотреть трейлеры игр",
    image: "https://code.s3.yandex.net/web-code/procrastinate/45.png",
  },
  {
    text: "Изучить новые методы медитации",
    image: "https://code.s3.yandex.net/web-code/procrastinate/46.png",
  },
  {
    text: "Посмотреть старинные рекламные ролики",
    image: "https://code.s3.yandex.net/web-code/procrastinate/47.png",
  },
  {
    text: "Провести время на сайтах для самопознания",
    image: "https://code.s3.yandex.net/web-code/procrastinate/48.png",
  },
  {
    text: "Посмотреть видео о моде",
    image: "https://code.s3.yandex.net/web-code/procrastinate/49.png",
  },
  {
    text: "Составить план на будущее",
    image: "https://code.s3.yandex.net/web-code/procrastinate/50.png",
  },
  {
    text: "Изучить работу известных дизайнеров",
    image: "https://code.s3.yandex.net/web-code/procrastinate/51.png",
  },
  {
    text: "Провести время на сайтах с кулинарными рецептами",
    image: "https://code.s3.yandex.net/web-code/procrastinate/52.png",
  },
  {
    text: "Посмотреть интервью с экспертами",
    image: "https://code.s3.yandex.net/web-code/procrastinate/53.png",
  },
  {
    text: "Послушать интервью с известными личностями",
    image: "https://code.s3.yandex.net/web-code/procrastinate/54.png",
  },
  {
    text: "Посмотреть видеоблоги о личном развитии",
    image: "https://code.s3.yandex.net/web-code/procrastinate/55.png",
  },
  {
    text: "Посмотреть старинные документальные фильмы",
    image: "https://code.s3.yandex.net/web-code/procrastinate/56.png",
  },
  {
    text: "Посмотреть комедийные клипы",
    image: "https://code.s3.yandex.net/web-code/procrastinate/57.png",
  },
  {
    text: "Провести время на платформах для чтения",
    image: "https://code.s3.yandex.net/web-code/procrastinate/58.png",
  },
  {
    text: "Изучить биографии успешных предпринимателей",
    image: "https://code.s3.yandex.net/web-code/procrastinate/59.png",
  },
  {
    text: "Посмотреть видеоблоги о путешествиях",
    image: "https://code.s3.yandex.net/web-code/procrastinate/60.png",
  },
  {
    text: "Провести время на платформах для изучения истории",
    image: "https://code.s3.yandex.net/web-code/procrastinate/61.png",
  },
  {
    text: "Изучить новые методы обучения",
    image: "https://code.s3.yandex.net/web-code/procrastinate/62.png",
  },
  {
    text: "Посмотреть старинные телепередачи",
    image: "https://code.s3.yandex.net/web-code/procrastinate/63.png",
  },
  {
    text: "Посмотреть популярные музыкальные клипы",
    image: "https://code.s3.yandex.net/web-code/procrastinate/64.png",
  },
  {
    text: "Изучить новейшие тренды в искусстве",
    image: "https://code.s3.yandex.net/web-code/procrastinate/65.png",
  },
  {
    text: "Посмотреть вебинары по интересным темам",
    image: "https://code.s3.yandex.net/web-code/procrastinate/66.png",
  },
  {
    text: "Посмотреть видеоуроки по искусству",
    image: "https://code.s3.yandex.net/web-code/procrastinate/67.png",
  },
  {
    text: "Провести время на сайтах о психологии",
    image: "https://code.s3.yandex.net/web-code/procrastinate/68.png",
  },
  {
    text: "Послушать музыку разных жанров",
    image: "https://code.s3.yandex.net/web-code/procrastinate/69.png",
  },
  {
    text: "Провести время на платформах для изучения искусств",
    image: "https://code.s3.yandex.net/web-code/procrastinate/70.png",
  },
  {
    text: "Посмотреть популярные тренды в моде",
    image: "https://code.s3.yandex.net/web-code/procrastinate/71.png",
  },
  {
    text: "Читать статьи о науке",
    image: "https://code.s3.yandex.net/web-code/procrastinate/72.png",
  },
  {
    text: "Посмотреть видеообзоры на книги",
    image: "https://code.s3.yandex.net/web-code/procrastinate/73.png",
  },
  {
    text: "Послушать аудиогиды по музеям",
    image: "https://code.s3.yandex.net/web-code/procrastinate/74.png",
  },
  {
    text: "Поиграть в мозговые тренажеры",
    image: "https://code.s3.yandex.net/web-code/procrastinate/75.png",
  },
  {
    text: "Изучить новые тренды в психологии",
    image: "https://code.s3.yandex.net/web-code/procrastinate/76.png",
  },
  {
    text: "Посмотреть старинные шоу",
    image: "https://code.s3.yandex.net/web-code/procrastinate/77.png",
  },
  {
    text: "Изучить новую технику рисования",
    image: "https://code.s3.yandex.net/web-code/procrastinate/78.png",
  },
  {
    text: "Посмотреть видеообзоры на старую технику",
    image: "https://code.s3.yandex.net/web-code/procrastinate/79.png",
  },
  {
    text: "Посмотреть обзор модных коллекций",
    image: "https://code.s3.yandex.net/web-code/procrastinate/80.png",
  },
  {
    text: "Провести время на сайтах для изучения кулинарии",
    image: "https://code.s3.yandex.net/web-code/procrastinate/81.png",
  },
  {
    text: "Посмотреть старые документальные фильмы о природе",
    image: "https://code.s3.yandex.net/web-code/procrastinate/82.png",
  },
  {
    text: "Изучить биографии известных художников",
    image: "https://code.s3.yandex.net/web-code/procrastinate/83.png",
  },
  {
    text: "Посмотреть документальные фильмы о путешествиях",
    image: "https://code.s3.yandex.net/web-code/procrastinate/84.png",
  },
  {
    text: "Изучить новые культурные тренды",
    image: "https://code.s3.yandex.net/web-code/procrastinate/85.png",
  },
  {
    text: "Посмотреть интервью с успешными бизнесменами",
    image: "https://code.s3.yandex.net/web-code/procrastinate/86.png",
  },
  {
    text: "Посмотреть видеоклипы о спорте",
    image: "https://code.s3.yandex.net/web-code/procrastinate/87.png",
  },
  {
    text: "Изучить новые методы расслабления",
    image: "https://code.s3.yandex.net/web-code/procrastinate/88.png",
  },
  {
    text: "Провести время на сайтах для личностного роста",
    image: "https://code.s3.yandex.net/web-code/procrastinate/89.png",
  },
  {
    text: "Посмотреть старинные интервью",
    image: "https://code.s3.yandex.net/web-code/procrastinate/90.png",
  },
  {
    text: "Изучить новые тренды в технологии",
    image: "https://code.s3.yandex.net/web-code/procrastinate/91.png",
  },
  {
    text: "Посмотреть старинные музыкальные клипы",
    image: "https://code.s3.yandex.net/web-code/procrastinate/92.png",
  },
  {
    text: "Посмотреть видео о личной эффективности",
    image: "https://code.s3.yandex.net/web-code/procrastinate/93.png",
  },
  {
    text: "Изучить работы современных архитекторов",
    image: "https://code.s3.yandex.net/web-code/procrastinate/94.png",
  },
  {
    text: "Посмотреть обзор новых гаджетов",
    image: "https://code.s3.yandex.net/web-code/procrastinate/95.png",
  },
  {
    text: "Посмотреть видео о современных трендах в искусстве",
    image: "https://code.s3.yandex.net/web-code/procrastinate/96.png",
  },
  {
    text: "Провести время на сайтах с историческими фактами",
    image: "https://code.s3.yandex.net/web-code/procrastinate/97.png",
  },
  {
    text: "Послушать аудиокниги о бизнесе",
    image: "https://code.s3.yandex.net/web-code/procrastinate/98.png",
  },
  {
    text: "Посмотреть документальные фильмы о науке",
    image: "https://code.s3.yandex.net/web-code/procrastinate/99.png",
  },
  {
    text: "Посмотреть видеоклипы о личностном развитии",
    image: "https://code.s3.yandex.net/web-code/procrastinate/100.png",
  },
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector(".button");
let phrase = document.querySelector(".phrase");
let advice = document.querySelector(".advice");
let image = document.querySelector(".image");

button.addEventListener("click", function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, "textContent", randomElement.text);
  smoothly(image, "src", randomElement.image);

  if (randomElement.text.length > 40) {
    advice.style.fontSize = "33px";
  } else {
    advice.style.fontSize = "42px";
  }
});
for (let i = 0; i < 3; i++) {
  smoothly(phrase, "textContent", phrases[i].text);
  smoothly(image, "src", phrases[i].image);
}
