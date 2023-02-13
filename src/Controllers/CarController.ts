import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

export default class CarController {
  private _req: Request;
  private _res: Response;
  private _next: NextFunction;
  private _service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this._req = req;
    this._res = res;
    this._next = next;
    this._service = new CarService();
  }

  public async create(): Promise<Response> {
    const newCar: ICar = {
      model: this._req.body.model,
      color: this._req.body.color,
      year: this._req.body.year,
      status: this._req.body.status,
      buyValue: this._req.body.buyValue,
      doorsQty: this._req.body.doorsQty,
      seatsQty: this._req.body.seatsQty,
    };

    const createdCar = await this._service.registerCar(newCar);
    return this._res.status(200).json(createdCar);
  }
}