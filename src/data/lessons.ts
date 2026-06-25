// Single source of truth for course order, navigation, and the landing index.
// Add a lesson = append one entry here + create src/pages/lessons/<slug>.astro.

export interface Lesson {
  slug: string;      // URL slug + .astro filename (without extension)
  num: number;       // lesson number shown in chrome
  pl: string;        // Polish title (lesson <h1>)
  cardTitle: string; // landing-card title (Ukrainian)
  navLabel: string;  // short label used in prev/next links
  sub: string;       // subtitle (lesson header + landing card)
  dur: string;       // duration pill
  footerNote: string;// editorial note in the lesson footer
}

export const lessons: Lesson[] = [
  {
    slug: '0001-core-apartment-vocabulary',
    num: 1,
    pl: 'Mieszkanie',
    cardTitle: 'Mieszkanie: ключова лексика',
    navLabel: 'Mieszkanie',
    sub: 'Слова, які ти почуєш і вимовиш при пошуку квартири',
    dur: '≈ 20 хв',
    footerNote: 'Є питання? Запитай свого вчителя в чаті — він пояснить будь-який момент.',
  },
  {
    slug: '0002-essential-questions',
    num: 2,
    pl: 'Pytania do właściciela',
    cardTitle: 'Питання орендарю',
    navLabel: 'Питання орендарю',
    sub: 'Як зателефонувати, дізнатись ціну й домовитись про огляд',
    dur: '≈ 25 хв',
    footerNote: 'Не зрозумів якусь фразу? Запитай свого вчителя в чаті — розберемо разом.',
  },
  {
    slug: '0003-numbers-prices-dates',
    num: 3,
    pl: 'Liczby, ceny i daty',
    cardTitle: 'Числа, ціни й дати',
    navLabel: 'Числа й ціни',
    sub: 'Зрозуміти ціну, комунальні й дату заселення на слух',
    dur: '≈ 30 хв',
    footerNote: 'Заплутався в числах? Напиши мені будь-яку ціну — розберемо її по цеглинках разом.',
  },
  {
    slug: '0004-dates-and-scheduling',
    num: 4,
    pl: 'Daty i terminy',
    cardTitle: 'Дати й домовленості',
    navLabel: 'Дати й домовленості',
    sub: 'З якого числа вільна, коли прийти на огляд, на котру домовитись',
    dur: '≈ 30 хв',
    footerNote: 'Хочеш відрепетирувати домовленість про огляд? Напиши мені — зіграємо діалог у чаті.',
  },
  {
    slug: '0005-understanding-landlords',
    num: 5,
    pl: 'Co mówi właściciel',
    cardTitle: 'Що каже орендодавець',
    navLabel: 'Що каже орендодавець',
    sub: 'Розуміти відповідь, навіть коли не ловиш кожне слово',
    dur: '≈ 30 хв',
    footerNote: 'Зустрів фразу, якої не зрозумів? Скопіюй її мені — розкладемо по якорях.',
  },
  {
    slug: '0006-your-needs-and-confusion',
    num: 6,
    pl: 'Moje potrzeby i „nie rozumiem”',
    cardTitle: 'Твої потреби й нерозуміння',
    navLabel: 'Твої потреби',
    sub: 'Сказати, чого хочеш — і ніколи не застрягнути в розмові',
    dur: '≈ 30 хв',
    footerNote: 'Хочеш закріпити? Скажи мені будь-яку ситуацію — підкажу точну фразу-рятівник.',
  },
  {
    slug: '0007-review-and-roleplay',
    num: 7,
    pl: 'Pełna rozmowa',
    cardTitle: 'Повний дзвінок: рольова гра',
    navLabel: 'Повний дзвінок',
    sub: 'Усе разом: дзвінок від «dzień dobry» до домовленості про огляд',
    dur: '≈ 30 хв',
    footerNote: 'Готовий до справжнього дзвінка? Опиши мені оголошення — зіграємо повну репетицію в чаті.',
  },
];

// The printable cheat-sheet: the "next" target after the final lesson.
export const CHEAT = {
  href: 'reference/karta-ratunkowa.html',
  label: '🆘 Картка-рятівник',
};
