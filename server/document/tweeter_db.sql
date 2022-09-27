/*
SQLyog Professional v13.1.1 (64 bit)
MySQL - 10.4.21-MariaDB : Database - tweeter_db
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


/*Table structure for table `contents` */

DROP TABLE IF EXISTS `contents`;

CREATE TABLE `contents` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) DEFAULT NULL,
  `description` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `contents` */

insert  into `contents`(`id`,`user_id`,`description`,`created_at`,`updated_at`,`deleted_at`) values 
(1,1,'ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna','2022-09-26 23:03:29','2022-09-26 23:03:29',NULL),
(2,1,'vitae congue eu consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum','2022-09-26 23:04:06','2022-09-26 23:04:06',NULL),
(3,1,'ultrices dui sapien eget mi proin sed libero enim sed faucibus turpis in eu mi','2022-09-26 23:05:08','2022-09-26 23:05:08',NULL),
(4,1,'Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!','2022-09-27 00:55:38','2022-09-27 00:55:38',NULL),
(5,1,'Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!','2022-09-27 00:55:49','2022-09-27 00:55:49',NULL),
(6,1,'Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!','2022-09-27 00:56:32','2022-09-27 00:56:32',NULL),
(7,1,'condimentum lacinia quis vel eros donec ac odio tempor orci dapibus','2022-09-27 01:15:36','2022-09-27 01:15:36',NULL),
(8,2,'faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper','2022-09-27 01:28:08','2022-09-27 01:28:08',NULL);

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(191) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(191) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `deleted_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `users` */

insert  into `users`(`id`,`name`,`email`,`password`,`created_at`,`updated_at`,`deleted_at`) values 
(1,'Max','max@gmail.com','$2a$12$LyWTbcSyu1CvFI/jbX2s..Qj4MO3r00Rfx8IkklSv1MloOUYRDg0K','2022-09-26 22:02:03','2022-09-26 22:02:03','2022-09-26 22:02:03'),
(2,'Dave','dave@gmail.com','$2a$12$K98URWiDr/CCbC2abwgXjev3y6.spjBu3nm9C5V4sAalST/1sasya','2022-09-26 22:02:06','2022-09-26 22:02:06','2022-09-26 22:02:06'),
(3,'Neal','neal@gmail.com','$2a$12$dGVhF/QaY2wnVSBzb8GnLeOEeDAVawteMxezgznwser5R7vHI8fcO','2022-09-26 22:02:10','2022-09-26 22:02:10','2022-09-26 22:02:10');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
