import IVehicle from '../Interfaces/IVehicle';

export default class Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | undefined;
  protected buyValue: number;

  constructor(newVehicle: IVehicle) {
    this.id = newVehicle.id;
    this.model = newVehicle.model;
    this.year = newVehicle.year;
    this.color = newVehicle.color;
    this.status = newVehicle.status;
    this.buyValue = newVehicle.buyValue;
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
}