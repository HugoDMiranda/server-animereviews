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
);

CREATE TABLE users (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(200) NOT NULL,
  email VARCHAR(200) NOT NULL,
  password VARCHAR(500) NOT NULL,
  img VARCHAR(255),
  admin TINYINT,
  PRIMARY KEY (id)
);

CREATE TABLE comments (
  id INT(11) NOT NULL AUTO_INCREMENT,
  comment_text VARCHAR(1500) NOT NULL,
  ratio DECIMAL(2,1) NOT NULL,
  userId INT(11) NOT NULL,
  animeId INT(11) NOT NULL,
  PRIMARY KEY (id),
  KEY user_id_idx (userId),
  KEY anime_id_idx (animeId),
  CONSTRAINT `comments_user_fk` FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT `comments_anime_fk` FOREIGN KEY (animeId) REFERENCES anime_reviews(id) ON DELETE CASCADE
);