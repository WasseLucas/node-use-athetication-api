
import {Request, Response ,NextFunction, Router } from "express";
import ForbiddenError from "../models/errors/forbidden.error.model";

const authorizationRoute = Router();

authorizationRoute.post('/token', (req: Request, res: Response, next: NextFunction) => {

    try {
        const authorizationHeader = req.headers['authorization']

        if(!authorizationHeader){
            throw new ForbiddenError('Credenciais não informada');
        }

        const [authenticantioType , token] = authorizationHeader.split(' ');

        if (authenticantioType !== 'Basic' || !token){

            throw new ForbiddenError('Tipo de authentication invalido')
        };

        const tokenContent =  Buffer.from(token, 'base64').toString('utf-8');

        const[username, password] = tokenContent.split(':');

        if(!username || !password){
            throw new ForbiddenError('credenciais não preenchidas')
        }

        console.log(username, password)



    } catch(error){

        next(error);
        
    }

   
})

export default authorizationRoute;