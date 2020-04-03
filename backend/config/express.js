const express    = require('express')
const bodyParser = require('body-parser');
const config     = require('config')
const cors       = require('cors')

module.exports = () => {
    const app = express();

    
    // Setando variáveis de aplicação
    app.set('port', process.env.PORT || config.get('server.port'));

    // Midleware
    app.use(bodyParser.json());

    app.use(cors())
    
    // Rotas
    require('../api/routes/heroes')(app)

    return app;
}