import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import allMotorcycles from '../../Mocks/AllMotorcycles.mock';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Testes para deletar uma moto', function () {
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

  it('Espera que seja deletada com sucesso uma moto', async function () {
    sinon.stub(Model, 'findById').resolves(allMotorcycles[0]);
    sinon.stub(Model, 'deleteOne').resolves();

    const service = new MotorcycleService();
    const result = await service.deleteById('634852326b35b59438fbea2f');

    expect(result).to.deep.equal(undefined);
  });
});