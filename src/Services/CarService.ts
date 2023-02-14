import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import AbstractService from './AbstractService';

export default class CarService extends AbstractService<ICar, Car> {
  constructor() {
    const carODM = new CarODM();
    super(carODM);
  }

  public createVehicle(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }
}