const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const path = require('path');
const ownersRouters = require('./routes/ownersRouters');
const usersRouters = require('./routes/usersRouters');
const productsRouters = require('./routes/productsRouters');

const db = require('./config/mongoose-connection');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use("/owners",ownersRouters);
app.use("/users",usersRouters);
app.use("/products",productsRouters);



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});