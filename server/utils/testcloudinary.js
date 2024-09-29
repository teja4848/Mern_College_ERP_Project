require('dotenv').config(); // Load environment variables

// Log Cloudinary config
console.log("Cloudinary Name:", process.env.CLOUDINARY_NAME);
console.log("Cloudinary API Key:", process.env.CLOUDINARY_API_KEY);
console.log("Cloudinary API Secret:", process.env.CLOUDINARY_API_SECRET);

const cloudinary = require('./cloudinary'); // Adjust the path if necessary
const fs = require('fs');

const uploadImage = async () => {
    try {
        const imagePath = 'C:/Users/HP/Pictures/teja/ai1.png'; // Adjust the path accordingly

        if (!fs.existsSync(imagePath)) {
            console.error('File not found:', imagePath);
            return;
        }

        const result = await cloudinary.uploader.upload(imagePath, {
            folder: 'erp',
            width: 150,
            crop: 'scale',
        });

        console.log('Upload Success:', result);
    } catch (error) {
        console.error('Upload Error:', error);
    }
};

uploadImage();
