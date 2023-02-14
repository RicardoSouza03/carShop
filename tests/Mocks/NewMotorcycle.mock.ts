import Motorcycle from '../../src/Domains/Motorcycle';
import IMotorycle from '../../src/Interfaces/IMotorcycle';
import EnumCategory from '../../src/Utils/EnumCategory';

const motorcycleInput: IMotorycle = {
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: EnumCategory.Street,
  engineCapacity: 600,
};

const motorcycleOutPut: Motorcycle = new Motorcycle({
  id: '6348513f34c397abcad040b2',
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: EnumCategory.Street,
  engineCapacity: 600,
});

export {
  motorcycleInput,
  motorcycleOutPut,
};