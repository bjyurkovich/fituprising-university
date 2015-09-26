
DROP DATABASE IF EXISTS `fituprisingU` ;
CREATE SCHEMA IF NOT EXISTS `fituprisingU` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `fituprisingU` ;

-- -----------------------------------------------------
-- Table `User`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `User` ;
CREATE TABLE IF NOT EXISTS `User` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `presenterId` BIGINT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `firstName` VARCHAR(50) NOT NULL,
  `lastName` VARCHAR(100) NOT NULL,
  `creationDate` TIMESTAMP NULL,
  `imageLocation` VARCHAR(1024) NULL,
  `deactivated` TINYINT(1) NOT NULL,
  `lastUpdated` TIMESTAMP NOT NULL DEFAULT 0 ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PaymentCard`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `PaymentCard` ;
CREATE TABLE IF NOT EXISTS `PaymentCard` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `userId` BIGINT NULL,
  `token` TEXT NOT NULL,
  `creationDate` TIMESTAMP NULL,
  `registrationDate` TIMESTAMP NULL,
  `lastUpdated` TIMESTAMP NOT NULL DEFAULT 0 ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
CONSTRAINT `paymentcard_user_fk`
  FOREIGN KEY (`userId` )
  REFERENCES `User` (`id` )
  ON DELETE NO ACTION
  ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Course`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Course` ;
CREATE TABLE IF NOT EXISTS `Course` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `bucketLocation` VARCHAR(1024) NULL,
  `creationDate` TIMESTAMP NULL,
  `shortDescription` TEXT NOT NULL,
  `longDescription` TEXT NOT NULL,
  `lastUpdated` TIMESTAMP NOT NULL DEFAULT 0 ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CourseUser`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `CourseUser` ;
CREATE TABLE IF NOT EXISTS `CourseUser` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `userId` BIGINT NULL,
  `courseId` BIGINT NULL,
  `lastUpdated` TIMESTAMP NOT NULL DEFAULT 0 ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
CONSTRAINT `courseuser_user_fk`
  FOREIGN KEY (`userId` )
  REFERENCES `User` (`id` )
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
CONSTRAINT `courseuser_course_fk`
  FOREIGN KEY (`userId` )
  REFERENCES `Course` (`id` )
  ON DELETE NO ACTION
  ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Presenter`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Presenter` ;
CREATE TABLE IF NOT EXISTS `Presenter` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(50) NOT NULL,
  `lastName` VARCHAR(100) NOT NULL,
  `credentials` VARCHAR(255) NULL,
  `creationDate` TIMESTAMP NULL,
  `imageLocation` VARCHAR(1024) NULL,
  `lastUpdated` TIMESTAMP NOT NULL DEFAULT 0 ON UPDATE CURRENT_TIMESTAMP,
  `about` TEXT NULL,
  `focus` TEXT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Journal`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Journal` ;
CREATE TABLE IF NOT EXISTS `Journal` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `entry` TEXT NULL,
  `lastUpdated` TIMESTAMP NOT NULL DEFAULT 0 ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table ` Module`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Module` ;
CREATE TABLE IF NOT EXISTS `Module` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `courseId` BIGINT NOT NULL,
  `journalId` BIGINT NOT NULL,
  `previewLocation` VARCHAR(1024) NULL,
  `lastUpdated` TIMESTAMP NOT NULL DEFAULT 0 ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
CONSTRAINT `module_course_fk`
  FOREIGN KEY (`courseId` )
  REFERENCES `Course` (`id` )
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
CONSTRAINT `module_journal_fk`
  FOREIGN KEY (`journalId` )
  REFERENCES `Journal` (`id` )
  ON DELETE NO ACTION
  ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `FocusItem`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `FocusItem` ;
CREATE TABLE IF NOT EXISTS `FocusItem` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `itemText` TEXT NULL,
  `number` INT NOT NULL,
  `moduleId` BIGINT NULL,
  `lastUpdated` TIMESTAMP NOT NULL DEFAULT 0 ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
CONSTRAINT `focusitem_module_fk`
  FOREIGN KEY (`moduleId` )
  REFERENCES `Module` (`id` )
  ON DELETE NO ACTION
  ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `Workbook`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Workbook` ;
CREATE TABLE IF NOT EXISTS `Workbook` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `moduleId` BIGINT NULL,
  `content` TEXT NULL,
  `lastUpdated` TIMESTAMP NOT NULL DEFAULT 0 ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
CONSTRAINT `workbook_module_fk`
  FOREIGN KEY (`moduleId` )
  REFERENCES `Module` (`id` )
  ON DELETE NO ACTION
  ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `WorkbookResponse`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `WorkbookResponse` ;
CREATE TABLE IF NOT EXISTS `WorkbookResponse` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `workbookId` BIGINT NULL,
  `response` TEXT NULL,
  `lastUpdated` TIMESTAMP NOT NULL DEFAULT 0 ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
CONSTRAINT `workbookrsponse_workbook_fk`
  FOREIGN KEY (`workbookId` )
  REFERENCES `Workbook` (`id` )
  ON DELETE NO ACTION
  ON UPDATE NO ACTION)
ENGINE = InnoDB;






