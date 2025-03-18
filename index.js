require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));

const appRoutes = require("./routes/route.js");

app.use(appRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server http://localhost:${PORT}`);
});