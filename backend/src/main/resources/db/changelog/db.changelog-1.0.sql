--liquibase formatted sql

--changeset alexprokopiev:1
CREATE TABLE IF NOT EXISTS employees
(
    id BIGSERIAL PRIMARY KEY ,
    firstname VARCHAR(64) NOT NULL,
    lastname VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL UNIQUE
);