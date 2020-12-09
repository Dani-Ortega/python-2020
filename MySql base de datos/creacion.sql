CREATE TABLE `dani ortega`.`machuka` ( 
    `id` INT NOT NULL AUTO_INCREMENT , 
`nombre` VARCHAR(11) NOT NULL , 
`apellido` VARCHAR(11) NOT NULL , 
`covid` BOOLEAN NOT NULL DEFAULT FALSE ,
PRIMARY KEY (`id `)
) ENGINE = InnoDB CHARSET=utf8mb4 COLLATE utf8mb4_spanish_ci;


-- DATOS DE INSERCIÓN DE REGISTRO
INSERT INTO `tabla1` (`id`, `nombre`, `apellido`, `covid`) VALUES (NULL, 'daniel', 'ortega', '0')

INSERT INTO `tabla1` (`id`, `nombre`, `apellido`, `covid`) VALUES (NULL, 'juanito', 'alimaña', '1')

INSERT INTO `tabla1` (`id`, `nombre`, `apellido`, `covid`) VALUES (NULL, 'ramón', 'ramón', '0')

INSERT INTO `tabla1` (`nombre`, `apellido`, `covid`) VALUES ('emiliano', 'zapata', '0')





/*!SE PUEDE OMITIR VALOR AUTOINCREMENTAL*/;
INSERT INTO `guillon` (`nombre`, `apellido`, `covid`) VALUES ('Elsa', 'Zapata', '0');

/*!MODIFICAR UN REGISTRO*/;
UPDATE `guillon` SET `id` = '6' WHERE `guillon`.`id` = 55;

/*!ELIMINAR UN REGISTRO*/;
DELETE FROM `guillon` WHERE `guillon`.`id` = 4

/*!CONSULTAR REGISTRO POR SU CLAVE PRIMARIA*/;
SELECT * FROM `guillon` WHERE `id`=2
