const estudantes = require('./estudantesRoute');

module.exports= app=>{
    app.use(estudantes);
}