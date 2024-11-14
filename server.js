// server.js
const app = require('./app');
const sequelize = require('./config/db');

sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
  });
});
