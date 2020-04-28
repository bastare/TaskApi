CREATE TABLE IF NOT EXISTS `__EFMigrationsHistory` (
    `MigrationId` varchar(95) NOT NULL,
    `ProductVersion` varchar(32) NOT NULL,
    CONSTRAINT `PK___EFMigrationsHistory` PRIMARY KEY (`MigrationId`)
);

CREATE TABLE `User` (
    `Id` bigint NOT NULL AUTO_INCREMENT,
    `Login` varchar(16) NOT NULL,
    `PasswordHash` tinyblob NOT NULL,
    `PasswordSalt` tinyblob NOT NULL,
    CONSTRAINT `PK_User` PRIMARY KEY (`Id`)
);

CREATE TABLE `Project` (
    `Id` bigint NOT NULL AUTO_INCREMENT,
    `Name` varchar(32) NOT NULL,
    `UserId` bigint NOT NULL,
    CONSTRAINT `PK_Project` PRIMARY KEY (`Id`),
    CONSTRAINT `FK_Project_User_UserId` FOREIGN KEY (`UserId`) REFERENCES `User` (`Id`) ON DELETE CASCADE
);

CREATE TABLE `Task` (
    `Id` bigint NOT NULL AUTO_INCREMENT,
    `Name` varchar(32) NOT NULL,
    `Deadline` datetime(6) NOT NULL,
    `Status` ENUM('Done','Expired','Onway') NOT NULL,
    `ProjectId` bigint NULL,
    CONSTRAINT `PK_Task` PRIMARY KEY (`Id`),
    CONSTRAINT `FK_Task_Project_ProjectId` FOREIGN KEY (`ProjectId`) REFERENCES `Project` (`Id`) ON DELETE CASCADE
);

CREATE INDEX `IX_Project_UserId` ON `Project` (`UserId`);

CREATE INDEX `IX_Task_ProjectId` ON `Task` (`ProjectId`);

INSERT INTO `__EFMigrationsHistory` (`MigrationId`, `ProductVersion`)
VALUES ('20200424024003_addedEnum', '3.1.3');

ALTER TABLE `Task` MODIFY COLUMN `Deadline` DATE NOT NULL;

INSERT INTO `__EFMigrationsHistory` (`MigrationId`, `ProductVersion`)
VALUES ('20200424032511_addedEnummm', '3.1.3');

ALTER TABLE `Task` ADD `Priority` int NOT NULL DEFAULT 0;

ALTER TABLE `Project` MODIFY COLUMN `UserId` bigint NULL;

INSERT INTO `__EFMigrationsHistory` (`MigrationId`, `ProductVersion`)
VALUES ('20200426161408_addedPrior', '3.1.3');

