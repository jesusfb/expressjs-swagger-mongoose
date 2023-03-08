import express,{Express,Request,Response,NextFunction} from 'express';

export async function auth(req:Request,res:Response,next:NextFunction) {
console.log(`${req.hostname}:8000${req.url}`);
    
    console.log(req.body);
    
    return next()
}