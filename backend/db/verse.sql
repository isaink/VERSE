DROP DATABASE IF EXISTS verse;
CREATE DATABASE verse;
\c verse

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    password_digest VARCHAR NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    avatar TEXT,
);

-- FUTURE: books or comics: I want to unique list for each one. 
-- CREATE CATALOG TABLE.
CREATE TABLE book(
    id SERIAL PRIMARY KEY,
    autor VARCHAR NOT NULL,
    cover VARCHAR,
    editorial VARCHAR,
    pages VARCHAR,
    synopsis VARCHAR,
);

CREATE TABLE autor(
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    about VARCHAR,
    origin VARCHAR,
    books VARCHAR
);

CREATE TABLE genres(
    id SERIAL PRIMARY KEY,
    genre_id INT REFERENCES book(id) ON DELETE SET NULL,

);

CREATE TABLE read(
    id SERIAL PRIMARY KEY,
    read_id INT REFERENCES book(id) ON DELETE SET NULL,
);

CREATE TABLE fav(
    id SERIAL PRIMARY KEY,
    fav_id INT REFERENCES book(id) ON DELETE SET NULL,
);

-- CREATE TABLE rankings()

INSERT INTO users(name, password_digest, email, avatar)
VALUES('Isa', 'lala@gmail.com', 'https://i.pinimg.com/originals/2b/36/8a/2b368a5eedc6933edd5413bf1001a78d.jpg');

INSERT INTO book(autor, cover, editorial, pages, synopsis)
VALUES()