module.exports = () => {
    const heroes = require('../data/mock-heroes.json');
    const controller = {}

    controller.getHeroes = (req, res) => {
        res.status(200).json(heroes);
    }
    
    controller.getHero = (req, res) => {
        var id = req.params.id;
        if(!heroExist(id)){
            res.status(404).json({
                message: "Héroi nao encontrado",
                success: false
            })
        }

        res.status(200).json(heroes.find((hero) => hero.id==id));
    }

    controller.insertHero = (req, res) => {
        hero = {
            id: genID(heroes),
            name: req.body.name,
            img: req.body.img
        }

        heroes.push(hero);
        res.status(201).json({
            message: "Héroi inserido com sucesso",
            success: true
        });
    }

    controller.updateHero = (req, res) => {
        var id = req.params.id;
        if(!heroExist(id)){
            res.status(404).json({
                message: "Héroi nao encontrado",
                success: false
            })
        }
        var index = heroes.findIndex(hero => hero.id==id);
        var updatedHero = {
            "id": + id,
            "name": req.body.name,
            "img": req.body.img
        }
        heroes.splice(index, 1, updatedHero)

        res.status(200).json({
            message: "Héroi atualizado com sucesso",
            success: true
        });
    }

    controller.deleteHero = (req, res) => {
        var id = req.params.id;
        if(!heroExist(id)){
            res.status(404).json({
                message: "Héroi nao encontrado",
                success: false
            })
        }
        
        var index = heroes.findIndex(hero => hero.id==id);
        heroes.splice(index, 1);

        res.status(200).json({
            message: "Héroi deletado com sucesso",
            success: true
        });
    }

    function genID(heroes){
        return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id))+1: 1;
    }

    function heroExist(id){
        return heroes.find(hero => hero.id==id) ? true : false;
    }
    
    return controller;
}