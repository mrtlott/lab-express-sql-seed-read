DROP DATABASE IF EXISTS song_dev;
CREATE DATABASE song_dev;


\c song_dev;


CREATE TABLE song(
id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
is_favorite Boolean
);