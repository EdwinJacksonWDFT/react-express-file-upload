const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');
const app = express();

app.use(express.static('upload'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, callback) => {
        callback(null, `${file.fieldname}-${file.originalname}-${Date.now()}-${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage }).single('avatar');

app.post('/file', upload, (req, res) => {
    res.json(req.file);
})

app.listen(8080, () => {
    console.log('http://localhost:8080');
});