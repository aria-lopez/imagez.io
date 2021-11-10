const express = require('express');
const router = express.Router();
const { handleImageUpload } = require('../controllers');

router.post('/image-upload', handleImageUpload);

module.exports = router;
