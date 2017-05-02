CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers;
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured boolean(1) DEFAULT FALSE, 
	bdate timestamp(5) DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id) 
);
