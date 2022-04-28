CREATE DATABASE IF NOT EXISTS spotsusers;
USE spotsusers;

CREATE TABLE IF NOT EXISTS users (
  username VARCHAR(255) PRIMARY KEY NOT NULL, 
  fullname varchar(255),
  dob varchar(255),
  pronouns varchar(255),
  email varchar(255),
  abt varchar(255),
  datejoined TIMESTAMP
);


CREATE TABLE IF NOT EXISTS user_friend (
  username varchar(255) NOT NULL,
  username_friend varchar(255) NOT NULL,
  CONSTRAINT fk_username FOREIGN KEY (username) REFERENCES users(username),
  CONSTRAINT fk_username_friend FOREIGN KEY (username_friend) REFERENCES users(username)
);
