require('dotenv').config();

const express = require('express');
// const {isAuthorized} = require('./middlewares/auth'); 
const app = express();
app.use(express.json());


// app.use(isAuthorized);

const UserRouter = require('./routes/UserRoutes');
const transactionsRouter = require('./routes/TransactionsRoute');
app.use('/v1/api',UserRouter);

app.use('/v1/api',transactionsRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT,() => {
    console.log(`working on PORT ${PORT}`);
})