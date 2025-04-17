require('dotenv').config();
const db = require('./config/db');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));

 const initApp = async () => {

    try {

        await db.authenticate();

        console.log("Connected to DB");

        const appRoutes = require("./routes/route.js");

        app.use(appRoutes);
        
        const PORT = process.env.PORT || 3000;
        
        app.listen(PORT, () => {
            console.log(`Server http://localhost:${PORT}`);
        });

    } catch (error) {
       console.error("Unable to connect to the database:", error.original);
    }
 };

 initApp();