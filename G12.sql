-- MySQL dump 10.16  Distrib 10.1.37-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: final_project
-- ------------------------------------------------------
-- Server version	10.1.37-MariaDB-3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `manufactwer`
--

DROP TABLE IF EXISTS `manufactwer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `manufactwer` (
  `MId` int(11) NOT NULL AUTO_INCREMENT,
  `MName` varchar(45) NOT NULL,
  PRIMARY KEY (`MId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manufactwer`
--

LOCK TABLES `manufactwer` WRITE;
/*!40000 ALTER TABLE `manufactwer` DISABLE KEYS */;
INSERT INTO `manufactwer` VALUES (1,'HONDA'),(2,'YAMAHA'),(3,'SUZUKI'),(4,'KAWASAKI'),(5,'DUCATI');
/*!40000 ALTER TABLE `manufactwer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `owner`
--

DROP TABLE IF EXISTS `owner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `owner` (
  `OwnerId` varchar(45) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `sex` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `LicenceNumber` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`OwnerId`),
  KEY `O_Licence_idx` (`LicenceNumber`),
  CONSTRAINT `O_Licence` FOREIGN KEY (`LicenceNumber`) REFERENCES `vehiclelicence` (`LicenceNumber`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `owner`
--

LOCK TABLES `owner` WRITE;
/*!40000 ALTER TABLE `owner` DISABLE KEYS */;
INSERT INTO `owner` VALUES ('C226677881','Gorira','Female','台北市大安區羅斯福路四段1號','02-23627651','NTU-9466'),('F123456789','Pig','Male','新北市淡水區英專路151號','02-26215656','TKU-7853'),('K204410178','Duck','Female','桃園市中壢區中大路300號','03-4227151','NCU-1680'),('Q204410954','Cat','Female','嘉義縣民雄鄉大學路一段168號','05-2720411','CCU-2468'),('U129854769','Chicken','Male','台南市東區大學路1號','06-2757575','CKU-8857');
/*!40000 ALTER TABLE `owner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicle`
--

DROP TABLE IF EXISTS `vehicle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vehicle` (
  `EngineNumber` varchar(45) NOT NULL,
  `model` varchar(45) DEFAULT NULL,
  `color` varchar(45) DEFAULT NULL,
  `OwnerId` varchar(45) DEFAULT NULL,
  `MId` int(11) DEFAULT NULL,
  PRIMARY KEY (`EngineNumber`),
  KEY `Vehicle_O_idx` (`OwnerId`),
  KEY `Mid_idx` (`MId`),
  CONSTRAINT `Mid` FOREIGN KEY (`MId`) REFERENCES `manufactwer` (`MId`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `Vehicle_O` FOREIGN KEY (`OwnerId`) REFERENCES `owner` (`OwnerId`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle`
--

LOCK TABLES `vehicle` WRITE;
/*!40000 ALTER TABLE `vehicle` DISABLE KEYS */;
INSERT INTO `vehicle` VALUES ('D68746778','1299','紅','C226677881',5),('H1124688996','CBR1000RR','彩繪','K204410178',1),('S2367432181','GSX-R1000','藍','Q204410954',3),('S3345678','Hayabusa','白','K204410178',3),('Y432143','R1','藍','F123456789',2);
/*!40000 ALTER TABLE `vehicle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehiclelicence`
--

DROP TABLE IF EXISTS `vehiclelicence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vehiclelicence` (
  `LicenceNumber` varchar(45) NOT NULL,
  `VehicleKind` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`LicenceNumber`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehiclelicence`
--

LOCK TABLES `vehiclelicence` WRITE;
/*!40000 ALTER TABLE `vehiclelicence` DISABLE KEYS */;
INSERT INTO `vehiclelicence` VALUES ('CCU-2468','普通重型機車'),('CKU-8857','大型重型機車'),('NCU-1680','普通重型機車'),('NTU-9466','大型重型機車'),('TKU-7853','輕型機車');
/*!40000 ALTER TABLE `vehiclelicence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `violation`
--

DROP TABLE IF EXISTS `violation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `violation` (
  `time` varchar(45) DEFAULT NULL,
  `item` varchar(45) DEFAULT NULL,
  `place` varchar(45) DEFAULT NULL,
  `LicenceNumber` varchar(45) NOT NULL,
  `OwnerId` varchar(45) DEFAULT NULL,
  KEY `V_Licence_idx` (`LicenceNumber`),
  KEY `Violation_idx` (`OwnerId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `violation`
--

LOCK TABLES `violation` WRITE;
/*!40000 ALTER TABLE `violation` DISABLE KEYS */;
INSERT INTO `violation` VALUES ('2018/12/21','超速','台北市北投區大業路10號','CCU-2468','C226677881'),('2018/11/30','違規停車','台北市北投區大業路10號','CKU-8857','F123456789'),('2017/09/18','未打方向燈','新北市淡水區中正東路口','NCU-1680','K204410178'),('2018/06/18','未打方向燈','新北市淡水區民權路','NTU-9466','Q204410954'),('2018/03/03','人行道停車','台北市中正區汀洲路5號','TKU-7853','U129854769');
/*!40000 ALTER TABLE `violation` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-24 14:56:02
