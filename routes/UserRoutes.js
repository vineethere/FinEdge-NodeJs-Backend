const express = require('express');
const app = express();
const router = express.Router();
const { loginUser, registerUser } = require('../Controller/userController');

const {isAuthorized} = require('../middlewares/auth');

router.post('/login', (req, res) => {
    const { userName, password } = req.body;
    try {
        let resp = loginUser({ userName, password });
        return res.status(200).send(resp);
    }
    catch (erorrMessage) {
        return res.status(400).send(`error : ${erorrMessage.message}`);
    }
});

router.post('/users', (req, res) => {
    const { userName, password } = req.body
    try {

        registerUser({ userName, password });
        return res.status(200).send('Registered successfully');
    }
    catch (erorrMessage) {
        return res.status(400).send(`error : ${erorrMessage.message}`);
    }
});

router.get('/health', (req, res) => {
    try {
        return res.status(200).send('APIs are working , go on');
    }
    catch {
        return res.status(400).send('There is some issue in APIs , make sure to come back later');
    }
});

module.exports =  router;