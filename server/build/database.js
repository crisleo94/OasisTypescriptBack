"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const keys_1 = __importDefault(require("./keys"));
class DataBase {
    constructor() {
        console.log('Clase On');
        // Se envian las llaves a la creación de la conexión
        this.cnn = mysql_1.default.createConnection(keys_1.default.database);
        this.conectarDB();
    }
    // En caso exista ya una instancia se usará, si no existe una, se creará una nueva (no hay repetición)
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    // Se usa como estatica para usarlo en cualquier punto
    static ejecutarConsulta(query, something, callback) {
        this.instance.cnn.query(query, something, (err, resuls, fields) => {
            if (err) {
                console.log('Error en el query', err);
                return callback(err);
            }
            if (resuls.length === 0) {
                callback('El registro no existe');
            }
            else {
                callback(null, resuls);
            }
        });
    }
    conectarDB() {
        this.cnn.connect((err) => {
            if (err) {
                console.log(err.message);
                return;
            }
            console.log('La base de datos está conectada');
        });
    }
}
exports.default = DataBase;
