const express    = require('express')
const bodyParser = require('body-parser')
const config     = require('config')


module.exports = () => {
    const app = express();
    const router = express.Router();
    

    // Setando variáveis de aplicação
    app.set('port', process.env.PORT || config.get('server.port'));

    // Midleware
    app.use(bodyParser.json());

    // Rotas
    const rota = require('../api/routes/heroes')(router)
    app.use('/' , rota.getHeroes);
    app.use('/' , rota.getHero);
    app.use('/hero' , rota.insertHero);
    app.use('/hero' , rota.updateHero);
    app.use('/hero' , rota.deleteHero);

    return app;
}