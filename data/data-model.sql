CREATE SCHEMA IF NOT EXISTS `fituprising` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `fituprising` ;

-- -----------------------------------------------------
-- Table `fituprising`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fituprising`.`User` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `firstName` VARCHAR(50) NOT NULL,
  `lastName` VARCHAR(100) NOT NULL,
  `creationDate` TIMESTAMP NULL,
  `registered` TINYINT(1) NOT NULL,
  `registrationDate` TIMESTAMP NULL,
  `registrationId` BIGINT UNSIGNED NULL,
  `profileImageId` BIGINT UNSIGNED NOT NULL DEFAULT 0,
  `deactivated` TINYINT(1) NOT NULL,
  `admin` TINYINT(1) NOT NULL DEFAULT 0 COMMENT 'The admin field is set if the user is an administrator. Administrators have access to information to which regular users may not have access.',
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC))
ENGINE = InnoDB;