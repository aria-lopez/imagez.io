const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });
const { handleImageUpload } = require('../controllers');

router.post('/upload', upload.array('images', 10), handleImageUpload);

module.exports = router;
