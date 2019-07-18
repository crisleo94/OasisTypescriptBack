import { Request, Response } from 'express';
import DataBase from '../database';

class ProductosController {

    public list (req: Request, resp: Response) {
        const query = 'SELECT * FROM productos';
        DataBase.ejecutarConsulta(query, [req.body], (err: any, resul: Object[]) => {
            if (err) {
                resp.json({
                    ok: false,
                    message: 'La selección no existe'
                });
            } else {
                console.log(resul);
                resp.json(resul);
            }
        })
    }

    public getOne (req: Request, resp: Response) {
        const id = req.params.id;
        const escapedId = DataBase.instance.cnn.escape(id);
        const query = `SELECT * FROM productos WHERE idprodutoc = ${ escapedId }`;
        DataBase.ejecutarConsulta(query, [req.body], (err: any, resul: Object[]) => {
            if (err) {
                resp.json({
                    ok: false,
                    message: 'La consulta no es correcta'
                });
            } else {
                resp.json(resul);
            }
        });
    }

    public create (req: Request, resp: Response) {
        const query = 'INSERT INTO productos SET ?';
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
                    message: 'El producto se ha guardado correctamente',
                    product: resul
                })
            }
        });
    }

    public update (req: Request, resp: Response) {
        const id = req.params.id;
        const escapedId = DataBase.instance.cnn.escape(id);
        const query = `UPDATE productos SET ? WHERE idprodutoc = ${ escapedId }`;
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
                    producto: resul,
                    message: `El producto con el ID ${escapedId} ha sido actualizado`
                });
            }
        });
    }

    public delete (req: Request, resp: Response) {
        const id = req.params.id;
        const escapedId = DataBase.instance.cnn.escape(id);
        const query = `DELETE FROM productos WHERE idprodutoc = ${ escapedId }`;
        DataBase.ejecutarConsulta(query, [req.body], (err:any, resul: Object[]) => {
            if (err) {
                resp.json({
                    ok: false,
                    message: `El ID ${escapedId} que está tratando de eliminar no existe`,
                    error: err
                });
            } else {
                resp.json({
                    ok: true,
                    message: `El producto con ID ${escapedId} fue eliminado con éxito`
                });
            }
        })
    }
}

const productosController = new ProductosController();
export default productosController;