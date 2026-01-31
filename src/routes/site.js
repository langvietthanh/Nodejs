const express = require('express');
const router = express.Router(); 

const signController = require('../app/controllers/SiteController');

router.get('/search', signController.search);
router.get('/',signController.index);

module.exports = router;        