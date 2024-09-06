const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize ({
    dialect: 'sqlite',
    storage: './database.sqlite'
})

let db = {}

async function setupDB() {
    db.Categories = sequelize.define('Categories', {
        name: DataTypes.STRING
    })
    await sequelize.sync({ force: true });
}

async function startServer() {
    await setupDB();
    const express = require('express');
    const app = express();
    const port = 3001;
    app.use(express.json())

    app.get('/api/categories', (req, res) => {
        db.Categories.findAll().then(category => {
            res.json(category)
        })
    })

    app.post('/api/categories', (req, res) => {
        db.Categories.create(req.body).then(category => {
            res.json(category)
        }) 
    })

    app.listen(port, () => {
        console.log(`App listening on port ${port}`) 
    })
}


startServer();