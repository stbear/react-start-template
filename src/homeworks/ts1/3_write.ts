/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

/**
 * Нужно создать тип Category, он будет использоваться ниже.
 * Категория содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)
 *
 * Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
 *
 * Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
 *
 * Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 *
 * Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 * */

interface Category {
    id: string,
    name: string,
    photo?: string
}
interface Product {
    id: string,
    name: string,
    photo: string,
    desc?: string,
    createdAt: string,
    oldPrice?: number,
    price: number,
    category: Category
}

type Operation = Cost | Profit;

interface Cost {
    id: string,
    name: string,
    desc?: string,
    createdAt: string,
    amount: number,
    category: Category,
    type: 'Cost'
}

interface Profit {
    id: string,
    name: string,
    desc?: string,
    createdAt: string,
    amount: number,
    category: Category,
    type: 'Profit'
}

// Насчёт "случайности".
// Числовые значения можно получить через Math.random(), при необходимости ограничить какими-то условиями
// Для строк - можно задать какое-то заранее заданное количество, и брать из списка случайным образом
// Фото - не понял что имеется в виду. Урлы? base64 строка?

const names = ['Шампунь 100мл', 'Клубника 100г', 'Телефон 5G', 'Шелест листьев 50дБ', 'Моторное масло 1л'];
const descs = [
    'Ваши волосы станут мягкими и шелковистыми',
    'Насладитесь ароматом лета!',
    'Звонит и ладно',
    'Вперёд в будущее',
    'Спать иногда хорошо',
    'Поедет - не остановишь!'
];
const categories = [
    { id: '1', name: 'Первая категория' },
    { id: '2', name: 'Лучшая категория' },
    { id: '3', name: 'Новая категория' },
    { id: '4', name: 'Нужная категория' },
    { id: '5', name: 'Полезная категория' }
];

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct: (createdString: string) => Product = (createdAt: string) => {
    return {
        id: String(Math.trunc(Math.random() * 999)),
        name: names[Math.trunc(Math.random() * names.length)],
        photo: '',
        desc: Math.random() > 0.5 ? descs[Math.trunc(Math.random() * descs.length)] : undefined,
        createdAt: createdAt,
        oldPrice: Math.random() > 0.5 ? Math.trunc(Math.random() * 999) : undefined,
        price: Math.trunc(Math.random() * 999),
        category: categories[Math.trunc(Math.random() * categories.length)]
    };
};

const opNames = ['Покупка', 'Продажа', 'Аренда', 'Кредит', 'Компенсация', 'Услуга', 'Платёж', 'Комиссия', 'Консультация'];
const opDescs = [
    'Просмотр дождя в окно',
    'Стрижка любимой собаки',
    'Охота на стрекоз',
    'Оказание первой помощи при мурашках',
    'Написание инструментов для написания инструментов',
    'Работа над имиджем свитера',
    'Лиловый лось в лесу',
    'Налаживание логистики товаров',
    'Увеличение наследия писателей'
];

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation: (createdString: string) => Operation = (createdAt: string) => {
    return {
        id: String(Math.trunc(Math.random() * 999)),
        name: opNames[Math.trunc(Math.random() * opNames.length)],
        desc: Math.random() > 0.5 ? opDescs[Math.trunc(Math.random() * opDescs.length)] : undefined,
        createdAt: createdAt,
        amount: Math.trunc(Math.random() * 999),
        category: categories[Math.trunc(Math.random() * categories.length)],
        type: Math.random() > 0.5 ? 'Cost' : 'Profit'
    };
};
