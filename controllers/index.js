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

            const uploadImageStack = async (imageStack) => {
                try {
                    if (imageStack.length === 0) return;
                    const { buffer, originalname } = imageStack.shift();
                    const newRef = `${originalname.split('.')[0]}-${date.getTime()}.png`;
                    const imageLink = `https://imagez-storage.s3.us-west-1.amazonaws.com/${newRef}`;
                    const compressedBuffer = await sharp(buffer)
                        .png({ quality: 30 })
                        .toBuffer();

                    await S3.putObject({
                        Bucket: 'imagez-storage',
                        Key: newRef,
                        Body: compressedBuffer,
                    }).promise();

                    compressedImageLinks.push({ link: imageLink, key: newRef });

                    return await uploadImageStack(imageStack);

                } catch(e) {
                    console.log(e);
                    throw new Error(e);
                }
            }

            await uploadImageStack(files);
            res.status(201).json(compressedImageLinks);
        } catch(e) {
            console.log(e);
            res.status(500).json(e);
        }
    },

    handleImageDeletion: async (req, res) => {
        try {
            const { imageRefs } = req.body;
            
            imageRefs.forEach(ref => {
                S3.deleteObject({
                    Bucket: 'imagez-storage',
                    Key: ref,
                }, (err) => { 
                    if (err) {
                        console.log(err);
                    }
                })
            });

            res.sendStatus(201);

        } catch (e) {
            console.log(e);
            res.status(500).json(e);
        }
    }
}
