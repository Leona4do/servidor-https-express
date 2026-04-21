const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('<h1>Servidor HTTPS funcionando correctamente</h1>');
});

router.get('/status', (req, res) => {
  res.json({ estado: 'activo', protocolo: req.protocol });
});

module.exports = router;