import express, { Application } from 'express';
import alumnoRouter from '../routes/alumno';
import docentesRouter from '../routes/docente';
import userRouter from '../routes/user';
import cors from 'cors';
import { User }from './user.model';
import { Alumno }from './alumno.model';
import { Docente } from './docente.model';

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
      this.app.use('/api/users', userRouter);  
      this.app.use('/api/alumnos', alumnoRouter);
      this.app.use('/api/docentes', docentesRouter);
    }

    middleware()
    {
      this.app.use(express.json());
      this.app.use(cors());
    }

    async dbConnect()
    {
      try {
        //await sequelize.authenticate();
        await User.sync();
        await Alumno.sync();
        await Docente.sync();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    }
}

export default Server;