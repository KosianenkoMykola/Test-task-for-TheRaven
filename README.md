# Test Task for TheRaven

## Опис проєкту

Цей проєкт створено як тестове завдання для позиції Junior Front-End Developer у компанії TheRaven. 
Мета проєкту - створити простий магазин на основі React.js, Redux з наступною функціональністю:

- Відображення списку товарів.
- Можливість додавання товарів до кошика.
- Динамічне оновлення загальної суми товарів у кошику.
- Управління кількістю товарів у кошику.
- Генерація JSON з замовленими товарами та інформацією про користувача при замовленні.
- Зберігання доданих товарів в кошику у локальному сховищі.

## Технології

- Vite
- React.js
- Redux
- Tailwind CSS
- @headlessui/react для модальних вікон
- GitHub та Vercel для розгортання

## Функціональність

1. **Список товарів**: 
   - Відображення списку доступних товарів з інформацією про них.
2. **Додавання до кошика**: 
   - Можливість додати товар до кошика, натиснувши кнопку "Buy".
3. **Кошик**: 
   - Відображення товарів, доданих до кошика, з можливістю змінювати їх кількість або видаляти.
   - Динамічне оновлення загальної суми товарів у кошику, яка відображається біля іконки кошика в хедері.
   - Після оновлення сторінки товари в кошику зберігаються.
4. **Оформлення замовлення**: 
   - Генерація JSON з замовленими товарами та інформацією про користувача при оформленні замовлення.

## Інструкція з розгортання

1. Клонувати репозиторій:
   ```sh
   git clone https://github.com/KosianenkoMykola/Test-task-for-TheRaven.git
2. Встановити залежності:
   npm install
3. Запустити проект:
   npm run dev

## Деплой
Проєкт розгорнуто на Vercel за наступним посиланням: https://test-task-for-the-raven.vercel.app/
