CREATE DATABASE IF NOT EXISTS cruddb;

USE cruddb;

CREATE TABLE anime_reviews (
  id INT(11) NOT NULL AUTO_INCREMENT,
  animeName VARCHAR(255) NOT NULL,
  animeStatus VARCHAR(25) NOT NULL,
  animeImg VARCHAR(200) NOT NULL,
  animeYear INT(4) NOT NULL,
  animeType VARCHAR(25) NOT NULL,
  animeSynopsis VARCHAR(1500) NOT NULL,
  animeCategory VARCHAR(45) NOT NULL,
  PRIMARY KEY (id)
)