export default class Car {
  protected _id?: string | undefined;
  protected _model: string;
  protected _year: number;
  protected _color: string;
  protected _status?: boolean = false;
  protected _buyValue: number;
  private _doorsQty = 0;
  private _seatsQty = 0;

  constructor(
    id: string | undefined,
    model: string,
    year: number,
    color: string,
    status: boolean,
    buyValue: number,
  ) {
    this._id = id;
    this._model = model;
    this._year = year;
    this._color = color;
    this._status = status;
    this._buyValue = buyValue;
  }

  public getId() { return this._id; }
  public setId(newId: string) { this._id = newId; }

  public getModel() { return this._model; }
  public setModel(newModel: string) { this._model = newModel; }

  public getYear() { return this._year; }
  public setYear(newYear: number) { this._year = newYear; }

  public getColor() { return this._color; }
  public setColor(newColor: string) { this._color = newColor; }

  public getStatus() { return this._status; }
  public setStatus(newStatus: boolean) { this._status = newStatus; }

  public getBuyValue() { return this._buyValue; }
  public setBuyValue(newValue: number) { this._buyValue = newValue; }

  public getDoorsQty() { return this._doorsQty; }
  public setDoorsQty(newQty: number) { this._doorsQty = newQty; }

  public getSeatsQty() { return this._seatsQty; }
  public setSeatsQty(newQty: number) { this._seatsQty = newQty; }
}