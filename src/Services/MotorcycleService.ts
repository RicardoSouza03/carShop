import Motorcycle from '../Domains/Motorcycle';
import IMotorycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/Motorcycle';
import MotorcycleValidate from '../Utils/Validations/MotorcycleValidations';

export default class MotorcycleService {
  private motorcycleODM = new MotorcycleODM();
  private motorcycleValidations = new MotorcycleValidate();

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

  public async getAll() {
    const allMotorcycles = await this.motorcycleODM.getAll();
    return allMotorcycles.map((motorcycle) => this.createMotorcycle(motorcycle));
  }

  public async getById(id: string) {
    this.motorcycleValidations.validateMotorcycleId(id);
    
    const foundMotorcycle = await this.motorcycleODM.getById(id);
    this.motorcycleValidations.checkMotorcycleExistence(foundMotorcycle);

    return this.createMotorcycle(foundMotorcycle);
  }

  public async updateById(id: string, newInfo: IMotorycle) {
    this.motorcycleValidations.validateMotorcycleId(id);

    await this.motorcycleODM.updateById(id, newInfo);
    const updatedMotorcycle = await this.getById(id);

    return updatedMotorcycle;
  }

  public async deleteById(id: string): Promise<void> {
    this.motorcycleValidations.validateMotorcycleId(id);

    const foundMotorcycle = await this.motorcycleODM.getById(id);
    this.motorcycleValidations.checkMotorcycleExistence(foundMotorcycle);

    await this.motorcycleODM.delete(id);
  }
}