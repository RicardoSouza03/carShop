import { Router } from 'express';
import CarController from '../Controllers/CarController';

const carRoute = Router();

carRoute.put(
  '/:id',
  (req, res, next) => new CarController(req, res, next).updateById(),
);

carRoute.post(
  '/',
  (req, res, next) => new CarController(req, res, next).create(),
);

carRoute.get(
  '/:id',
  (req, res, next) => new CarController(req, res, next).getById(),
);

carRoute.get(
  '/',
  (req, res, next) => new CarController(req, res, next).getAll(),
);

export default carRoute;