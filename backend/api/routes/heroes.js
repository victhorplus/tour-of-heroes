module.exports = app => {
    const controller = require('../controller/heroes')();

    app.get('/api/heroes', controller.listHeroes);
    app.get('/api/heroes/:id', controller.getHero);
}