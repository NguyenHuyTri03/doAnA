-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: doana
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `product_sizes`
--

DROP TABLE IF EXISTS `product_sizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_sizes` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `quantity` int NOT NULL,
  `product_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK4w69qsh5hd062xv3hqkpgpdpu` (`product_id`),
  CONSTRAINT `FK4w69qsh5hd062xv3hqkpgpdpu` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_sizes`
--

LOCK TABLES `product_sizes` WRITE;
/*!40000 ALTER TABLE `product_sizes` DISABLE KEYS */;
INSERT INTO `product_sizes` VALUES (1,'250g',30,4),(2,'1kg',15,4),(5,'250g',30,6),(6,'1kg',15,6),(7,'250g',20,7),(8,'500g',10,7),(9,'250g',25,8),(10,'1kg',15,8),(11,'500g',12,9),(12,'1kg',8,9),(13,'250g',18,10),(14,'1kg',5,10),(15,'500g',10,11),(16,'1kg',10,11),(17,'250g',20,12),(18,'500g',10,12),(19,'250g',15,13),(20,'1kg',12,13),(21,'250g',25,14),(22,'500g',10,14),(23,'500g',20,15),(24,'1kg',10,15),(25,'250g',18,16),(26,'1kg',7,16),(27,'10 gói',50,17),(28,'20 gói',30,17),(29,'10 gói',40,18),(30,'20 gói',20,18),(31,'10 gói',30,19),(32,'20 gói',15,19),(33,'10 gói',35,20),(34,'20 gói',10,20),(35,'10 gói',25,21),(36,'20 gói',20,21),(37,'100g',20,22),(38,'200g',10,22),(39,'20 túi',30,23),(40,'40 túi',20,23),(41,'100g',25,24),(42,'250g',10,24),(43,'100g',20,25),(44,'250g',10,25),(45,'100g',15,26),(46,'200g',8,26);
/*!40000 ALTER TABLE `product_sizes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-26  3:06:01
