import Motorcycle from '../Domains/Motorcycle';
import IMotorycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/Motorcycle';
import AbstractService from './AbstractService';

export default class MotorcycleService extends AbstractService<IMotorycle, Motorcycle> {
  constructor() {
    const motorcycleODM = new MotorcycleODM();
    super(motorcycleODM);
  }

  createVehicle(motorcycle: IMotorycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }
}