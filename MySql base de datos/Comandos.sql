XAMPP (shell)
--para conectar a mysql por consola (en xampp)
mysql -u root -p
--(pass : enter)

show databases;
-- muestra todas las bases de datos en mi computador

use NOMBRE;
--seleccionar una base de datos: use +nombre base de datos
-- usar la base de datos creada - o cambiar a otra base de datos

show tables;
-- mostrar tablas de la base de datos

create database PONERLEUNNOMBRE;
-- crear una base de datos

drop database jalvarez;
-- eliminar una base de datos (bajo mi responsabilidad xD)

drop table personas2;
-- eliminar una table: drop table + "nombre de la tabla" (sin comillas)



-- creación de tablas dentro de la base de datos seleccionada
-- create table nombre_de_la_tabla();
-- INT=
--VARCHAR= 
create table personas2(
    id INT,
    nombre VARCHAR(255),
    apellido VARCHAR(255)
);
-- en la consola puedo seguir escribiendo, si apreto enter, hasta que apreto ";"

--
-- inserción de registros : VALUES: palabra reservada
-- INSERT INTO nombre_de_la_tabla (columna1, columna2,...)
-- VALUES (VALOR1, VALOR2);
insert into personas (id, nombre, apellido)

insert into tabla1(id,nombre,edad) values()
values (5,"José",25),(6,"Alex",21),(7,"María",28);
-- insertar mas de un registro, separado por una coma (,)

values (2, "Daniel", "Ortega"),
(3, "Juan", "Alvarez");

-- consulta a las tablas:[campos que queremos]; * VOY A SELECCIONAR TODOS
SELECT [] FROM nombre_de_la_tabla; 
SELECT * FROM personas;

-- para saber la estructura de una tabla
DESCRIBE nombre_de_la_tabla;
DESCRIBE personas;

-- Me trae solo esos datos (nombre), podria ser el id, apellido, etc.
select nombre from personas;
-- puedo traer mas de un elemento, en ESE orden(nombre, luego id):
select nombre, id from personas;

-- Filtros
-- Ejemplo: me trae solo los elementos id menores que 3:
select * from personas
WHERE id<3
;
-- filtro, nombre carlos
select * from personas
WHERE nombre = "Carlos"
;
-- filtrar por mas de un elemento:
select * from personas
WHERE nombre = "Carlos"
and id =1
;

-- LIKE
-- '%%' o '%?' o '?%'
-- Busca todos los que tengan en el nombre la letra n
SELECT * FROM personas
WHERE nombre LIKE '%n%';
-- busca en nombres que la ultima letra es sea n ('%')
SELECT * FROM personas
WHERE nombre LIKE '%n';

-- eliminar un registro
delete from tabla1 where id = 2;

-- actualizar un registro 
update tabla1
set nombre = "Arturo" 
where id = 5;






