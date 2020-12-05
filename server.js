const mongoose = require('mongoose'); 

require('dotenv').config();


 mongoose.set('useUnifiedTopology', true,'useFindAndModify', false); 

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true, 
    useFindAndModify:false, 
    useCreateIndex:true 
}); 

mongoose.Promise = global.Promise; 
mongoose.connection.on('error', (error) => {
    console.log('Erro ao conectar ao mongoose '+error.message); 
});


const app = require('./app'); 
 

app.set('port', process.env.PORT || 8888); 
const server = app.listen(app.get('port'), () =>{
    console.log('Servidor rodando na porta '+server.address().port); 
})



