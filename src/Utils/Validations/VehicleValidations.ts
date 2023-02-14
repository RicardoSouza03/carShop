import { isValidObjectId } from 'mongoose';
import InvalidParam from '../Errors/InvalidParams';
import NotFound from '../Errors/NotFound';

export interface VehicleValidations<T> {
  checkVehicleExistence: (vehicle: T | null, service: string) => void;
  validateVehicleId: (id: string) => void;
}

export default class VehicleValidate<T> implements VehicleValidations<T> {
  checkVehicleExistence(vehicle: T | null, service: string): void {
    if (vehicle == null && service === 'Car') throw new NotFound('Car not found');
    if (vehicle == null && service === 'Motorcycle') throw new NotFound('Motorcycle not found');
  }

  validateVehicleId(id: string): void {
    const validatedMongoId = isValidObjectId(id);
    if (typeof id !== 'string' || !validatedMongoId) throw new InvalidParam('Invalid mongo id');
  }
}