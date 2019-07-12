"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productosController_1 = __importDefault(require("../controllers/productosController"));
class ProductoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', productosController_1.default.list);
        this.router.get('/:id', productosController_1.default.getOne);
        this.router.post('/', productosController_1.default.create);
        this.router.delete('/:id', productosController_1.default.delete);
        this.router.put('/:id', productosController_1.default.update);
    }
}
const productosRoutes = new ProductoRoutes();
exports.default = productosRoutes.router;
