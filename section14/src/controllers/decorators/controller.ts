import { NextFunction, Request, RequestHandler, Response } from 'express';
import 'reflect-metadata';
import AppRouter from '../../AppRouter';
import { MetadataKeys, Methods } from './types';


function bodyValidators(keys: string[]): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction) {
    const body = req.body;

    if(!body) {
      res.status(422).send('Invalid request');
      return;
    }

    for (let key of keys) {
      if (!body[key]) {
        res.status(422).send(`'${key}' property is missed`);
        return;
      }
    }

    next();
  }
}

export function controller(routePrefix: string) {
  return function(target: Function) {
    const router = AppRouter.getInstance();
    
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];

      const path = Reflect.getMetadata(MetadataKeys.PATH, target.prototype, key);
      const method: Methods = Reflect.getMetadata(MetadataKeys.METHOD, target.prototype, key);
      const middlewares = Reflect.getMetadata(MetadataKeys.MIDDLEWARE, target.prototype, key) || [];
      const requiredBodyProps = Reflect.getMetadata(MetadataKeys.VALIDATOR, target.prototype, key) || [];

      const validator = bodyValidators(requiredBodyProps);

      if(path) {
        router[method](`${routePrefix}${path}`, ...middlewares, validator, routeHandler);
      }
    }
  }
}
