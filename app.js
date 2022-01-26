const express = require('express')
const app = express();

app.use((req, res, next) => {
    // console.log('Logging HTTP Request Structure>>>>>', req);
    res.json({
        message: "Server Started...!"
    })
});


module.exports = app;