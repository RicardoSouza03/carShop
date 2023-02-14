import { NextFunction, Request, Response } from 'express';
import IMotorycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';
import AbstractController from './AbstractController';

export default class MotorcycleController extends AbstractController {
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    super(req, res, next);
    this.service = new MotorcycleService();
  }

  public async create(): Promise<Response> {
    const newMotorcycle: IMotorycle = {
      model: this.req.body.model,
      color: this.req.body.color,
      year: this.req.body.year,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    const createdMotorcycle = await this.service.registerMotorcycle(newMotorcycle);
    return this.res.status(201).json(createdMotorcycle);
  }

  public async getAll(): Promise<Response> {
    const allMotorcycles = await this.service.getAll();
    return this.res.status(200).json(allMotorcycles);
  }

  public async getById() {
    const { id } = this.req.params;

    try {
      const motorcycleById = await this.service.getById(id);
      return this.res.status(200).json(motorcycleById);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateById() {
    const { id } = this.req.params;

    const motorcycleToUpdate: IMotorycle = {
      model: this.req.body.model,
      color: this.req.body.color,
      year: this.req.body.year,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const updatedMotorcycle = await this.service.updateById(id, motorcycleToUpdate);
      return this.res.status(200).json(updatedMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }
}