const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Configuração do Body Parser para lidar com os dados do formulário
app.use(bodyParser.urlencoded({ extended: true }));

// Define a pasta "views" como o diretório de renderização
app.set('views', path.join(__dirname, 'views'));

// Define o motor de visualização como EJS
app.set('view engine', 'ejs');

// Rota para renderizar o formulário
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Rota para processar os dados do formulário
app.post('/dados', (req, res) => {
    const { nome, endereco, telefone, data_agendamento } = req.body;
    res.render('dados', { nome, endereco, telefone, data_agendamento });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
