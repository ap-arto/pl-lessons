# Польська для пошуку квартири 🏠🇵🇱

Міні-курс із 7 уроків польської для пошуку й оренди квартири — для україномовних (рівень A2).
Сайт на [Astro](https://astro.build) (статичний вивід), розгортається на GitHub Pages.

**Живий сайт:** https://ap-arto.github.io/pl-lessons/

## Структура

| Шлях | Призначення |
|---|---|
| `src/data/lessons.ts` | **Єдине джерело правди**: порядок уроків, навігація, картки лендингу |
| `src/layouts/Lesson.astro` | Спільний chrome уроку (head, header, footer, prev/next) |
| `src/pages/index.astro` | Лендинг — картки генеруються з `lessons.ts` |
| `src/pages/lessons/0001…0007-*.astro` | 7 уроків (тіло — HTML + інлайн-квіз) |
| `public/assets/style.css` | Спільні стилі |
| `public/assets/quiz.js` | Інтерактивний квіз (vanilla JS, без залежностей) |
| `public/reference/karta-ratunkowa.html` | Друкована картка-рятівник (A4 + телефон), самодостатня |

## Розробка

```bash
npm install
npm run dev      # http://localhost:4321/pl-lessons/
npm run build    # збірка у dist/
npm run preview  # перегляд зібраної версії
```

## Додати новий урок

1. Створити `src/pages/lessons/0008-<slug>.astro` (за зразком будь-якого уроку):
   обгорнути `<main>…</main>` + інлайн `<script is:inline>Quiz.render(...)</script>` у `<Lesson slug="…">`.
2. Додати один запис у масив `lessons` у `src/data/lessons.ts`.

Навігація сусідніх уроків і картка на лендингу оновляться автоматично.

## Публікація

`base: '/pl-lessons/'` у `astro.config.mjs` → сайт працює під підшляхом проєкту.
Деплой автоматичний: пуш у `main` запускає `.github/workflows/deploy.yml`
(офіційний `withastro/action`), який збирає й публікує на GitHub Pages.

> Джерело Pages у Settings → Pages має бути **GitHub Actions** (не «Deploy from a branch»).
