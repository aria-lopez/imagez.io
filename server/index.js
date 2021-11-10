const express = require('express');
const app = express();
const PORT = 1337;
const bodyParser = require('body-parser');
const path = require('path');
const Router = require('./router.js');
const cors = require('cors');
const multer = require('multer');
const upload = multer({ dest: 'public' });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use(cors());

app.post('/api/upload', upload.array('images', 10), (req, res, next) => {

})


app.listen(PORT, () => console.log(`App listening @ localhost:${PORT}`));
