import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private carODM = new CarODM();

  private createCar(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async registerCar(car: ICar) {
    const newCar = await this.carODM.create(car);
    return this.createCar(newCar);
  }

  public async getAll() {
    const allCars = await this.carODM.getAll();
    return allCars.map((car) => this.createCar(car));
  }
}