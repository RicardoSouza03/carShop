import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import { carInput, carOutput } from '../../Mocks/NewCar.mock';

describe('Se é possivel criar um novo carro', function () {
  afterEach(function () {
    return sinon.restore();
  });

  it('Espera que seja retornado o novo carro criado', async function () {
    sinon.stub(Model, 'create').resolves(carOutput);

    const service = new CarService();
    const result = await service.registerCar(carInput);

    expect(result).to.deep.equal(carOutput);
  });

  it('Espera que não retorne nada caso dê algum erro na criação do carro', async function () {
    sinon.stub(Model, 'create').resolves(null);

    const service = new CarService();
    const result = await service.registerCar(carInput);

    expect(result).to.deep.equal(null);
  });
});