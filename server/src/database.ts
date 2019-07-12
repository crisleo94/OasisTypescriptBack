import mysql from 'mysql';

import keys from './keys'

export default class DataBase {
    // Creamos una instacia de la misma clase para evitar que se recreen las conexiones
    private static _instance: DataBase;

    cnn:mysql.Connection;

    constructor() {
        console.log('Clase On');

        // Se envian las llaves a la creación de la conexión
        this.cnn = mysql.createConnection(keys.database);
        this.conectarDB();
    }

    // En caso exista ya una instancia se usará, si no existe una, se creará una nueva (no hay repetición)
    public static get instance() {
        return this._instance || ( this._instance = new this() )
    }

    // Se usa como estatica para usarlo en cualquier punto
    static ejecutarConsulta( query: string, something: Object[], callback: Function ) {
        this.instance.cnn.query(query, something, ( err, resuls: Object[], fields ) => {
            if(err) {
                console.log('Error en el query', err);
                return callback(err);
            }

            if(resuls.length === 0) {
                callback('El registro no existe');
            } else {
                callback( null, resuls )
            }

        });
    }

    private conectarDB() {
        this.cnn.connect((err: mysql.MysqlError) => {
            if(err){
                console.log(err.message)
                return
            }

            console.log('La base de datos está conectada')
        });
    }

}