const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productsRoute = require("./routes/product.route.js");
const app = express();

// Middleware pour analyser le corps des requêtes JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Importation des routes
app.use("/api/products", productsRoute);

// Middleware pour gérer les erreurs
app.get("/", (req, res) => {
    res.send("Bonjour du serveur API Node mis à jour!");
});

// Connexion à MongoDB et démarrage du serveur
mongoose
    .connect(
        "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    )
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(3000, () => {
            console.log("Le serveur fonctionne sur le port 3000");
        });
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });
