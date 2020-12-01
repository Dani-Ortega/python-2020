-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-12-2020 a las 00:20:29
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dani ortega`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cualquiertabla`
--

CREATE TABLE `cualquiertabla` (
  `id` int(11) NOT NULL,
  `nombre` varchar(11) COLLATE utf8mb4_spanish_ci NOT NULL,
  `apellido` varchar(11) COLLATE utf8mb4_spanish_ci NOT NULL,
  `covid` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `machuka`
--

CREATE TABLE `machuka` (
  `id` int(11) NOT NULL,
  `nombre` varchar(11) COLLATE utf8mb4_spanish_ci NOT NULL,
  `apellido` varchar(11) COLLATE utf8mb4_spanish_ci NOT NULL,
  `covid` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tabla1`
--

CREATE TABLE `tabla1` (
  `id` int(11) NOT NULL,
  `nombre` varchar(11) COLLATE utf8mb4_spanish_ci NOT NULL,
  `apellido` varchar(11) COLLATE utf8mb4_spanish_ci NOT NULL,
  `covid` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cualquiertabla`
--
ALTER TABLE `cualquiertabla`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `machuka`
--
ALTER TABLE `machuka`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tabla1`
--
ALTER TABLE `tabla1`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cualquiertabla`
--
ALTER TABLE `cualquiertabla`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `machuka`
--
ALTER TABLE `machuka`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tabla1`
--
ALTER TABLE `tabla1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
