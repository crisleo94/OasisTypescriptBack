CREATE DATABASE Oasis;

USE Oasis;

CREATE TABLE Productos (
    Id_Producto INT(11) NOT NULL AUTO_INCREMENT,
    Descripcion VARCHAR(45) NOT NULL,
    photoUrl VARCHAR(200) NOT NULL,
    ValorUnitario DECIMAL(4) NOT NULL,
    PRIMARY KEY (Id_Producto)
);

CREATE TABLE Premios (
    Id_Premio INT(11) NOT NULL AUTO_INCREMENT,
    Descripcion VARCHAR(45) NOT NULL,
    ValorUnitario INT(45) NOT NULL,
    PRIMARY KEY (Id_Premio)
);

CREATE TABLE Ubicacion (
    Id_Ubicacion INT(11) NOT NULL AUTO_INCREMENT,
    Direccion VARCHAR(45) NOT NULL,
    Pais VARCHAR(45) NOT NULL,
    Ciudad VARCHAR(45) NOT NULL,
    Barrio VARCHAR(45) NOT NULL,
    PRIMARY KEY (Id_Ubicacion)
);

CREATE TABLE ResponsableEntrega (
    Id_Repartidor VARCHAR(50) NOT NULL,
    NombreRepartidor VARCHAR(45) NOT NULL,
    EmpresaRepartidor VARCHAR(45) NOT NULL,
    PedidosEntregados INT(11) NULL DEFAULT NULL,
    PedidosNoEntregado INT(11) NULL DEFAULT NULL,
    PRIMARY KEY (Id_Repartidor)
);

CREATE TABLE Factura (
    Id_Factura INT(11) NOT NULL AUTO_INCREMENT,
    Total DECIMAL(4) NOT NULL,
    CantidadProductos INT(11) NOT NULL,
    PRIMARY KEY (Id_Factura)
);

CREATE TABLE Pedidos (
    Id_Pedidos INT(11) NOT NULL,
    Pendiente TINYINT(1) NOT NULL,
    Entregado TINYINT(1) NOT NULL,
    Observaciones VARCHAR(45) NOT NULL,
    Fecha_Pedido DATETIME NOT NULL,
    Id_Factura INT(11),
    Id_Producto INT(11),
    Id_Repartidor VARCHAR(45),
    PRIMARY KEY (Id_Pedidos),
    FOREIGN KEY (Id_Factura) REFERENCES Factura(Id_Factura) ON DELETE CASCADE,
    FOREIGN KEY (Id_Producto) REFERENCES Productos(Id_Producto) ON DELETE CASCADE,
    FOREIGN KEY (Id_Repartidor) REFERENCES ResponsableEntrega(Id_Repartidor) ON DELETE CASCADE
);

CREATE TABLE DatosUsuario (
    Id_DatosUsuario VARCHAR(45) NOT NULL,
    NombreCompleto VARCHAR(45) NOT NULL,
    Telefono INT(11) NOT NULL,
    Correo VARCHAR(45) NOT NULL,
    Puntos INT(11) NULL DEFAULT NULL,
    Id_Ubicacion INT,
    Id_Pedidos INT,
    PRIMARY KEY (Id_DatosUsuario),
    FOREIGN KEY (Id_Ubicacion) REFERENCES Ubicacion(Id_Ubicacion),
    FOREIGN KEY (Id_Pedidos) REFERENCES Pedidos(Id_Pedidos)
);

INSERT INTO Productos VALUES 
(0,'Botella 500ml','https://res.cloudinary.com/hrf5wsn4o/image/upload/v1563476431/Oasis/Botella500ML_fxxemu.png',12),
(1,'Botella 1.5L','https://res.cloudinary.com/hrf5wsn4o/image/upload/v1563476436/Oasis/Botella1.5L_mavem4.png',20),
(2,'Botella 1L','https://res.cloudinary.com/hrf5wsn4o/image/upload/v1563476429/Oasis/Botella1L_trad2u.png',18),
(3,'Galon 3.7L','https://res.cloudinary.com/hrf5wsn4o/image/upload/v1563476439/Oasis/Galon3.7L_yrich8.png',35),
(4,'Garrafon','https://res.cloudinary.com/hrf5wsn4o/image/upload/v1563476443/Oasis/Garrafoncopy2_awjwl5.png',70),
(5,'Hielo 2Kg','https://res.cloudinary.com/hrf5wsn4o/image/upload/v1563476467/Oasis/Hielo5KgCopy_2_jz0rqr.png',15),
(6,'Hielo 5Kg','https://res.cloudinary.com/hrf5wsn4o/image/upload/v1563476475/Oasis/Hielo5Kgcopy_v63qeu.png',25),
(7,'Pipa 3800L','https://res.cloudinary.com/hrf5wsn4o/image/upload/v1563476509/Oasis/PipaAgua_cfdfj1.png',500),
(8,'Pipa 1400L','https://res.cloudinary.com/hrf5wsn4o/image/upload/v1563476511/Oasis/PipaAguacopy_fh5rbo.png',280);