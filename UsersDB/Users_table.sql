CREATE DATABASE IF NOT EXISTS SpotsUsers;
USE SpotsUsers;

CREATE TABLE IF NOT EXISTS users (
  id int,
  fullname varchar(255),
  dob varchar(255),
  pronouns varchar(255),
  email varchar(255),
  abt varchar(255),
  datejoined TIMESTAMP,
  CONSTRAINT pk_id PRIMARY KEY (id)
);


CREATE TABLE IF NOT EXISTS user_friend (
  id_user int,
  id_friend int,
  CONSTRAINT fk_id FOREIGN KEY (id_user) REFERENCES users(id),
  CONSTRAINT fk_id FOREIGN KEY (id_friend) REFERENCES users(id)
);
