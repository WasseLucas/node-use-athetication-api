import { NextFunction, Response, Request, Router } from "express";

import {OK, StatusCodes} from 'http-status-codes'

const usersRoute = Router();

usersRoute.get('/users',(req: Request, res: Response, next: NextFunction)=>{
    const users = [{ userName:'Wasse' }];
    res.status( StatusCodes.OK ).json({ users });
});

usersRoute.get('users/:uuid', (req: Request < { uuid: string } >, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;    
    res.status( StatusCodes.OK ).send({ uuid });
});



export default usersRoute;