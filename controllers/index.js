const aws = require('aws-sdk');
const sharp = require('sharp');
const { accessKeyId, secretAccessKey } = require('../server/aws-config.js');

const S3 = new aws.S3({
    credentials: {
        accessKeyId,
        secretAccessKey,
    }
});

const date = new Date();

module.exports = {
    handleImageUpload: async (req, res) => {
        try {
            const { files } = req;
            const compressedImageLinks = [];
            for (let i = 0; i < files.length; i++) {
                const { buffer, originalname } = files[i];

                const compressedBuffer = await sharp(buffer)
                    .png({ quality: 30 })
                    .toBuffer();

                const newRef = `${originalname.split('.')[0]}-${date.getTime()}.png`;
                
                const imageLink = `https://imagez-storage.s3.us-west-1.amazonaws.com/${newRef}`;

                S3.putObject({
                    Bucket: 'imagez-storage',
                    Key: newRef,
                    Body: compressedBuffer,
                }, (err, data) => {
                    console.log(err);
                    console.log(data);
                });
                compressedImageLinks.push({ link: imageLink, key: newRef });
            }
            res.status(201).json(compressedImageLinks);
        } catch(e) {
            console.log(e);
            res.sendStatus(500);
        }
    }
}
