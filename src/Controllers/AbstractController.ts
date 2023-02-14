import { NextFunction, Request, Response } from 'express';

export default class AbstractController {
  protected req: Request;
  protected res: Response;
  protected next: NextFunction;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
  }
}