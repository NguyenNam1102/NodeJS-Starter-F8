const Course = require('../models/Course')
const { multipleMongooseToObject } = require('../../util/mongoose')

class SiteController {
    // [GET] /
    index(req, res, next) {

        // Với callback
        // Course.find().then((courses, err) => {
        //     res.json(courses);
        // }).catch(() => { res.status(400).json({ error: 'ERROR!!!' }) });

        // Với promise
        Course.find({})
            .then(courses => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses)
                })
            })
            .catch(next)
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
