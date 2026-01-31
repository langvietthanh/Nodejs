

class SignController {

    index(req, res){
        res.render('home');
    }

    search(req, res){
        res.render('search');
    }

}


module.exports = new SignController();