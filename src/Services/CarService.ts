import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import CarValidate from '../Utils/Validations/CarValidations';

export default class CarService {
  private carODM = new CarODM();
  private carValidations = new CarValidate();

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

  public async getById(id: string) {
    this.carValidations.validateCarId(id);
    
    const foundCar = await this.carODM.getById(id);
    this.carValidations.checkCarExistence(foundCar);

    return this.createCar(foundCar);
  }

  public async updateById(id: string, newInfo: ICar) {
    this.carValidations.validateCarId(id);

    await this.carODM.updateById(id, newInfo);
    const updatedCar = await this.getById(id);

    return updatedCar;
  }
}