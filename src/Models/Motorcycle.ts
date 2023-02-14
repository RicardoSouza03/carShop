import { Schema, UpdateWriteOpResult } from 'mongoose';
import IMotorycle from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

export default class CarODM extends AbstractODM<IMotorycle> {
  constructor() {
    const schema = new Schema<IMotorycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      category: { type: Number, required: true },
      engineCapacity: { type: Number, required: true },
    });
    super(schema, 'motorcycles');
  }

  public async updateById(id: string, obj: IMotorycle): Promise<UpdateWriteOpResult> {
    return this.model.updateOne({ _id: id }, { $set: { ...obj } });
  }
}