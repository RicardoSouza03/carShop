import AbstractODM from '../Models/AbstractODM';
import CarODM from '../Models/CarODM';
import VehicleValidate from '../Utils/Validations/VehicleValidations';

export default abstract class AbstractService<Interface, Model> {
  private vehicleODM: AbstractODM<Interface>;
  private vehicleValidation: VehicleValidate<Interface>;
  private vehicleType: string;

  constructor(ODM: AbstractODM<Interface>) {
    this.vehicleODM = ODM;
    this.vehicleValidation = new VehicleValidate();
    this.vehicleType = this.assertVehicleType();
  }

  private assertVehicleType() {
    if (this.vehicleODM instanceof CarODM) return 'Car';
    return 'Motorcycle';
  }

  abstract createVehicle(vehicle: Interface): Model | null;

  public async registerVehicle(vehicle: Interface) {
    const newVehicle = await this.vehicleODM.create(vehicle);
    return this.createVehicle(newVehicle);
  }

  public async getAll() {
    const allVehicles = await this.vehicleODM.getAll();
    return allVehicles.map((vehicle) => this.createVehicle(vehicle));
  }

  public async getById(id: string) {
    this.vehicleValidation.validateVehicleId(id);
    
    const foundVehicle = await this.vehicleODM.getById(id);
    this.vehicleValidation.checkVehicleExistence(foundVehicle, this.vehicleType);

    return this.createVehicle(foundVehicle as Interface);
  }

  public async updateById(id: string, newInfo: Interface) {
    this.vehicleValidation.validateVehicleId(id);

    await this.vehicleODM.updateById(id, newInfo);
    const updatedMotorcycle = await this.getById(id);

    return updatedMotorcycle;
  }

  public async deleteById(id: string): Promise<void> {
    this.vehicleValidation.validateVehicleId(id);

    const foundMotorcycle = await this.vehicleODM.getById(id);
    this.vehicleValidation.checkVehicleExistence(foundMotorcycle, this.vehicleType);

    await this.vehicleODM.delete(id);
  }
}