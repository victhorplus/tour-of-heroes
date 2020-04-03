module.exports = router => {
    const controller = require('../controller/heroes')();
    const route = {}

    route.getHeroes = router.get('/', controller.getHeroes);
    route.getHero   = router.get('/:id', controller.getHero);
    route.insertHero= router.post('/hero', controller.insertHero);
    route.updateHero= router.put('/hero', controller.updateHero);
    route.deleteHero= router.delete('/hero', controller.deleteHero);

    return route;
}