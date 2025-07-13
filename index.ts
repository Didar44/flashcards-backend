import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: '*', 
}));

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
