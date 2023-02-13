import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create(): Promise<Response> {
    const newCar: ICar = {
      model: this.req.body.model,
      color: this.req.body.color,
      year: this.req.body.year,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    const createdCar = await this.service.registerCar(newCar);
    return this.res.status(201).json(createdCar);
  }

  public async getAll(): Promise<Response> {
    const allCars = await this.service.getAll();
    return this.res.status(200).json(allCars);
  }

  public async getById() {
    const { id } = this.req.params;

    try {
      const allCars = await this.service.getById(id);
      return this.res.status(200).json(allCars);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateById() {
    const { id } = this.req.params;

    const carToUpdate: ICar = {
      model: this.req.body.model,
      color: this.req.body.color,
      year: this.req.body.year,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const updatedCar = await this.service.updateById(id, carToUpdate);
      return this.res.status(200).json(updatedCar);
    } catch (error) {
      this.next(error);
    }
  }
}