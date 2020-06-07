
import expres from 'express';
import PointsController from './controllers/PointsControler';
import ItemsController from './controllers/itemsController';

const routes = expres.Router();


const pointsControler = new PointsController();
const itensController = new ItemsController();

routes.get('/items', itensController.index )

routes.get('/points', pointsControler.index);
routes.post('/points', pointsControler.create);
routes.get('/point/:id', pointsControler.show);




export default routes;