const course = require('../models/Course');

class SignController {
    index(req, res) {
        course
            .find({})
            .then((courses) => res.json(courses))
            .catch(next); // error => next(error)
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SignController();
