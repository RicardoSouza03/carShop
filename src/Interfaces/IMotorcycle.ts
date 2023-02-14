import IVehicle from './IVehicle';

export default interface IMotorycle extends IVehicle {
  category: 'Street' | 'Custom' | 'Trail';
  engineCapacity: number;
}