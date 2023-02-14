import { NextFunction, Request, Response } from 'express';
import AbstractService from '../Services/AbstractService';

export default abstract class AbstractController<Interface, Domain> {
  protected req: Request;
  protected res: Response;
  protected next: NextFunction;
  protected service: AbstractService<Interface, Domain>;

  constructor(
    req: Request,
    res: Response,
    next: NextFunction,
    service: AbstractService<Interface, Domain>,
  ) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = service;
  }

  abstract createVehicle(vehicle: any): Interface;

  public async create(): Promise<Response> {
    const newVehicle = this.createVehicle(this.req.body);

    const createdVehicle = await this.service.registerVehicle(newVehicle);
    return this.res.status(201).json(createdVehicle);
  }

  public async getAll(): Promise<Response> {
    const allVehicles = await this.service.getAll();
    return this.res.status(200).json(allVehicles);
  }

  public async getById() {
    const { id } = this.req.params;

    try {
      const vehicleById = await this.service.getById(id);
      return this.res.status(200).json(vehicleById);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateById() {
    const { id } = this.req.params;
    const vehicleToUpdate = this.createVehicle(this.req.body);

    try {
      const updatedVehicle = await this.service.updateById(id, vehicleToUpdate);
      return this.res.status(200).json(updatedVehicle);
    } catch (error) {
      this.next(error);
    }
  }

  public async deleteById() {
    const { id } = this.req.params;

    try {
      await this.service.deleteById(id);
      return this.res.status(200).json({});
    } catch (error) {
      this.next(error);
    }
  }
}