
-- ¿Qué consulta harías para obtener todos los países que hablan esloveno? Tu consulta debe devolver el nombre del país, el idioma y
-- el porcentaje de idioma. Tu consulta debe organizar el resultado por porcentaje de idioma en orden descendente

select * from languages where language = 'slovene';

select * from  countries
where id in (16, 96, 107, 200);

select * from languages
inner join countries
on languages.country_id = countries.id
where language = 'Slovene'
;

-- ¿Qué consulta ejecutarías para mostrar el número total de ciudades para cada país? Su consulta debe devolver el nombre del país y el número 
-- total de ciudades. Tu consulta debe organizar el resultado por el número de ciudades en orden descendente.

select * from cities;

select name from countries;

select countries.name as nombre_pais, count(cities.id) as total_ciudades
from cities
inner join countries on cities.country_id = countries.id
group by countries.id
order by countries.name desc
;

-- ¿Qué consulta harías para obtener todas las ciudades de México con una población de más de 500,000? Tu consulta debe organizar el resultado 
-- por población en orden descendente. 

select id, name from countries 
where name = 'Mexico';  -- mexico_id = 136

select cities.name as nombre_ciudad, cities.population as poblacion_total  
from cities 
inner join countries on cities.country_id = countries.id
where countries.id = 136
and cities.population > 500000 
order by cities.population desc 
;

-- ¿Qué consulta ejecutarías para obtener todos los idiomas en cada país con un porcentaje superior al 89%? Tu consulta debe organizar el 
-- resultado por porcentaje en orden descendente.

select countries.name as nombre_pais, languages.language as idioma_pais, languages.percentage as porcentaje_idioma 
from languages
inner join countries on languages.country_id = countries.id
where languages.percentage > 89
;
 
-- ¿Qué consulta haría para obtener todos los países con un área de superficie inferior a 501 y una población superior a 100,000?

select countries.name as nombre_pais, countries.surface_area as area_superficie, countries.population as poblacion_total
from countries
where countries.surface_area < 501
and countries.population > 100000
;

-- ¿Qué consulta harías para obtener países con solo Monarquía Constitucional con un capital superior a 200 y una esperanza de vida 
-- superior a 75 años?  

select countries.name as nombre_pais, 
countries.government_form as modelo_estado, 
countries.capital as capital, 
life_expectancy as esperanza_vida
from countries
where countries.government_form 
like 'Constitutional Monarchy'
and countries.capital > 200
and countries.life_expectancy > 75
;

-- ¿Qué consulta harías para obtener todas las ciudades de Argentina dentro del distrito de Buenos Aires y tener una población superior a 500,000? 
-- La consulta debe devolver el nombre del país, el nombre de la ciudad, el distrito y la población. 
-- select name from countries as nombre_pais where countries.id = 9 ;
select cities.name as nombre_ciudad,
cities.district as distrito,
cities.population as poblacion_total
from cities
inner join countries on cities.country_id = countries.id
where countries.id = 9 and
cities.district like 'Buenos Aires' and
cities.population > 500000
;

-- ¿Qué consulta harías para resumir el número de países en cada región? La consulta debe mostrar el nombre de la región y el número de países. 
-- Además, la consulta debe organizar el resultado por el número de países en orden descendente.

select region as nombre_region, 
count(name) as total_ciudades
from countries
group by region
order by total_ciudades
desc
;












