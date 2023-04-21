const express = require('express');
require('./src/config/database');
const app = express();
const cors = require('cors')

const routes = require('./src/router/routes');
const secureRoute = require('./src/router/secure-routes');
const passport = require('passport');
const classRouter = require('./src/router/classRouter')
const roomRouter = require('./src/router/roomRouter')

require('./src/auth/auth');



app
    .use(cors())
    .use(express.json())
    .use('/', routes)
    .use('/api/classes' , passport.authenticate('jwt', { session: false }), classRouter)
    .use('/api/rooms' ,passport.authenticate('jwt', { session: false }),  roomRouter)

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({ error: err });
});


app.listen(process.env.PORT, () => console.info(`Server started on port ${process.env.PORT}`))