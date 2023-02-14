import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

export default class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(newCar: ICar) {
    super(newCar);
    this.doorsQty = newCar.doorsQty;
    this.seatsQty = newCar.seatsQty;
  }

  public getDoorsQty() { return this.doorsQty; }
  public setDoorsQty(newQty: number) { this.doorsQty = newQty; }

  public getSeatsQty() { return this.seatsQty; }
  public setSeatsQty(newQty: number) { this.seatsQty = newQty; }
}