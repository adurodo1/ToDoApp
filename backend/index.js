import express from 'express';
import mongoose  from 'mongoose';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import routes from './routes/TodoRoutes'
import cors from 'cors';
mongoose.Promise= global.Promise;
mongoose.connect('mongodb://localhost/ToDoDB',{useNewUrlParser:true,useUnifiedTopology:true})


const app =express();
app.set('port', 4000);
app.use(logger('dev'));
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser());

app.use(cors());
routes(app); // routes takes app has a parameter.
 
app.listen(app.get('port'),()=>{
    console.log('Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.');
});