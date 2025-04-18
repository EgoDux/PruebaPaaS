const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('¡Hola desde Azure PaaS! Despliegue exitoso 2025');
});

app.listen(port, () => {
  console.log(`Aplicación escuchando en el puerto ${port}`);
});