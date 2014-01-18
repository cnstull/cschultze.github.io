-- phpMyAdmin SQL Dump
-- version 4.0.0-rc1
-- http://www.phpmyadmin.net
--
-- Host: sulley.cah.ucf.edu
-- Generation Time: Apr 23, 2013 at 08:53 PM
-- Server version: 5.5.29-0ubuntu0.12.04.2
-- PHP Version: 5.4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `th960554`
--

-- --------------------------------------------------------

--
-- Table structure for table `saved_products`
--

CREATE TABLE IF NOT EXISTS `saved_products` (
  `save_id` int(10) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(50) NOT NULL,
  `product_price` float NOT NULL,
  `img_link` varchar(99) NOT NULL,
  PRIMARY KEY (`save_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=150 ;

--
-- Dumping data for table `saved_products`
--

INSERT INTO `saved_products` (`save_id`, `product_name`, `product_price`, `img_link`) VALUES
(105, 'Three Stooges: Nutty But Nice - DVD', 12.99, 'http://images.bestbuy.com/BestBuy_US/images/products/4054/4054249.jpg'),
(108, 'The American Gangster - Fullscreen - DVD', 14.99, 'http://images.bestbuy.com/BestBuy_US/images/products/8680/8680616.jpg'),
(109, 'I Now Pronounce You Chuck ', 8.99, 'http://images.bestbuy.com/BestBuy_US/images/products/8550/8550196.jpg'),
(121, 'Totally Trucks: Dirt Monsters - DVD', 9.99, 'http://images.bestbuy.com/BestBuy_US/images/products/1939/19395589.jpg'),
(122, 'Deception - Widescreen Dubbed Subtitle AC3 - DVD', 12.99, 'http://images.bestbuy.com/BestBuy_US/images/products/8959/8959683.jpg'),
(132, 'Hidden - AC3 Dolby - DVD', 14.99, 'http://images.bestbuy.com/BestBuy_US/images/products/1993/19930812.jpg'),
(143, 'Shadows of the Orient - B', 5.99, 'http://images.bestbuy.com/BestBuy_US/images/products/1437/14377783.jpg'),
(144, 'Essential R', 19.99, 'http://images.bestbuy.com/BestBuy_US/images/products/nonsku/default_movies_l.jpg'),
(145, 'The Gun (From 6 to 7:30 p.m.) - DVD', 5.99, 'http://images.bestbuy.com/BestBuy_US/images/products/1449/14498466.jpg'),
(146, 'The Big Heat - B', 12.99, 'http://images.bestbuy.com/BestBuy_US/images/products/1125/11252967.jpg'),
(148, 'Spiker - Widescreen Subtitle AC3 Dolby - DVD', 8.99, 'http://images.bestbuy.com/BestBuy_US/images/products/1740/17401802.jpg'),
(149, 'The Price of Freedom - DVD', 12.99, 'http://images.bestbuy.com/BestBuy_US/images/products/1691/16919809.jpg');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
