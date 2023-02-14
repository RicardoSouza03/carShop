import Motorcycle from '../Domains/Motorcycle';
import IMotorycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/Motorcycle';

export default class MotorcycleService {
  private motorcycleODM = new MotorcycleODM();

  private createMotorcycle(motorcycle: IMotorycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }

  public async registerMotorcycle(motorcycle: IMotorycle) {
    const newMotorcycle = await this.motorcycleODM.create(motorcycle);
    return this.createMotorcycle(newMotorcycle);
  }
}