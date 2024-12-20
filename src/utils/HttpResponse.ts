import {Response} from 'express';

interface IHttpResponse<T>{
        code: number,
        data ?:T,
        message: string 

}

export namespace HttpResponse {
    export const response = <T>(
      code: number,
      data?: T,
      message: string = "Transacción Éxitosa"
    ): IHttpResponse<T> => {
      return {
          code, data, message
      }
    };


    export const fail = <T>(
      res: Response,
      code: number,
      data?: T,
      message: string = "Ocurrio un error inesperado"  
    ) =>
      res.status(201).json({
        code,
        data,
        message,
      });
    
}


