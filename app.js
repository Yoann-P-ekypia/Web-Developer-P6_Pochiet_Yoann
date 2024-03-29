// import des modules npm - Ajout des plugins externes
const express = require('express');
const bodyParser = require('body-parser');

// On importe mongoose pour pouvoir utiliser la base de données
const mongoose = require('mongoose');

const path = require('path');


// On importe le router 4
const userRoutes = require('./routes/user');
const sauceRoutes = require('./routes/sauce');


// Récupération de la liste de Sauce en vente

mongoose.connect('mongodb+srv://openclassroomsyoannprojet6:Graphiste3825@cluster0.lkq4bay.mongodb.net/baseprojet6?retryWrites=true&w=majority',
    { useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

// Création d'une application express Ajoutez des middlewares 3
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/api/auth', userRoutes);
app.use('/api/sauces', sauceRoutes);

app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;