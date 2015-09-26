USE fituprisingU;

DELETE FROM User;
ALTER TABLE User AUTO_INCREMENT = 1;
INSERT INTO `User` (`firstName`, `lastName`, `password`, `email`) 
			VALUES ('BJ', 'Yurkovich', SHA2('test', 256), 'bj.yurkovich@gmail.com');


DELETE FROM Presenter;
ALTER TABLE Presenter AUTO_INCREMENT = 1;
INSERT INTO `Presenter` (`firstName`, `lastName`, `credentials`, `imageLocation`, `about`, `focus`) 
				 VALUES ('Drew', 'Brazier', 'PhD', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTeDsUFnIOj0hEBz6DlUjd_Vf8pKgDMUWUy7VZr3IGKB-Cae_8wzxS5uA', 
				 	'Drew is a pyscotherapist', 'Making your life better is my focus');

DELETE FROM Course;
ALTER TABLE Course AUTO_INCREMENT = 1;
INSERT INTO `Course` (`title`, `bucketLocation`, `creationDate`, `shortDescription`, `longDescription`) 
			VALUES ('Get Skinny', 'www.google.com', '2015-09-26T10:10:10', 'This course is about getting skinny', 'This is amuch longer description about the course');

DELETE FROM CourseUser;
ALTER TABLE CourseUser AUTO_INCREMENT = 1;
INSERT INTO `CourseUser` (`userId`, `courseId`) 
			VALUES (1, 1);

DELETE FROM Journal;
ALTER TABLE Journal AUTO_INCREMENT = 1;
INSERT INTO `Journal` (`entry`) 
			VALUES ('Nothing written yet!');

DELETE FROM Module;
ALTER TABLE Module AUTO_INCREMENT = 1;
INSERT INTO `Module` (`courseId`, `journalId`, `previewLocation`) 
			VALUES (1,1,'https://youtu.be/LsKFsF2zpFM');

DELETE FROM FocusItem;
ALTER TABLE FocusItem AUTO_INCREMENT = 1;
INSERT INTO `FocusItem` (`itemText`, `number`, `moduleId`) 
			VALUES ('Focus Item 1',1,1);
INSERT INTO `FocusItem` (`itemText`, `number`, `moduleId`) 
			VALUES ('Focus Item 2',2,1);
INSERT INTO `FocusItem` (`itemText`, `number`, `moduleId`) 
			VALUES ('Focus Item 3',3,1);
INSERT INTO `FocusItem` (`itemText`, `number`, `moduleId`) 
			VALUES ('Focus Item 4',4,1);

DELETE FROM Workbook;
ALTER TABLE Workbook AUTO_INCREMENT = 1;
INSERT INTO `Workbook` (`moduleId`, `content`) 
			VALUES (1,'<h1>This is a workbook</h1><p>Here is a section in html</p>');



DELETE FROM WorkbookResponse;
ALTER TABLE WorkbookResponse AUTO_INCREMENT = 1;
INSERT INTO `WorkbookResponse` (`workbookId`, `response`) 
			VALUES (1,'<h1>This is a response</h1><p>here is a section in html</p>');