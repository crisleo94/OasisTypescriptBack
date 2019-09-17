-- MySQL Workbench Synchronization
-- Generated: 2019-07-09 01:00
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: Usuario

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE TABLE IF NOT EXISTS `oasis`.`productos` (
  `idprodutoc` INT(11) NOT NULL,
  `descripcion` VARCHAR(45) NOT NULL,
  `valorunitario` DECIMAL(4) NOT NULL,
  PRIMARY KEY (`idprodutoc`)
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;

CREATE TABLE IF NOT EXISTS `oasis`.`premios` (
  `idpremio` INT(11) NOT NULL,
  `descripcion` VARCHAR(45) NOT NULL,
  `valorunitario` DECIMAL(4) NOT NULL,
  PRIMARY KEY (`idpremio`)
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;

CREATE TABLE IF NOT EXISTS `oasis`.`ubicacion` (
  `id_ubicacion` INT(11) NOT NULL AUTO_INCREMENT,
  `direccion` VARCHAR(45) NOT NULL,
  `barrio` VARCHAR(45) NOT NULL,
  `ciudad` VARCHAR(45) NOT NULL,
  `pais` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_ubicacion`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;

CREATE TABLE IF NOT EXISTS `oasis`.`Responsable_entreg` (
  `idResponsable_entreg` INT(11) NOT NULL,
  `Nombre` VARCHAR(45) NULL DEFAULT NULL,
  `Empresa` VARCHAR(45) NULL DEFAULT NULL,
  `fecha_estimada_entrega` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idResponsable_entreg`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;

CREATE TABLE IF NOT EXISTS `oasis`.`factura` (
  `idfactura` INT(11) NOT NULL,
  `total` VARCHAR(45) NULL DEFAULT NULL,
  `cantidad` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`idfactura`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;

CREATE TABLE IF NOT EXISTS `oasis`.`pedidos` (
  `idpedidos` INT(11) NOT NULL,
  `pendiente` TINYINT(4) NOT NULL,
  `entregado` TINYINT(4) NOT NULL,
  `observaciones` VARCHAR(45) NOT NULL,
  `fecha_pedido` DATETIME NOT NULL,
  `factura_idfactura` INT(11) NOT NULL,
  `productos_idprodutoc` INT(11) NOT NULL,
  `Responsable_entreg_idResponsable_entreg` INT(11) NOT NULL,
  PRIMARY KEY (`idpedidos`, `factura_idfactura`, `productos_idprodutoc`, `Responsable_entreg_idResponsable_entreg`),
  INDEX `fk_pedidos_factura1_idx` (`factura_idfactura` ASC) ,
  INDEX `fk_pedidos_productos1_idx` (`productos_idprodutoc` ASC) ,
  INDEX `fk_pedidos_Responsable_entreg1_idx` (`Responsable_entreg_idResponsable_entreg` ASC) ,
  CONSTRAINT `fk_pedidos_factura1`
    FOREIGN KEY (`factura_idfactura`)
    REFERENCES `oasis`.`factura` (`idfactura`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedidos_productos1`
    FOREIGN KEY (`productos_idprodutoc`)
    REFERENCES `oasis`.`productos` (`idprodutoc`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedidos_Responsable_entreg1`
    FOREIGN KEY (`Responsable_entreg_idResponsable_entreg`)
    REFERENCES `oasis`.`Responsable_entreg` (`idResponsable_entreg`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;

CREATE TABLE IF NOT EXISTS `oasis`.`DatosPersona` (
  `id_DatosPersona` INT(11) NOT NULL,
  `ubicacion` INT(11) NOT NULL,
  `genero` INT(11) NOT NULL,
  `nombre_Completo` VARCHAR(50) NOT NULL,
  `telefono` VARCHAR(45) NULL DEFAULT NULL,
  `correo` VARCHAR(45) NOT NULL,
  `puntos` VARCHAR(45) NOT NULL,
  `pedidos_idpedidos` INT(11) NOT NULL,
  PRIMARY KEY (`id_DatosPersona`, `ubicacion`, `genero`, `pedidos_idpedidos`),
  INDEX `fk_DatosPersona_ubicacion1_idx` (`ubicacion` ASC) ,
  UNIQUE INDEX `correo_UNIQUE` (`correo` ASC) ,
  INDEX `fk_DatosPersona_pedidos1_idx` (`pedidos_idpedidos` ASC) ,
  CONSTRAINT `fk_DatosPersona_ubicacion1`
    FOREIGN KEY (`ubicacion`)
    REFERENCES `oasis`.`ubicacion` (`id_ubicacion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_DatosPersona_pedidos1`
    FOREIGN KEY (`pedidos_idpedidos`)
    REFERENCES `oasis`.`pedidos` (`idpedidos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;

CREATE TABLE IF NOT EXISTS `oasis`.`usuarios` (
  `idusuarios` INT(11) NOT NULL,
  `usuarios` VARCHAR(45) NOT NULL,
  `contraseña` VARCHAR(45) NOT NULL,
  `DatosPersona_id_DatosPersona` INT(11) NOT NULL,
  PRIMARY KEY (`idusuarios`, `DatosPersona_id_DatosPersona`),
  UNIQUE INDEX `usuarios_UNIQUE` (`usuarios` ASC) ,
  INDEX `fk_usuarios_DatosPersona_idx` (`DatosPersona_id_DatosPersona` ASC) ,
  CONSTRAINT `fk_usuarios_DatosPersona`
    FOREIGN KEY (`DatosPersona_id_DatosPersona`)
    REFERENCES `oasis`.`DatosPersona` (`id_DatosPersona`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
