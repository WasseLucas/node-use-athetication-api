//import express
import express, {Request, Response, NextFunction } from 'express';
import { json } from 'stream/consumers';
import statusRoute from './routes/status.routes';
import usersRoute from './routes/users.routes';

const app = express();

// Configuração da aplicação
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Configuração das rotas
app.use(usersRoute);

app.use(statusRoute);

app.get('/status', (req: Request, res: Response, next: NextFunction) =>{
    res.status(200).send({foo: "Sucesso!"});
});
//Inicialização do servidor
app.listen(3000,()=>{
    console.log('Aplicação rodando na porta 3000');
});

