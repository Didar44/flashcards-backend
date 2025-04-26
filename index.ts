import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const subjects = {
  statistics: {
    name: 'Статистика',
    flashcards: [
      {
        question: 'What is a normal distribution?',
        answer: 'A bell-shaped distribution.',
        options: ['Normal distribution', 'Skewed', 'Uniform', 'Bimodal'],
        hint: 'Это колокол.'
      }
    ]
  },
  mathematics: {
    name: 'Математика',
    flashcards: []
  }
};

// <--- ВАЖНО: этот код отвечает за /api/subjects
app.get('/api/subjects', (req, res) => {
  res.json(subjects);
});
console.log('Контроль: маршрут /api/subjects добавлен!');
app.get('/', (req, res) => {
  res.send('Сервер работает!');
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});