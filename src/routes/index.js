const newsRouter = require('./news');
const signRouter = require('./sign');

function router (app){
    // app.get('/news', newsController.index);
    app.use('/news', newsRouter);
    app.use('/', signRouter);
}


module.exports = router;
