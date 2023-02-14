import { NextFunction, Request, Response } from 'express';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';
import AbstractController from './AbstractController';

class CarController extends AbstractController<ICar, Car> {
  constructor(req: Request, res: Response, next: NextFunction) {
    const service = new CarService();
    super(req, res, next, service);
  }

  createVehicle(vehicle: any): ICar {
    return {
      model: vehicle.model,
      color: vehicle.color,
      year: vehicle.year,
      status: vehicle.status || false,
      buyValue: vehicle.buyValue,
      doorsQty: vehicle.doorsQty,
      seatsQty: vehicle.seatsQty,
    };
  }
}

export default CarController;