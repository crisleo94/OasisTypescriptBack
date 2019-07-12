import { Router } from 'express';

import pedidosController from '../controllers/pedidosController'

class PedidosRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', pedidosController.list);
        this.router.get('/:id', pedidosController.getOne);
        this.router.post('/', pedidosController.create);
        this.router.delete('/:id', pedidosController.delete);
        this.router.put('/:id', pedidosController.update);
    }
}

const pedidosRoutes = new PedidosRoutes();

export default pedidosRoutes.router;