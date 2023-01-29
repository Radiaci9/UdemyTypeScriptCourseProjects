import { RequestHandler } from "express";

export enum Methods {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DEL = 'delete',
  PATCH = 'patch',
}

export enum MetadataKeys {
  PATH = 'path',
  METHOD = 'method',
  MIDDLEWARE = 'middleware',
  VALIDATOR = 'validator',
}

export interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler,
}
