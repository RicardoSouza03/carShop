import EnumCategory from '../Utils/EnumCategory';
import IVehicle from './IVehicle';

export default interface IMotorycle extends IVehicle {
  category: EnumCategory;
  engineCapacity: number;
}