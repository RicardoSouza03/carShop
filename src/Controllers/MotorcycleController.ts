import { NextFunction, Request, Response } from 'express';
import Motorcycle from '../Domains/Motorcycle';
import IMotorycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';
import AbstractController from './AbstractController';

class MotorcycleController extends AbstractController<IMotorycle, Motorcycle> {
  constructor(req: Request, res: Response, next: NextFunction) {
    const service = new MotorcycleService();
    super(req, res, next, service);
  }

  createVehicle(vehicle: any): IMotorycle {
    return {
      model: vehicle.model,
      color: vehicle.color,
      year: vehicle.year,
      status: vehicle.status || false,
      buyValue: vehicle.buyValue,
      category: vehicle.category,
      engineCapacity: vehicle.engineCapacity,
    };
  }
}

export default MotorcycleController;