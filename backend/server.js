// Подключаем необходимые модули
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
// Подключаем базу
const Database = require('./database');

const db = new Database();
console.log('🔍 Путь к используемой базе данных:', require('path').resolve(db.dbPath));
// Инициализация Express и порта
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/images', express.static(path.join(__dirname, 'images')));

const imagesPath = 'C:/Users/Татьяна Пудова/Desktop/Final_html/finHTML/images';

app.use('/images', express.static(imagesPath));



// Middleware для обработки ошибок базы данных
app.use((req, res, next) => {
    req.db = db;
    next();
});

// Регистрация пользователя
app.post('/api/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const result = await db.register({ name, email, password });
        res.status(201).json({
            success: true,
            data: result
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
});

// Авторизация пользователя
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await db.login({ email, password });
        res.json({
            success: true,
            data: result
        });
    } catch (error) {
        res.status(401).json({
            success: false,
            error: error.message
        });
    }
});

// Получение всех товаров
app.get('/api/products', async (req, res) => {
    try {
        const products = await db.getAllProducts();
        res.json({
            success: true,
            data: products,
            count: products.length
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// Получение товара по ID
app.get('/api/products/:id', async (req, res) => {
    try {
        const productId = parseInt(req.params.id);
        const product = await db.getProductById(productId);
        res.json({
            success: true,
            data: product
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            error: error.message
        });
    }
});

// Получение отзывов по product_id
app.get('/api/products/:id/reviews', async (req, res) => {
    try {
        const productId = parseInt(req.params.id);
        const reviews = await db.getReviewsByProductId(productId);
        res.json({
            success: true,
            data: reviews,
            count: reviews.length
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
});

// Получение отзывов по user_id
app.get('/api/users/:id/reviews', async (req, res) => {
    try {
        const userId = parseInt(req.params.id);
        const reviews = await db.getReviewsByUserId(userId);
        res.json({
            success: true,
            data: reviews,
            count: reviews.length
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
});

// Создание отзыва
app.post('/api/reviews', async (req, res) => {
    try {
        const { user_id, product_id, review, stars } = req.body;
        const result = await db.createReview({
            user_id: parseInt(user_id),
            product_id: parseInt(product_id),
            review,
            stars: parseInt(stars)
        });
        res.status(201).json({
            success: true,
            data: result
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
});

// Получение всех магазинов
app.get('/api/shops', async (req, res) => {
    try {
        const shops = await db.getAllShops();
        res.json({
            success: true,
            data: shops,
            count: shops.length
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// Создание товара
app.post('/api/products', async (req, res) => {
    try {
        const { name, price, description, image_url, category } = req.body;
        const result = await db.createProduct({
            name,
            price: parseFloat(price),
            description,
            image_url,
            category
        });
        res.status(201).json({
            success: true,
            data: result
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
});

// Создание магазина
app.post('/api/shops', async (req, res) => {
    try {
        const { address, phone, latitude, longitude } = req.body;
        const result = await db.createShop({
            address,
            phone,
            latitude: latitude ? parseFloat(latitude) : null,
            longitude: longitude ? parseFloat(longitude) : null
        });
        res.status(201).json({
            success: true,
            data: result
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
});

// Корневой маршрут
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'API работает',
        endpoints: {
            auth: {
                register: 'POST /api/register',
                login: 'POST /api/login'
            },
            products: {
                getAll: 'GET /api/products',
                getById: 'GET /api/products/:id',
                create: 'POST /api/products'
            },
            reviews: {
                getByProduct: 'GET /api/products/:id/reviews',
                getByUser: 'GET /api/users/:id/reviews',
                create: 'POST /api/reviews'
            },
            shops: {
                getAll: 'GET /api/shops',
                create: 'POST /api/shops'
            }
        }
    });
});

// Middleware для обработки ошибок
app.use((error, req, res, next) => {
    console.error('Ошибка сервера:', error);
    res.status(500).json({
        success: false,
        error: 'Внутренняя ошибка сервера'
    });
});

// Запуск сервера
const startServer = async () => {

    app.listen(PORT, () => {
        console.log(`Сервер запущен на порту ${PORT}`);
        console.log(`API доступно по адресу: http://localhost:${PORT}/api`);
    });
};

// Завершение работы сервера при прерывании процесса
process.on('SIGINT', async () => {
    console.log('\nЗавершение работы сервера...');
    if (db) {
        await db.close();
    }
    process.exit(0);
});

startServer().catch(console.error);