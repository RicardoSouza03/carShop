import { isValidObjectId } from 'mongoose';
import ICar from '../../Interfaces/ICar';
import InvalidParam from '../Errors/InvalidParams';

export interface CarValidations {
  checkCarExistence: (car: ICar) => void;
  validateCarId: (id: string) => void;
}

export default class CarValidate implements CarValidations {
  checkCarExistence(car: ICar): void {
    if (!car) throw new InvalidParam('Car not found');
  }

  validateCarId(id: string): void {
    const validatedMongoId = isValidObjectId(id);
    if (typeof id !== 'string' || !validatedMongoId) throw new InvalidParam('Invalid mongo id');
  }
}