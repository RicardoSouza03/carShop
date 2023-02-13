import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private carODM = new CarODM();

  public async registerCar(car: ICar): Promise<ICar> {
    const newCar = await this.carODM.create(car);
    return newCar;
  } 
}