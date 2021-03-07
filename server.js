const express = require('express');
const app = express();
const rutas = require('./Routes/rutas');
const mongoose = require('mongoose');



// mongoose.connect('mongodb://localhost:27017/historia', {
mongoose.connect('mongodb+srv://admin:admin@cluster0.c7yba.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {

    useNewUrlParser: true, 
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Conectado a MongoDB');
  console.log('***************************************************');
});


app.set('port', process.env.PORT || 1313 );
app.set('view engine','ejs');


app.use(express.urlencoded({extended: false}));
app.use('/', rutas);




app.listen(app.get('port'), (req, res) => {
    console.log('*************************************')
    console.log('Server runing on port:', app.get('port'));
})