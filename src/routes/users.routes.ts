import { NextFunction, Response, Request, Router } from "express";
const usersRoute = Router();

usersRoute.get('/users',(req: Request, res: Response, next: NextFunction)=>{
    const users = [{ userName:'Wasse' }];
    res.status(200).json({users});
});

usersRoute.get('users/:uuid', (req: Request < { uuid: string } >, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;    
    res.status(200).send({uuid})
});



export default usersRoute;