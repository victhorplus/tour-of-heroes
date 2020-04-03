module.exports = () => {
    const heroes = require('../data/mock-heroes.json');
    const controller = {}

    controller.listHeroes = (req, res) => res.status(200).json(heroes.data);
    
    controller.getHero = (req, res) => {
        var id = req.params.id;
        return res.status(200).json(heroes.data.find((hero) => hero.id==id));
    }

    return controller;
}