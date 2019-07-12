"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class PedidosController {
    list(req, res) {
        const query = 'SELECT * FROM pedidos';
        database_1.default.ejecutarConsulta(query, [req.body], (err, resul) => {
            if (err) {
                res.json({
                    ok: false,
                    message: 'La selección no existe'
                });
            }
            else {
                res.json({
                    ok: true,
                    users: resul
                });
            }
        });
    }
    getOne(req, resp) {
        const id = req.params.id;
        const escapedId = database_1.default.instance.cnn.escape(id);
        const query = `SELECT * FROM pedidos WHERE idpedidos = ${escapedId}`;
        database_1.default.ejecutarConsulta(query, [req.body], (err, resul) => {
            if (err) {
                resp.json({
                    ok: false,
                    message: 'La consulta no es correcta'
                });
            }
            else {
                resp.json({
                    ok: true,
                    user: resul
                });
            }
        });
    }
    create(req, resp) {
        const query = 'INSERT INTO pedidos SET ?';
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
                    message: 'El pedido se ha guardado correctamente'
                });
            }
        });
    }
    update(req, resp) {
        const id = req.params.id;
        const escapedId = database_1.default.instance.cnn.escape(id);
        const query = `UPDATE pedidos SET ? WHERE idpedidos = ${escapedId}`;
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
                    user: resul,
                    message: `El pedido con el ID ${escapedId} ha sido actualizado`
                });
            }
        });
    }
    delete(req, resp) {
        const id = req.params.id;
        const escapedId = database_1.default.instance.cnn.escape(id);
        const query = `DELETE FROM pedidos WHERE `;
        database_1.default.ejecutarConsulta(query, [req.body], (err, resul) => {
            if (err) {
                resp.json({
                    ok: false,
                    message: `El ID ${escapedId} que está tratando de borrar no existe`,
                    error: err
                });
            }
            else {
                resp.json({
                    ok: true,
                    message: `El registro con ID ${escapedId} fue eliminado con éxito`
                });
            }
        });
    }
}
const pedidosController = new PedidosController();
exports.default = pedidosController;
