const https = require('https');
const fs = require('fs');
const express = require('express');

const routes = require('./routes/index');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', routes);

const sslOptions = {
  key:  fs.readFileSync('./certs/server.key'),
  cert: fs.readFileSync('./certs/server.pem'),
};

const PORT = 8080;

https.createServer(sslOptions, app).listen(PORT, () => {
  console.log(`Servidor HTTPS en https://localhost:${PORT}`);
});