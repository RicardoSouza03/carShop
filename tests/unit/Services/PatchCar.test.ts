import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import { carInput, carOutput } from '../../Mocks/NewCar.mock';

describe('Testes para atualizar informações de um carro', function () {
  afterEach(function () {
    return sinon.restore();
  });

  it('Espera que acuse erro caso o id não seja do formato do mongo', async function () {
    sinon.stub(Model, 'findById').resolves();

    try {
      const service = new CarService();
      await service.getById('12');
    } catch (error) {
      expect((error as Error).message).to.deep.equal('Invalid mongo id');
    }
  });

  it('Espera que acuse erro caso o id não exista', async function () {
    sinon.stub(Model, 'findById').resolves();

    try {
      const service = new CarService();
      await service.getById('634852326b35b59438fbea2f');
    } catch (error) {
      expect((error as Error).message).to.deep.equal('Car not found');
    }
  });
  
  it('Espera que seja possivel atualizar com sucesso informações de um carro', async function () {
    sinon.stub(Model, 'updateOne').resolves();
    sinon.stub(Model, 'findById').resolves(carOutput);

    const service = new CarService();
    const result = await service.updateById('6348513f34c397abcad040b2', carInput);

    expect(result).to.deep.equal(carOutput);
  });
});