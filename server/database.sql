-- SQL terminal commands

CREATE DATABASE pernstack;

-- \c pernstack

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

ALTER TABLE todo
ADD COLUMN complete BOOLEAN DEFAULT FALSE;