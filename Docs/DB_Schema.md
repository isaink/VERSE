# Schema

## USERS
column name          | data type | details
---------------------|-----------|-----------------------
id                   | integer   | not null, primary key
name                 | string    | not null
email                | string    | not null, indexed, unique
password_digest      | string    | not null, indexed,
picture              | string    | 

## AUTORS
column name          | data type | details
---------------------|-----------|-----------------------
id                   | integer   | not null, primary key
autor_name           | string    | not null
autor_lastname       | string    | not null
pen_name             | string    |
picture              | string    | 
bio                  | string    | 
born                 | string    | 
birthplace           | string    | 

## GENRES
column name          | data type | details
---------------------|-----------|-----------------------
id                   | integer   | not null, primary key
type_genre           | string    | not null
type2_genre          | string    | not null
type3_genre          | string    | not null

## BOOKS
column name          | data type | details
---------------------|-----------|-----------------------
id                   | integer   | not null, primary key
cover                | string    | 
title                | string    | not null
synopsis             | string    | 
published_date       | string    | not null
pages                | string    | 
serie                | string    | 
genre_id             | integer   | not null, foreign key

## BOOKS by AUTOR: a join table
column name          | data type | details
---------------------|-----------|-----------------------
id                   | integer   | not null, primary key
autor_id             | integer   | not null, foreign key,
book_id              | integer   | not null, foreign key

## BOOKS by USER: a join table
column name          | data type | details
---------------------|-----------|-----------------------
id                   | integer   | not null, primary key
autor_id             | integer   | not null, foreign key,
user_id              | integer   | not null, foreign key

## TYPES OF BOOKS
column name          | data type | details
---------------------|-----------|-----------------------
id                   | integer   | not null, primary key
type                 | string    | not null
book_id              | integer   | not null, foreign key

## REVIEWS 
column name          | data type | details
---------------------|-----------|-----------------------
id                   | integer   | not null, primary key
reviewer             | integer   | not null, foreign key
content              | string    | not null
created_at           | string    | not null
rating               | string    | 
book_id              | integer   | not null, foreign key

## READING PROCESS
column name          | data type | details
---------------------|-----------|-----------------------
id                   | integer   | not null, primary key
completed            | boolean   | 
started              | boolean   | 
book_id              | integer   | not null, foreign key
user_id              | integer   | not null, foreign key

## FAVORITE BOOK
column name          | data type | details
---------------------|-----------|-----------------------
id                   | integer   | not null, primary key
book_id              | integer   | not null, foreign key
user_id              | integer   | not null, foreign key

## BOOKSHELF_USER
column name          | data type | details
---------------------|-----------|-----------------------
id                   | integer   | not null, primary key
book_id              | integer   | not null, foreign key
user_id              | integer   | not null, foreign key