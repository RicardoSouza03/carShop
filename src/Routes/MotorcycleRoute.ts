import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const motorcycleRoute = Router();

motorcycleRoute.post(
  '/',
  (req, res, next) => new MotorcycleController(req, res, next).create(),
);

export default motorcycleRoute;