# Контрольная работа №5: Генератор случайных цитат

**Вариант:** 3 (Генератор случайных цитат)  
**Студент:** Болотаев Артём Денисович  
**Группа:** ЭФБО-05-24 


## API Endpoints
- `GET /api/quotes` – все цитаты
- `GET /api/quotes/random` – случайная цитата  
- `GET /api/quotes?author=...` – фильтр по автору
- `POST /api/quotes` – добавить цитату (JSON: {"text": "...", "author": "..."})

## Как работает проект
### 1. Сервер (server.js)
Создает Express-приложение, подключает middleware для JSON, статические файлы, маршруты и кастомный middleware для логирования.

### 2. Кастомный middleware
Логирует все запросы в консоль с датой, методом и URL.

### 3. Маршруты (routes/quotes.js)
Определяет конечные точки API для работы с цитатами.

### 4. Контроллер (controllers/quotesController.js)
Содержит массив цитат и функции: получение всех, случайной, добавление новой.

### 5. Статические файлы (public/index.html)
HTML-страница с документацией API.

## Скриншоты
1. Главная страница – screenshots/main.png
2. Все цитаты – screenshots/all_quotes.png  
3. Случайная цитата – screenshots/random_quote.png
4. Фильтр по автору – screenshots/filter.png
5. Логи в консоли – screenshots/console.png