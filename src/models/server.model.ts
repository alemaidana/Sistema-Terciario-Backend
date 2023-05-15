import express, { Application } from 'express';
import productRouter from '../routes/product';
import alumnoRouter from '../routes/alumno';
import sequelize from '../db/connection';
import cors from 'cors';

class Server{

    private app:Application;
    private port:string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.listen();
        this.middleware();
        this.route();
        this.dbConnect();
    }

    listen()
    {
      this.app.listen(this.port, () => { console.log(`Listening on port ${this.port}!!`); })  
    }

    route()
    {
      //this.app.use('/api/products', productRouter);  
      this.app.use('/api/alumnos', alumnoRouter);  
    }

    middleware()
    {
      this.app.use(express.json());
      this.app.use(cors());
    }

    async dbConnect()
    {
      try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    }
}

export default Server;