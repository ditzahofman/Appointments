-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 10, 2023 at 08:30 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `meatings`
--
CREATE DATABASE IF NOT EXISTS `meatings` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `meatings`;

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `appointmentId` int(11) NOT NULL,
  `devGroupId` int(11) NOT NULL,
  `start` datetime NOT NULL,
  `end` datetime NOT NULL,
  `description` varchar(100) NOT NULL,
  `room` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `appointments`
--

INSERT INTO `appointments` (`appointmentId`, `devGroupId`, `start`, `end`, `description`, `room`) VALUES
(1, 3, '2023-06-12 10:10:00', '2023-06-12 01:30:00', 'Design next project', 'Green Room'),
(2, 2, '2023-06-06 12:00:00', '2023-06-06 02:00:00', 'Schedule pluning for next week', 'Central Room'),
(3, 1, '2023-05-25 08:30:00', '2023-05-25 10:00:00', 'Bag checking', 'Yellow Room'),
(4, 4, '2023-07-08 11:30:00', '2023-07-08 13:00:00', 'Design next project', 'Red Room'),
(5, 2, '2023-05-26 16:00:00', '2023-05-26 17:30:00', 'Discussion about new features ', 'Centeral Room'),
(6, 4, '2023-05-27 09:30:00', '2023-05-27 12:00:00', 'New branding design', 'Amir room'),
(13, 1, '2023-06-05 09:00:00', '2023-06-05 10:00:00', 'Technical DR', 'Big blue Room'),
(14, 2, '2023-05-12 12:30:00', '2023-05-12 13:30:00', 'Adding an identical block to some of the components', 'Blue Room'),
(16, 1, '2023-06-05 09:00:00', '2023-06-05 10:00:00', 'Technical DR', 'Big blue Room'),
(17, 1, '2023-05-10 10:30:00', '2023-05-10 11:30:00', 'Discuss about ...', 'pink room');

-- --------------------------------------------------------

--
-- Table structure for table `devgroups`
--

CREATE TABLE `devgroups` (
  `devGroupId` int(11) NOT NULL,
  `devGroupName` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `devgroups`
--

INSERT INTO `devgroups` (`devGroupId`, `devGroupName`) VALUES
(1, 'Java Team'),
(2, 'React Team'),
(3, 'DevOps Team'),
(4, 'UI Team');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`appointmentId`),
  ADD KEY `devGropId` (`devGroupId`);

--
-- Indexes for table `devgroups`
--
ALTER TABLE `devgroups`
  ADD PRIMARY KEY (`devGroupId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `appointmentId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `devgroups`
--
ALTER TABLE `devgroups`
  MODIFY `devGroupId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `appointments`
--
ALTER TABLE `appointments`
  ADD CONSTRAINT `appointments_ibfk_1` FOREIGN KEY (`devGroupId`) REFERENCES `devgroups` (`devGroupId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
