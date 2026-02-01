const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

// Các tuyến đường con sau khi chọc vào /news
router.get('/:slug', newsController.show);
router.get('/', newsController.index);

module.exports = router;
