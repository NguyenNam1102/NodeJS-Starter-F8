const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {

    var a = 5;
    var b = 7;
    var c = a + b

    res.send('Hello ExpressJS :v !')
})


// 127.0.0.1 - localhost

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})