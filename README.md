# Skypro Wallet

Учебный проект учёта личных расходов: страница «Мои расходы» с таблицей трат и формой добавления, страница «Анализ расходов» с календарём выбора периода и диаграммой по категориям.

## Возможности

- **Авторизация** — вход и регистрация через API, валидация обязательных полей и сохранение данных авторизованного пользователя в браузере.
- **Мои расходы** (`/costs/my`) — список расходов с добавлением и удалением. Таблицу можно сортировать по дате и сумме; незаполненные обязательные поля подсвечиваются, ошибки отправки показываются отдельно.
- **Анализ расходов** (`/costs/analysis`) — выбор периода в календаре с прокруткой последних 24 месяцев. Выбранный диапазон загружает расходы за этот период и обновляет диаграмму с суммами по категориям и общей суммой.
- Защищённые маршруты: без авторизации пользователь перенаправляется на `/auth`; переход на `/` перенаправляет авторизованного пользователя на `/costs/my`.

## Стек

- [React 19](https://react.dev/) + [Vite 8](https://vite.dev/) (`@vitejs/plugin-react`)
- [react-router-dom](https://github.com/remix-run/react-router) — роутинг
- [styled-components](https://github.com/styled-components/styled-components) — стилизация компонентов
- [react-day-picker](https://daypicker.dev/) — календарь с выбором периода
- [axios](https://github.com/axios/axios) — HTTP-клиент для API
- [react-data-table-component](https://github.com/jbetancur/react-data-table-component) — установлен, пока не используется (таблица собрана вручную)
- ESLint (включая `eslint-plugin-react-hooks`)

## Запуск

```bash
npm install
npm run dev
```

Приложение откроется на `http://localhost:5173`.

### Скрипты

| Команда           | Описание                          |
| ----------------- | --------------------------------- |
| `npm run dev`     | dev-сервер Vite с HMR             |
| `npm run build`   | production-сборка в `dist/`       |
| `npm run preview` | локальный просмотр собранной версии |
| `npm run lint`    | проверка ESLint                   |

## Структура

```
src/
├── components/
│   ├── appRoutes/      # маршруты и PrivateRoute
│   ├── auth/           # вход / регистрация
│   ├── calendar/       # календарь периода (react-day-picker)
│   ├── costAnalysis/   # страница анализа расходов
│   ├── diagram/        # диаграмма по категориям
│   ├── header/         # шапка с навигацией
│   ├── myCosts/        # страница «Мои расходы»
│   ├── newCost/        # форма добавления расхода
│   ├── table/          # таблица расходов
│   ├── Button.styled.js / Input.styled.js / Modal.styled.js  # общие styled-компоненты
│   └── GlobalStyle.styled.js
├── constants/          # общие константы категорий расходов
├── context/            # AuthContext и TransactionsContext
├── pages/              # страницы-обёртки маршрутов
├── services/           # вызовы API авторизации и расходов
└── theme.js            # палитра цветов
```

Стили компонентов лежат рядом в файлах `*.styled.js`; новые компоненты наследуют базовые стили через `styled(Base)`, не изменяя исходные.
