import { Request, Response } from 'express';
import DataBase from '../database';

class PedidosController {

    public list (req: Request, res: Response) {
        const query = 'SELECT * FROM pedidos';
        DataBase.ejecutarConsulta(query, [req.body], (err: any, resul: Object[]) => {
            if (err) {
                res.json({
                    ok: false,
                    message: 'La selección no existe'
                });
            } else {
                res.json({
                    ok: true,
                    users: resul
                })
            }
        })
    }

    public getOne (req: Request, resp: Response) {
        const id = req.params.id;
        const escapedId = DataBase.instance.cnn.escape(id);
        const query = `SELECT * FROM pedidos WHERE idpedidos = ${ escapedId }`;
        DataBase.ejecutarConsulta(query, [req.body], (err: any, resul: Object[]) => {
            if (err) {
                resp.json({
                    ok: false,
                    message: 'La consulta no es correcta'
                });
            } else {
                resp.json({
                    ok: true,
                    user: resul
                });
            }
        });
    }

    public create (req: Request, resp: Response) {
        const query = 'INSERT INTO pedidos SET ?';
        console.log(req.body);
        DataBase.ejecutarConsulta(query, [req.body], (err: any, resul: Object[]) => {
            if (err) {
                resp.json({
                    ok: false,
                    error: err
                });
            } else {
                resp.json({
                    ok: true,
                    message: 'El pedido se ha guardado correctamente'
                })
            }
        });
    }

    public update (req: Request, resp: Response) {
        const id = req.params.id;
        const escapedId = DataBase.instance.cnn.escape(id);
        const query = `UPDATE pedidos SET ? WHERE idpedidos = ${ escapedId }`;
        DataBase.ejecutarConsulta(query, [req.body], (err: any, resul: Object[]) => {
            if (err) {
                resp.json({
                    ok: false,
                    message: 'La actualización de los datos no es posible',
                    error: err
                });
            } else {
                resp.json({
                    ok: true,
                    user: resul,
                    message: `El pedido con el ID ${escapedId} ha sido actualizado`
                });
            }
        });
    }

    public delete (req: Request, resp: Response) {
        const id = req.params.id;
        const escapedId = DataBase.instance.cnn.escape(id);
        const query = `DELETE FROM pedidos WHERE `;
        DataBase.ejecutarConsulta(query, [req.body], (err:any, resul: Object[]) => {
            if (err) {
                resp.json({
                    ok: false,
                    message: `El ID ${escapedId} que está tratando de borrar no existe`,
                    error: err
                });
            } else {
                resp.json({
                    ok: true,
                    message: `El registro con ID ${escapedId} fue eliminado con éxito`
                });
            }
        })
    }
}

const pedidosController = new PedidosController();
export default pedidosController;