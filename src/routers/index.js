const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    // app.get('/', (req, res) => {
    //     res.render('home')
    // })

    // app.get('/news', (req, res) => {
    //     // console.log(req.params)

    //     res.render('news')
    // })

    app.use('/news', newsRouter);

    app.use('/', siteRouter);

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
}

module.exports = route;
