import { NextFunction, Request, Response, Router } from "express";
import { RegisterController } from "./controller";
import { CodesHttpEnum } from '../../enum/codesHttpEnum';
import { HttpResponse} from '../../utils/HttpResponse';

const  router = Router();

router.post('/register',async(req:Request,res:Response, next:NextFunction)=>{
    try {
        const resposnse  = await RegisterController(req);
        res.status(resposnse.code).json(resposnse);
    } catch (error) {
        HttpResponse.fail(res, CodesHttpEnum.internalServerError, (error as any).toString())}       
});

export default router;