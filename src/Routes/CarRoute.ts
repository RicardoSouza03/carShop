import { Router } from 'express';
import CarController from '../Controllers/CarController';

const carRoute = Router();

carRoute.post(
  '/',
  (req, res, next) => new CarController(req, res, next).create(),
);

carRoute.get(
  '/',
  (req, res, next) => new CarController(req, res, next).getAll(),
);

export default carRoute;