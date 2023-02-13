import { isValidObjectId } from 'mongoose';
import ICar from '../../Interfaces/ICar';
import InvalidParam from '../Errors/InvalidParams';
import NotFound from '../Errors/NotFound';

export interface CarValidations {
  checkCarExistence: (car: ICar | null) => void;
  validateCarId: (id: string) => void;
}

export default class CarValidate implements CarValidations {
  checkCarExistence(car: ICar | null): void {
    if (car == null) throw new NotFound('Car not found');
  }

  validateCarId(id: string): void {
    const validatedMongoId = isValidObjectId(id);
    if (typeof id !== 'string' || !validatedMongoId) throw new InvalidParam('Invalid mongo id');
  }
}