const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');

const cors = require('./config/cors');
const mountRoutes = require('./config/router');
const connectToDb = require('./config/database');
const startServer = require('./config/server');

const errorHandler = require('./src/middlewares/error-handler');
const notFoundHandler = require('./src/middlewares/not-found-handler');

const app = express();

app.use(cors);
app.use(helmet());
app.disable('x-powered-by');
app.use(compression());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use('/', require('./src/api/routes/public/main'));

let api = express.Router();
mountRoutes(api);
app.use('/api', api);

app.use(errorHandler);
app.use(notFoundHandler);

startServer(app);
connectToDb();