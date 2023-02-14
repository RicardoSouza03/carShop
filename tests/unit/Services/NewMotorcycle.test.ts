import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import { motorcycleInput, motorcycleOutPut } from '../../Mocks/NewMotorcycle.mock';

describe('Se é possivel criar uma nova moto', function () {
  afterEach(function () {
    return sinon.restore();
  });

  it('Espera que seja retornado a nova moto criada', async function () {
    sinon.stub(Model, 'create').resolves(motorcycleOutPut);

    const service = new MotorcycleService();
    const result = await service.registerMotorcycle(motorcycleInput);

    expect(result).to.deep.equal(motorcycleOutPut);
  });

  it('Espera que não retorne nada caso dê algum erro na criação da moto', async function () {
    sinon.stub(Model, 'create').resolves(null);

    const service = new MotorcycleService();
    const result = await service.registerMotorcycle(motorcycleInput);

    expect(result).to.deep.equal(null);
  });
});