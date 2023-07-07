const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const { log } = require('console')

const route = require('./routers')

const app = express()
const port = 3001

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

// HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', handlebars.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

// Routes init
route(app)

// app.get('/', (req, res) => {
//     res.render('home')
// })

// app.get('/news', (req, res) => {
//     // console.log(req.params)

//     res.render('news')
// })

// app.get('/search', (req, res) => {
//     // Query parameters (tham số truy vấn)
//     // http://localhost:3001/search?q=namnguyen&age=23&add=TN
//     // console.log(req.query)
//     // const { add } = req.query
//     // console.log(add)

//     res.render('search')
// })

// app.post('/search', (req, res) => {
//     console.log(req.body);
//     res.send('hello kitty')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
