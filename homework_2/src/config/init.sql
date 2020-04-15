CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
    id        UUID DEFAULT UUID_GENERATE_V4(), 
    login     VARCHAR(255) NOT NULL, 
    password  VARCHAR(255) NOT NULL, 
    age       INT, 
    isDeleted BOOLEAN,
    PRIMARY KEY (id) 
);

INSERT INTO USERS (login, password, age, isDeleted) VALUES ('apollo@example.com', 'Password123', 18, FALSE);
INSERT INTO USERS (login, password, age, isDeleted) VALUES ('george@example.com', 'Password123', 25, FALSE);
INSERT INTO USERS (login, password, age, isDeleted) VALUES ('josie@example.com', 'Password123', 28, FALSE);
INSERT INTO USERS (login, password, age, isDeleted) VALUES ('cash@example.com', 'Password123', 36, FALSE);
INSERT INTO USERS (login, password, age, isDeleted) VALUES ('amber@example.com', 'Password123', 55, FALSE);
INSERT INTO USERS (login, password, age, isDeleted) VALUES ('frankie@example.com', 'Password123', 35, FALSE);
INSERT INTO USERS (login, password, age, isDeleted) VALUES ('moose@example.com', 'Password123', 33, FALSE);
INSERT INTO USERS (login, password, age, isDeleted) VALUES ('levi@example.com', 'Password123', 23, FALSE);
INSERT INTO USERS (login, password, age, isDeleted) VALUES ('jess@example.com', 'Password123', 35, FALSE);
INSERT INTO USERS (login, password, age, isDeleted) VALUES ('brody@example.com', 'Password123', 31, FALSE);
INSERT INTO USERS (login, password, age, isDeleted) VALUES ('riley@example.com', 'Password123', 28, FALSE);
INSERT INTO USERS (login, password, age, isDeleted) VALUES ('pearl@example.com', 'Password123', 22, FALSE);
INSERT INTO USERS (login, password, age, isDeleted) VALUES ('ellie@example.com', 'Password123', 20, FALSE);
INSERT INTO USERS (login, password, age, isDeleted) VALUES ('adele@example.com', 'Password123', 42, FALSE);
INSERT INTO USERS (login, password, age, isDeleted) VALUES ('jackson@example.com', 'Password123', 19, FALSE);
