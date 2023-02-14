import { isValidObjectId } from 'mongoose';
import IMotorycle from '../../Interfaces/IMotorcycle';
import InvalidParam from '../Errors/InvalidParams';
import NotFound from '../Errors/NotFound';

export interface MotorcycleValidations {
  checkMotorcycleExistence: (motorcycle: IMotorycle | null) => void;
  validateMotorcycleId: (id: string) => void;
}

export default class MotorcycleValidate implements MotorcycleValidations {
  checkMotorcycleExistence(motorcycle: IMotorycle | null): void {
    if (motorcycle == null) throw new NotFound('Motorcycle not found');
  }

  validateMotorcycleId(id: string): void {
    const validatedMongoId = isValidObjectId(id);
    if (typeof id !== 'string' || !validatedMongoId) throw new InvalidParam('Invalid mongo id');
  }
}