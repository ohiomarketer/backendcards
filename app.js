require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db/config');

const app = express();
const PORT = process.env.PORT

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use('/api', require('./routes/app.routes'));

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});