module.exports = app => {
    const controller = require('../controller/heroes')();

    app.route('/api/heroes')
        .get(controller.getHeroes)
        .post(controller.insertHero)

    app.route('/api/heroes/:id')
        .get(controller.getHero)
        .put(controller.updateHero)
        .delete(controller.deleteHero)
    
    return app;
}