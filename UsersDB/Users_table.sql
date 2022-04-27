CREATE DATABASE IF NOT EXISTS spotsusers;
USE spotsusers;

CREATE TABLE IF NOT EXISTS users (
  id int UNIQUE,
  fullname varchar(255),
  dob varchar(255),
  pronouns varchar(255),
  email varchar(255),
  abt varchar(255),
  datejoined TIMESTAMP,
  CONSTRAINT id PRIMARY KEY (id)
);


CREATE TABLE IF NOT EXISTS user_friend (
  id_user int UNIQUE,
  id_friend int UNIQUE,
  CONSTRAINT id_user FOREIGN KEY (id_user) REFERENCES users(id),
  CONSTRAINT id_friend FOREIGN KEY (id_friend) REFERENCES users(id)
);
