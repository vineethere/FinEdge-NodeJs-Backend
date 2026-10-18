const express = require('express');
const app = express();
const router = express.Router();
app.use(express.json());


router.get('/health', (req, res) => {
    try {
        res.status(200).send('APIs are working , go on');
    }
    catch {
        res.status(400).send('There is some issue in APIs , make sure to come back later');
    }
});


module.exports = router