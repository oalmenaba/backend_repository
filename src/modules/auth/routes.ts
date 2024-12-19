import { NextFunction, Request, Response, Router } from "express";
import { RegisterController } from "./controller";

const  router = Router();

router.post('/register',async(req:Request,res:Response, next:NextFunction)=>{
    try {
        const resposnse  = await RegisterController(req);
        res.status(201).json(resposnse);
    } catch (error) {
        throw error;
        
    }
});

export default router;