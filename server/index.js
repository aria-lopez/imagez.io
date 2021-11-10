const express = require('express');
const app = express();
const PORT = 1337;
const bodyParser = require('body-parser');
const path = require('path');
const Router = require('./router.js');
const cors = require('cors');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });
const fs = require('fs');
const aws = require('aws-sdk');
const sharp = require('sharp');
const { accessKeyId, secretAccessKey } = require('./aws-config.js');

const s3 = new aws.S3({
    credentials: {
        accessKeyId,
        secretAccessKey
    }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use(cors());

app.post('/api/upload', upload.array('images', 10), async (req, res) => {
    const time = new Date();
    fs.access('public', (err) => {
        if (err) { fs.mkdirSync('public'); }
    })
    const { files } = req;
    const imageLinks = [];
    for (let i = 0; i < files.length; i++) {
        const { buffer, originalname } = files[i];

        const compressedImage = await sharp(buffer)
            .png({ quality: 20 })
            .toBuffer();

        const newRef = `${originalname.split('.')[0]}-${time.getTime()}.png`;
        s3.putObject({
            Bucket: 'imagez-storage',
            Key: newRef,
            Body: compressedImage,
        }, (resp) => {
            console.log(resp);
        });     
    }
});



app.listen(PORT, () => console.log(`App listening @ localhost:${PORT}`));
