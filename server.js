const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION!');
  console.log(err.name, err.message);
  process.exit(1);
});

const DB = process.env.MONGO_DB_CONNECTION_STRING;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful!'));

const port = 3000;

app.listen(port, () => {
  console.log(`App running on port ${port} ...`);
});

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION!.');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});