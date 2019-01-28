-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: localhost    Database: proyectosimulador
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `banco`
--

DROP TABLE IF EXISTS `banco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `banco` (
  `id_nombre` varchar(255) NOT NULL,
  `cae` float DEFAULT NULL,
  `gastos_asociados` float DEFAULT NULL,
  `tasa_interes_mensual` float DEFAULT NULL,
  PRIMARY KEY (`id_nombre`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banco`
--

LOCK TABLES `banco` WRITE;
/*!40000 ALTER TABLE `banco` DISABLE KEYS */;
INSERT INTO `banco` VALUES ('Banco BICE',24.12,13450,1.89),('Banco Consorcio',26.61,9072,2.05),('Banco de Chile',29.85,9552,2.31),('Banco Estado',26.15,8018,2.42),('Banco Falabella',34.89,1002,2.72),('Banco Itaú',25.12,9193,1.93),('Banco Ripley',37.46,9577,2.95),('Banco Santander',14.79,11007,1.05),('BCI Nova',34.2,8259,2.67),('Scotiabank',25.58,9184,1.95);
/*!40000 ALTER TABLE `banco` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `credito_generado`
--

DROP TABLE IF EXISTS `credito_generado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `credito_generado` (
  `id_credito_generado` int(11) NOT NULL,
  `cae` float DEFAULT NULL,
  `costo_total` int(11) DEFAULT NULL,
  `gastos_asociados` int(11) DEFAULT NULL,
  `monto_bruto_credito` int(11) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `seguro` int(11) DEFAULT NULL,
  `tasa_interes_mensual` float DEFAULT NULL,
  `total_intereses` int(11) DEFAULT NULL,
  `valor_cuota` int(11) DEFAULT NULL,
  `id_banco` varchar(255) DEFAULT NULL,
  `id_usuario` varchar(255) DEFAULT NULL,
  `fecha_credito` datetime DEFAULT NULL,
  `rut` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_credito_generado`),
  KEY `FKjg8ecejn1ccw0n1x25y86cnxi` (`id_banco`),
  KEY `FKe5nbrm6xhuu0nsdf7oqxgth9e` (`id_usuario`),
  KEY `FKgp36eiof7b7p6xahuvhb1uok8` (`rut`),
  CONSTRAINT `FKe5nbrm6xhuu0nsdf7oqxgth9e` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`rut`),
  CONSTRAINT `FKgp36eiof7b7p6xahuvhb1uok8` FOREIGN KEY (`rut`) REFERENCES `usuario` (`rut`),
  CONSTRAINT `FKjg8ecejn1ccw0n1x25y86cnxi` FOREIGN KEY (`id_banco`) REFERENCES `banco` (`id_nombre`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `credito_generado`
--

LOCK TABLES `credito_generado` WRITE;
/*!40000 ALTER TABLE `credito_generado` DISABLE KEYS */;
/*!40000 ALTER TABLE `credito_generado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (5),(5);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historial_creditos`
--

DROP TABLE IF EXISTS `historial_creditos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `historial_creditos` (
  `id_historial_creditos` int(11) NOT NULL,
  `n_cuotas` int(11) DEFAULT NULL,
  `seguro` bit(1) DEFAULT NULL,
  `sueldo` int(11) DEFAULT NULL,
  `id_usuario` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_historial_creditos`),
  KEY `FKbhl20j7vocuxxii6eem62adu2` (`id_usuario`),
  CONSTRAINT `FKbhl20j7vocuxxii6eem62adu2` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`rut`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historial_creditos`
--

LOCK TABLES `historial_creditos` WRITE;
/*!40000 ALTER TABLE `historial_creditos` DISABLE KEYS */;
/*!40000 ALTER TABLE `historial_creditos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rol`
--

DROP TABLE IF EXISTS `rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `rol` (
  `id_rol` int(11) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_rol`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol`
--

LOCK TABLES `rol` WRITE;
/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
INSERT INTO `rol` VALUES (1,'Administra la vida','Administrador'),(2,'Puede ver tablas especiales','Ejecutivo'),(3,'Usuario comun, puede generar simulaciones y consultas de sus simulaciones','Usuario');
/*!40000 ALTER TABLE `rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `usuario` (
  `rut` varchar(255) NOT NULL,
  `apellido` varchar(255) DEFAULT NULL,
  `correo` varchar(255) DEFAULT NULL,
  `fecha_registro` datetime DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `id_rol` int(11) DEFAULT NULL,
  `activo` int(11) DEFAULT NULL,
  PRIMARY KEY (`rut`),
  KEY `FKmyv3138vvci6kaq3y5kt4cntu` (`id_rol`),
  CONSTRAINT `FKmyv3138vvci6kaq3y5kt4cntu` FOREIGN KEY (`id_rol`) REFERENCES `rol` (`id_rol`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES ('11.111.111-1','holaMundo','Administrador@gmail.com','2019-01-21 16:33:24','Administrador','1234',1,1),('19.090.388-5','holaMundo','Usuario@gmail.com','2019-01-21 16:41:35','Rogelio','1234',3,1);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-01-28 16:50:57
