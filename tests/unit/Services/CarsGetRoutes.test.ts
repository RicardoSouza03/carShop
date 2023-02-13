import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import listOfCars from '../../Mocks/AllCars.mock';

describe('Testes para rotas get de cars', function () {
  afterEach(function () {
    return sinon.restore();
  });

  it('Espera que seja possivel retornar uma lista com todos os carros', async function () {
    sinon.stub(Model, 'find').resolves(listOfCars);

    const service = new CarService();
    const result = await service.getAll();
    
    expect(result).to.deep.equal(listOfCars);
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

  it('Espera que seja retornado um carro quando passado um id válido', async function () {
    sinon.stub(Model, 'findById').resolves(listOfCars[0]);

    const service = new CarService();
    const result = await service.getById('634852326b35b59438fbea2f');
  
    expect(result).to.deep.equal(listOfCars[0]);
  });
});