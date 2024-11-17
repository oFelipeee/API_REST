const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const clienteRoutes = require('./src/routes/clienteRoutes');
const contaRoutes = require('./src/routes/contaRoutes');
const transacaoRoutes = require('./src/routes/transacaoRoutes');
const notificacaoRoutes = require('./src/routes/notificacaoRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const errorHandler = require('./src/middlewares/errorHandler');

dotenv.config();

const app = express();
app.use(express.json());

// Conexão com o banco de dados MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Definindo as rotas
app.use('/api/clientes', clienteRoutes);
app.use('/api/contas', contaRoutes);
app.use('/api/transacoes', transacaoRoutes);
app.use('/api/notificacoes', notificacaoRoutes);
app.use('/api/admin', adminRoutes);

// Middleware de tratamento de erros
app.use(errorHandler);

// Iniciando o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`=================================================`);
  console.log(`=================================================`);
  console.log(`=================================================`);
  console.log(`      👾  Estamos vivos na porta ${PORT}  👾`);
  console.log(`=================================================`);
  console.log(`=================================================`);
  console.log(`=================================================`);

});
