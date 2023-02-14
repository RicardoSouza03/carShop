import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const motorcycleRoute = Router();

motorcycleRoute.put(
  '/:id',
  (req, res, next) => new MotorcycleController(req, res, next).updateById(),
);

motorcycleRoute.post(
  '/',
  (req, res, next) => new MotorcycleController(req, res, next).create(),
);

motorcycleRoute.get(
  '/:id',
  (req, res, next) => new MotorcycleController(req, res, next).getById(),
);

motorcycleRoute.get(
  '/',
  (req, res, next) => new MotorcycleController(req, res, next).getAll(),
);

motorcycleRoute.delete(
  '/:id',
  (req, res, next) => new MotorcycleController(req, res, next).deleteById(),
);

export default motorcycleRoute;