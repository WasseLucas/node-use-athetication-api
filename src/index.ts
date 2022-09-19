//import express
import express, {Request, Response, NextFunction } from 'express';
import usersRoute from './routes/users.routes';

const app = express();

app.use(usersRoute);

app.get('/status', (req: Request, res: Response, next: NextFunction) =>{
    res.status(200).send({foo: 'bar'});
});

app.listen(3000,()=>{
    console.log('Aplicação rodando na porta 3000');
});

