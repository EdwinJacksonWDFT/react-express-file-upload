const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');
const app = express();

app.use('/images', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, callback) => {
        callback(null, `${file.fieldname}-${Date.now()}-${path.extname(file.originalname)}`);
    }
});

const uploadMiddleware = multer({ storage }).single('avatar');

app.post('/file', uploadMiddleware, (req, res) => {
    console.log(req.file);
    res.json(req.file);
})


app.listen(8080, () => {
    console.log('http://localhost:8080');
});