import express from "express";
import {Request,Response} from "express";
import bodyParser from "body-parser";
import hbs from "hbs";
import path from "path";
//import bootstrap from "bootstrap";

class App {
public app : express.Application;

constructor(){
    this.app =express();
    this.config();
    this.routes();
}

public config() :void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: false}));
    this.app.use('/', express.static('public'));
    this.app.use('/', express.static('node_modules/bootstrap/dist'));
    

    this.app.set('view engine','hbs');
    this.app.set('views' , path.join(__dirname,'../views'));
    this.app.use('/',express.static('views/carusel-img')); 
   
}

public routes() :void {
const router = express.Router();

router.get('/',(req:Request,res: Response) => {
    res.send('Hello');
});

router.get('/movie',(req:Request,res: Response) => {
    res.render('movie');
});

router.get('/carusel',(req:Request,res: Response) => {
    res.render('carusel');
});

this.app.use('/', router);
}

}

export default new App().app;