const express = require('express');
const app = express();
const PORT = 1337;
const bodyParser = require('body-parser');
const path = require('path');
const Router = require('./router.js');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use(cors());

app.use('/api', Router);

app.listen(PORT, () => console.log(`App listening @ localhost:${PORT}`));
