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
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `description` text,
  `discount_percent` int DEFAULT NULL,
  `image_url` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int NOT NULL,
  `main_category_id` bigint NOT NULL,
  `sub_category_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKahcxr396oqusax876vfoaebdf` (`main_category_id`),
  KEY `FKjlksr0rrcekigb8jrqj8k5vl` (`sub_category_id`),
  CONSTRAINT `FKahcxr396oqusax876vfoaebdf` FOREIGN KEY (`main_category_id`) REFERENCES `categories` (`id`),
  CONSTRAINT `FKjlksr0rrcekigb8jrqj8k5vl` FOREIGN KEY (`sub_category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (4,'Aromatic whole bean coffee from Ethiopia with fruity and floral notes.',10,'https://images.unsplash.com/photo-1511920170033-f8396924c348','Ethiopian Whole Bean Coffee',1599,1,10),(6,'Aromatic whole bean coffee from Ethiopia with fruity and floral notes.',10,'https://example.com/images/ethiopian-coffee.jpg','Tra xanh',1599,11,12),(7,'Hạt cà phê Arabica thơm nhẹ, vị chua thanh.',15,'https://example.com/images/arabica.jpg','Cà phê hạt Arabica',120000,1,6),(8,'Hạt cà phê Robusta đậm đà, nhiều caffeine.',10,'https://example.com/images/robusta.jpg','Cà phê hạt Robusta',95000,1,6),(9,'Kết hợp Arabica và Robusta cho vị cân bằng.',5,'https://example.com/images/blend.jpg','Cà phê hạt blend',110000,1,6),(10,'100% nguyên chất, không phụ gia.',12,'https://example.com/images/pure.jpg','Cà phê hạt nguyên chất',130000,1,6),(11,'Cà phê hạt cao cấp chọn lọc.',8,'https://example.com/images/special.jpg','Cà phê hạt đặc biệt',150000,1,6),(12,'Rang mộc giữ nguyên hương vị nguyên bản.',10,'https://example.com/images/rang-moc.jpg','Cà phê rang mộc',125000,1,10),(13,'Rang cùng bơ để tăng độ béo và thơm.',5,'https://example.com/images/rang-bo.jpg','Cà phê rang bơ',135000,1,10),(14,'Cà phê rang và xay sẵn tiện lợi.',7,'https://example.com/images/rang-xay.jpg','Cà phê rang xay',140000,1,10),(15,'Rang kỹ cho vị mạnh và thơm.',10,'https://example.com/images/rang-dam.jpg','Cà phê rang đậm',145000,1,10),(16,'Rang nhẹ cho hương vị thanh hơn.',5,'https://example.com/images/rang-nhat.jpg','Cà phê rang nhạt',115000,1,10),(17,'Cà phê, đường, sữa tiện lợi mỗi ngày.',10,'https://example.com/images/hoatan-3in1.jpg','Cà phê hòa tan 3in1',50000,1,15),(18,'Phù hợp cho người ăn kiêng.',5,'https://example.com/images/hoatan-khongduong.jpg','Cà phê hòa tan không đường',52000,1,15),(19,'Thơm ngon như cà phê pha phin.',8,'https://example.com/images/hoatan-suada.jpg','Cà phê hòa tan sữa đá',60000,1,15),(20,'Vị truyền thống đậm đà.',12,'https://example.com/images/hoatan-truyenthong.jpg','Cà phê hòa tan vị truyền thống',48000,1,15),(21,'Dành cho người thích vị mạnh.',10,'https://example.com/images/hoatan-damdac.jpg','Cà phê hòa tan đậm đặc',65000,1,15),(22,'Trà xanh nguyên lá, giữ nguyên dưỡng chất.',10,'https://example.com/images/green-leaf.jpg','Trà xanh nguyên lá',80000,11,12),(23,'Tiện lợi, dễ pha chế.',5,'https://example.com/images/tra-tuiloc.jpg','Trà xanh túi lọc',60000,11,12),(24,'Được trồng theo chuẩn hữu cơ.',15,'https://example.com/images/tra-organic.jpg','Trà xanh hữu cơ',95000,11,12),(25,'Trà xanh phối hương lài thơm dịu.',8,'https://example.com/images/tra-jasmine.jpg','Trà xanh hương lài',90000,11,12),(26,'Bột trà xanh nguyên chất, dùng cho pha chế.',12,'https://example.com/images/matcha.jpg','Trà xanh matcha',120000,11,12);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
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
