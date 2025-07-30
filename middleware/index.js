const express = require('express')

const port = 8000;

const app = express()

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`server start is on port:-${port}`);
})