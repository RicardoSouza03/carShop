import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import { motorcycleInput, motorcycleOutPut } from '../../Mocks/NewMotorcycle.mock';

describe('Testes para atualizar informações de uma moto', function () {
  afterEach(function () {
    return sinon.restore();
  });

  it('Espera que acuse erro caso o id não seja do formato do mongo', async function () {
    sinon.stub(Model, 'findById').resolves();

    try {
      const service = new MotorcycleService();
      await service.getById('12');
    } catch (error) {
      expect((error as Error).message).to.deep.equal('Invalid mongo id');
    }
  });

  it('Espera que acuse erro caso o id não exista', async function () {
    sinon.stub(Model, 'findById').resolves();

    try {
      const service = new MotorcycleService();
      await service.getById('634852326b35b59438fbea2f');
    } catch (error) {
      expect((error as Error).message).to.deep.equal('Motorcycle not found');
    }
  });
  
  it('Espera que seja possivel atualizar com sucesso informações de uma moto', async function () {
    sinon.stub(Model, 'updateOne').resolves();
    sinon.stub(Model, 'findById').resolves(motorcycleOutPut);

    const service = new MotorcycleService();
    const result = await service.updateById('6348513f34c397abcad040b2', motorcycleInput);

    expect(result).to.deep.equal(motorcycleOutPut);
  });
});