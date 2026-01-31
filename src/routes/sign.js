const express = require('express');
const router = express.Router(); 

const signController = require('../app/controllers/SignController');

router.use('/search', signController.search);
router.use('/',signController.index);

module.exports = router;