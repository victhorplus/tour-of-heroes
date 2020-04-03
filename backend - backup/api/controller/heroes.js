module.exports = () => {
    const heroes = require('../data/mock-heroes.json');
    const controller = {}

    controller.getHeroes = (req, res) => res.status(200).json(heroes.data);
    
    controller.getHero = (req, res) => {
        var id = req.params.id;
        return res.status(200).json(heroes.data.find((hero) => hero.id==id));
    }

    controller.insertHero = (req, res) => { res.status(200).json(req.body); console.log('rota POST'); }
    controller.updateHero = (req, res) => { res.status(200).json(req.body); console.log('rota UPDATE'); }
    controller.deleteHero = (req, res) => { res.status(200).json(req.body); console.log('rota DELETE'); }

    return controller;
}