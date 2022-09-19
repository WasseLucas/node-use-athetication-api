import { NextFunction,Response,Request, Router } from "express";
const usersRoute = Router();

usersRoute.get('/users',(req: Request, res: Response, next: NextFunction)=>{
    const users = [{ userName:'Wasse' }];
    res.status(200).json({users});
})

export default usersRoute