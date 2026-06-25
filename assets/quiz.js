/*
  Reusable quiz widget.

  Usage:
    <div id="quiz-container"></div>
    <script src="../assets/quiz.js"></script>
    <script>
      Quiz.render('quiz-container', questions, opts);
    </script>

  Each question object: { focal, answer, options: [string x N], explanation, prompt? }
    - focal   : the focal text shown large (a Polish word, or a Ukrainian situation).
                Legacy alias `word` is still accepted.
    - prompt  : optional per-question instruction; overrides opts.defaultPrompt.
  Options are shuffled on each render. `answer` must appear in `options`.

  opts (optional):
    - defaultPrompt : instruction shown above the focal text
                      (default: "Що означає це польське слово?")
    - focalClass    : CSS class for the focal element
                      ('quiz-word' for single words [default], 'quiz-scenario' for sentences)
    - optionsClass  : extra class on the <ul> ('list' for full-width stacked options)
*/

const Quiz = (() => {
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function render(containerId, questions, opts = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const defaultPrompt = opts.defaultPrompt || 'Що означає це польське слово?';
    const focalClass    = opts.focalClass    || 'quiz-word';
    const optionsClass  = opts.optionsClass ? ' ' + opts.optionsClass : '';

    let current = 0;
    let score = 0;
    let answered = false;

    const shuffled = questions.map(q => ({
      ...q,
      options: shuffle(q.options)
    }));

    function renderQuestion() {
      if (current >= shuffled.length) {
        renderScore();
        return;
      }
      const q = shuffled[current];
      const focal = q.focal != null ? q.focal : q.word;
      const prompt = q.prompt || defaultPrompt;
      answered = false;

      container.innerHTML = `
        <div class="quiz-progress">Питання ${current + 1} / ${shuffled.length}</div>
        <div class="quiz-question-card">
          <div class="quiz-prompt">${prompt}</div>
          <div class="${focalClass}">${focal}</div>
          <ul class="quiz-options${optionsClass}">
            ${q.options.map(opt =>
              `<li class="quiz-option" data-value="${opt}">${opt}</li>`
            ).join('')}
          </ul>
          <div class="quiz-feedback" id="qfeedback"></div>
          <button class="quiz-next-btn" id="qnext">
            ${current + 1 < shuffled.length ? 'Далі →' : 'Результат →'}
          </button>
        </div>
      `;

      container.querySelectorAll('.quiz-option').forEach(btn => {
        btn.addEventListener('click', () => handleAnswer(btn, q));
      });

      document.getElementById('qnext').addEventListener('click', () => {
        current++;
        renderQuestion();
      });
    }

    function handleAnswer(btn, q) {
      if (answered) return;
      answered = true;

      const chosen = btn.dataset.value;
      const isCorrect = chosen === q.answer;
      if (isCorrect) score++;

      container.querySelectorAll('.quiz-option').forEach(b => {
        b.classList.add('answered');
        if (b.dataset.value === q.answer) b.classList.add('correct');
        else if (b === btn && !isCorrect) b.classList.add('wrong');
      });

      const fb = document.getElementById('qfeedback');
      fb.className = 'quiz-feedback ' + (isCorrect ? 'correct' : 'wrong');
      fb.textContent = isCorrect
        ? 'Правильно! ' + q.explanation
        : 'Не зовсім. Правильна відповідь: «' + q.answer + '». ' + q.explanation;

      document.getElementById('qnext').style.display = 'inline-block';
    }

    function renderScore() {
      const pct = Math.round((score / shuffled.length) * 100);
      const msg =
        pct >= 88 ? 'Чудово! Переходь до наступного уроку.' :
        pct >= 63 ? 'Добре. Повтори матеріал і спробуй ще раз.' :
                    'Не хвилюйся — поверни сторінку і перечитай урок, потім спробуй знову.';

      container.innerHTML = `
        <div class="quiz-score">
          <div class="score-number">${score}/${shuffled.length}</div>
          <div class="score-label">${pct}% — ${msg}</div>
          <br>
          <button class="quiz-restart-btn" id="qrestart">Спробувати ще раз</button>
        </div>
      `;

      document.getElementById('qrestart').addEventListener('click', () => {
        current = 0;
        score = 0;
        renderQuestion();
      });
    }

    renderQuestion();
  }

  return { render };
})();
