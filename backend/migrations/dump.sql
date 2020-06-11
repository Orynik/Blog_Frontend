-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: user
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `articles`
--

DROP TABLE IF EXISTS `articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(60) DEFAULT NULL,
  `date` varchar(35) DEFAULT NULL,
  `category` varchar(30) DEFAULT NULL,
  `author` varchar(40) DEFAULT NULL,
  `content` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles`
--

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
INSERT INTO `articles` VALUES (1,'Golang','2020-05-28T01:32:29.413Z','Backend','Cookies@chort.ru','LoremIpsum'),(2,'Golang','2020-05-28T01:32:29.413Z','Backend','Cookies@chort.ru','qewrqwbfghqwbgjkqwbjqbjrbqiwrhqwirhu'),(3,'DOPOMINE!','2020-06-06T03:33:54.338Z','Другое','durak1@gmail.ru','DOPOMINE!'),(4,'DOPOMINE!','2020-06-06T03:35:14.799Z','Golang','durak1@gmail.ru','192.168.0.102');
/*!40000 ALTER TABLE `articles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `article` int DEFAULT NULL,
  `author` varchar(30) DEFAULT NULL,
  `text` text,
  `date` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,4,'durak1@gmail.ru','3123','2020-06-11T11:22:06.406Z');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(30) DEFAULT NULL,
  `encryptedPassword` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'durak1@gmail.ru','$2a$04$0kNvn2sHeXx2Q6/wzojaoOaUxOgtZ4j4qCsEdBYvbnoNl0I627uOm'),(2,'cookezy@cocc.ru','$2a$04$zRYDfVG6iZTgoiTeyDXzjOjyINa3g3yh1eRgRT0iRoRwHzcFYhl7e'),(3,'durak2@chort.gmail','$2a$04$eqA8XSnckb24wbGuLxnFuOslZqfyK7pkdto46XyOAEdGplxHzhfGK'),(4,'durak1@gmail.ru','$2a$04$6UsjmbxbdCF0K.ImnnV8Ke7e0JU5jCRotnrkYyhPLCGojtsCKRTBa'),(5,'durak1@gmail.ru','$2a$04$nATlZ/gedFnaj3RW.XVAAOi7JVX59R9zQ8KGpKkaKHLe6Y2bJGgFK'),(6,'durak1@gmail.ru','$2a$04$09b4vtWPmpufl2blSCeVCuJHUxt5T0H6Srl0BcBPWGUVh6S6wkcja'),(7,'durak1@gmail.ru','$2a$04$dypf4tXP5svaxO5IrXAAHu.dSDZUTJRVDd3n91AsfFxN/BIeiIJgu'),(8,'durak2@chort.gmail','$2a$04$gPb7uEZ4Uj/0wRrOSK4jPuAfRTVMMWx.l5dq.jLo29E63vwQyGUqO'),(9,'durak@gmail.ru','$2a$04$L/h13mvim5PJ0ije5hf/U.L.YSo8lGUXUrHrHhB7UNzARTd7ah.v2'),(10,'qweqwe@chort.ru','$2a$04$BPxMbduYybq8kTWpWjTCv.ZHJ7RYkgomMNjUQDJS3hb8aYW7ngCca'),(11,'qweqwe@chort.ru','$2a$04$jbakcswr6FarZWjl.YvAnet2Ve224K73D7QJNc6.8g1XxpDzr1Zea'),(12,'durak1@gmail.ru','$2a$04$S5DTeEzL3GNV099owM543.PBqAy82QfQqkkP5zJSnpk2ZbO9ekFcW'),(13,'durak1@gmail.ru','$2a$04$Ijo5z9A3hnx.E3u5rlMMhu8RlC3BJG28ugIRj.v.P.0zNJ4T0zeSa'),(14,'durak1@gmail.ru','$2a$04$QqiRfBu5y/f7Jcn5b2zUp.jkRacux0a.TVe9wsCsBqFlZXP1V90mq'),(15,'durak1@gmail.ruqwe','$2a$04$smrDJsjZKX2XEID6XB450.7wf0Ei4AL6EXDrOq03XF0Cau4c8VnKm'),(16,'durak@gmail.ru','$2a$04$ptb2TOjY.PEPpEWeOuRvBOvBrlAlZwrfHyaPPEOXgtFlVvaBU6U9S'),(17,'durak1@gmail.ru','$2a$04$RVv.7WMO5eOpYnI/kW2qnudWKs3QaAK3h3NU0GhiV2nyhZDDM18HS'),(18,'durak@gmail.ru','$2a$04$bZu2z8RvkHK.zcrvOiMrU.g1n5znXSaqXqgaYtUlpeLCIUMeV7VBu'),(19,'durak1@gmail.ru','$2a$04$S0Pm3sB0nUQKhPiLj.0OLOS0XeL2VDc2CqptAZIqdvt4JpTEUbimG'),(20,'qweqwe@chort.ru','$2a$04$wz/anZlONAFQlF9Shvinse87dlUct4wHvMuFJ2ARcmUnL2Nx9eqKy'),(21,'durak@gmail.ru','$2a$04$HYWTIemxnvvvWJSvagJpDeMIdbfkkgk.68SX/KBu9yjk6.tANqD2m'),(22,'durak@gmail.ru','$2a$04$uKuSAR/a8AnmllQVnOkG/OXKoef3U0vPEdnAp3KAlj5U9uPqoLXhi'),(23,'durak2@chort.gmail','$2a$04$Tra74DXt6sogV0UqGk2WbuvFuEfsjKq.qE.hmc3Wf2kg35S1ayVgm'),(24,'durak1@gmail.ru','$2a$04$.K7gRG2IJeNxV6sCbeoKvOcRY7ZGQVFXz76CcFEcI5UhCMLnXjHQG'),(25,'durak1@gmail.ru','$2a$04$BlpRRgCxf7B3QwYSlhGJUeqYbPuKtCanCDMs3yye11ZUFl8CscQLq'),(26,'dkrov@seqxd.xe','$2a$04$Z1qOIcX13aMKy9mLIunkSeqgk4nsOZ.Wl.g/8Jb5PO59jdrGej2dS'),(27,'durak1@gmail.ru','$2a$04$uUjllhfapHMIzdZTcJHB4ePF/zCLmaWFoWhfy4eOJdBSCjf2MZg0y'),(28,'durak@gmail.ru','$2a$04$icDGx9FMs6YdWOWU3XFazuREbxVH6H4RUJw.B9tElSR0nfjzcKKEK'),(29,'durak2@chort.gmail','$2a$04$YVDDP.O/o9c6jz7ssdMvDuLlfqgh8ziAiQupoCAH9TRkB8swylfPC'),(30,'durak1@gmail.ru','$2a$04$Cdbl7knT3VvhuCWmVSJoXefom5HuoKr8K6XSXLBYfL7Q7Ba2nX4Je'),(31,'durak@gmail.ru','$2a$04$eAGtK1lSRM4CoXaZm99xUOySVh4WTu5Xz1KKRlVYbY4F7suAChjPq'),(32,'durak2@chort.gmail','$2a$04$SNmZvbkQ.wXTkgChu1HY3.VW7enHfV0k1h4VCYSG4916n5O8y8R0O'),(33,'durak2@chort.gmail','$2a$04$NgtKQmIkYoPEGSeTBhyJGOUke7Vy9L1Kgl0EY0lnRWcJ35gaPNzgm'),(34,'durak1@gmail.ru','$2a$04$mGK/grWvcn/JmIif8UhuBum3ZHIIMAR.6gsd3UbWkl7FcOiSssEcm');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-11 19:23:26
