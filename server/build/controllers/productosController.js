"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ProductosController {
    list(req, resp) {
        const query = 'SELECT * FROM productos';
        database_1.default.ejecutarConsulta(query, [req.body], (err, resul) => {
            if (err) {
                resp.json({
                    ok: false,
                    message: 'La selección no existe'
                });
            }
            else {
                console.log(resul);
                resp.json(resul);
            }
        });
    }
    getOne(req, resp) {
        const id = req.params.id;
        const escapedId = database_1.default.instance.cnn.escape(id);
        const query = `SELECT * FROM productos WHERE idprodutoc = ${escapedId}`;
        database_1.default.ejecutarConsulta(query, [req.body], (err, resul) => {
            if (err) {
                resp.json({
                    ok: false,
                    message: 'La consulta no es correcta'
                });
            }
            else {
                resp.json(resul);
            }
        });
    }
    create(req, resp) {
        const query = 'INSERT INTO productos SET ?';
        console.log(req.body);
        database_1.default.ejecutarConsulta(query, [req.body], (err, resul) => {
            if (err) {
                resp.json({
                    ok: false,
                    error: err
                });
            }
            else {
                resp.json({
                    ok: true,
                    message: 'El producto se ha guardado correctamente',
                    product: resul
                });
            }
        });
    }
    update(req, resp) {
        const id = req.params.id;
        const escapedId = database_1.default.instance.cnn.escape(id);
        const query = `UPDATE productos SET ? WHERE idprodutoc = ${escapedId}`;
        database_1.default.ejecutarConsulta(query, [req.body], (err, resul) => {
            if (err) {
                resp.json({
                    ok: false,
                    message: 'La actualización de los datos no es posible',
                    error: err
                });
            }
            else {
                resp.json({
                    ok: true,
                    producto: resul,
                    message: `El producto con el ID ${escapedId} ha sido actualizado`
                });
            }
        });
    }
    delete(req, resp) {
        const id = req.params.id;
        const escapedId = database_1.default.instance.cnn.escape(id);
        const query = `DELETE FROM productos WHERE idprodutoc = ${escapedId}`;
        database_1.default.ejecutarConsulta(query, [req.body], (err, resul) => {
            if (err) {
                resp.json({
                    ok: false,
                    message: `El ID ${escapedId} que está tratando de eliminar no existe`,
                    error: err
                });
            }
            else {
                resp.json({
                    ok: true,
                    message: `El producto con ID ${escapedId} fue eliminado con éxito`
                });
            }
        });
    }
}
const productosController = new ProductosController();
exports.default = productosController;
