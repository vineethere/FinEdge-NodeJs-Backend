require('dotenv').config();

const express = require('express');

const app = express();
app.use(express.json());
const UserRouter = require('./routes/UserRoutes');
app.use('/v1/routes',UserRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT,() => {
    console.log(`working on PORT ${PORT}`);
})