import IMotorycle from '../Interfaces/IMotorcycle';
import EnumCategory from '../Utils/EnumCategory';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category: EnumCategory;
  private engineCapacity: number;

  constructor(newMotorcycle: IMotorycle) {
    super(newMotorcycle);
    this.category = newMotorcycle.category;
    this.engineCapacity = newMotorcycle.engineCapacity;
  }

  public getCategory() { return this.category; }
  public setCategory(newCategory: EnumCategory) { this.category = newCategory; }

  public getEngine() { return this.engineCapacity; }
  public setEngine(newEngine: number) { this.engineCapacity = newEngine; }
}