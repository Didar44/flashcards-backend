"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;

app.use((0, cors_1.default)({
    origin: '*', 
}));
app.use(express_1.default.json());
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
