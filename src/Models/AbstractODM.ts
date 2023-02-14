import { model, Model, models, Schema, UpdateQuery } from 'mongoose';

export default abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema<T>;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.modelName = modelName;
    this.schema = schema;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async getAll(): Promise<Array<T>> {
    return this.model.find();
  }

  public async getById(id: string): Promise<T | null> {
    return this.model.findById(id);
  }
  
  public async delete(id: string): Promise<void> {
    this.model.deleteOne({ _id: id });
  }

  public async updateById(id: string, obj: T): Promise<T | null> {
    return this.model.findByIdAndUpdate({ _id: id }, { ...obj } as UpdateQuery<T>);
  }
}