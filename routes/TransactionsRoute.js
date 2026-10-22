const express = require('express');
const router = express.Router();
const { getAllTransactions, getATransaction, updateTransaction, addTransaction, deleteTransaction, returnSummary } = require('../Controller/transactionController');
const { isAuthorized } = require('../middlewares/auth');

router.get('/transactions', isAuthorized, (req, res) => {
    try {
        const userId = req.decodedToken.userId;
        const result = getAllTransactions(userId);

        return res.status(200).send(result);
    }
    catch (err) {
        console.error("Transaction Error:", err);

        // 3. Send the specific error message for easier debugging
        return res.status(400).send(`error: ${err.message}`);
    }
});


router.patch('/transactions', isAuthorized, (req, res) => {
    try {
        const userId = req.decodedToken.userId;
        const { transactionId, transaction } = req.body;
        const result = updateTransaction(userId, transactionId, transaction);

        return res.status(200).send(result);
    }
    catch (err) {
        console.error("Transaction Error:", err);
        return res.status(400).send(`error: ${err.message}`);
    }
});

router.post('/transactions', isAuthorized, (req, res) => {
    try {
        const userId = req.decodedToken.userId;
        const { transaction } = req.body;



        const result = addTransaction(userId, transaction);

        return res.status(200).send(result);
    }
    catch (err) {
        console.error("Transaction Error:", err);
        return res.status(400).send(`error: ${err.message}`);
    }
});

router.delete('/transactions', isAuthorized, (req, res) => {
    try {
        const userId = req.decodedToken.userId;
        const { transactionId } = req.body;
        const result = deleteTransaction(userId, transactionId);

        return res.status(200).send(result);
    }
    catch (err) {
        console.error("Transaction Error:", err);
        return res.status(400).send(`error: ${err.message}`);
    }
});

router.get('/transaction/:transactionId', isAuthorized, (req, res) => {
    try {
        const userId = req.decodedToken.userId;
        const { transactionId } = req.params;
        console.log(transactionId, "transactionId");
        const result = getATransaction(userId, transactionId);

        return res.status(200).send(result);
    }
    catch (err) {
        console.error("Transaction Error:", err);
        return res.status(400).send(`error: ${err.message}`);
    }
});


router.get('/summary', isAuthorized, (req, res) => {
    try {
        const userId = req.decodedToken.userId;
        const result = returnSummary(userId);

        return res.status(200).send(result);
    }
    catch (err) {
        console.error("Transaction Error:", err);
        return res.status(400).send(`error: ${err.message}`);
    }
});


module.exports = router;