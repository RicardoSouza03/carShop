import ICar from '../Interfaces/ICar';

export default class Car {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | undefined;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(newCar: ICar) {
    this.id = newCar.id;
    this.model = newCar.model;
    this.year = newCar.year;
    this.color = newCar.color;
    this.status = newCar.status;
    this.buyValue = newCar.buyValue;
    this.doorsQty = newCar.doorsQty;
    this.seatsQty = newCar.seatsQty;
  }

  public getId() { return this.id; }
  public setId(newId: string) { this.id = newId; }

  public getModel() { return this.model; }
  public setModel(newModel: string) { this.model = newModel; }

  public getYear() { return this.year; }
  public setYear(newYear: number) { this.year = newYear; }

  public getColor() { return this.color; }
  public setColor(newColor: string) { this.color = newColor; }

  public getStatus() { return this.status; }
  public setStatus(newStatus: boolean) { this.status = newStatus; }

  public getBuyValue() { return this.buyValue; }
  public setBuyValue(newValue: number) { this.buyValue = newValue; }

  public getDoorsQty() { return this.doorsQty; }
  public setDoorsQty(newQty: number) { this.doorsQty = newQty; }

  public getSeatsQty() { return this.seatsQty; }
  public setSeatsQty(newQty: number) { this.seatsQty = newQty; }
}