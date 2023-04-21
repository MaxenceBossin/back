const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.set('strictQuery', false);
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.on('open', () => console.info('Connected to Database !'))

module.exports = db;