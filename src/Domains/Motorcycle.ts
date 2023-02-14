import IMotorycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(newMotorcycle: IMotorycle) {
    super(newMotorcycle);
    this.category = newMotorcycle.category;
    this.engineCapacity = newMotorcycle.engineCapacity;
  }

  public getCategory() { return this.category; }
  public setCategory(newCategory: string) { this.category = newCategory; }

  public getEngine() { return this.engineCapacity; }
  public setEngine(newEngine: number) { this.engineCapacity = newEngine; }
}