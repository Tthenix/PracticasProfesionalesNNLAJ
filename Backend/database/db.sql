CREATE DATABASE Huerto;

USE Invernadero;

-- TABLE PLANTA
-- all pasword wil be encrypted using SHA1
CREATE TABLE PLANTA (
  id INT(11) NOT NULL,
  planta VARCHAR(16) NOT NULL,
  clima int(60) NOT NULL,
  humedad int(100) NOT NULL,
  suelo int(60) NOT NULL,
  tiempo int(60) NOT NULL
);

CREATE TABLE Macetas(
  id INT (11) NOT NULL,
  Tierra INT(60) NOT NULL,
  Riego INT(60) NOT NULL,
  HUMEDAD INT(60) NOT NULL,
  Plantado VARCHAR(60) NOT NULL
)

ALTER TABLE PLANTA
  ADD PRIMARY KEY (id);

ALTER TABLE PLANTA
  MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE PLANTA;

INSERT INTO PLANTA (id, planta, clima, humedad, suelo, tiempo) 
  VALUES (1, 'zapallo', 'arido', '25', '60%', '160');
  VALUES (2, 'romanesco', 'arido', '15', '80%', '150');
  VALUES (3, 'dragon', 'arido', '12', '93%', '243');
  VALUES (4, 'espinaca', 'arido', '32', '47%', '55');
  VALUES (5, 'ajo', 'arido', '17', '32%', '152');
  VALUES (6, 'ají', 'arido', '23', '45%', '25');
  VALUES (7, 'frutilla', 'arido', '22', '15%', '30');

SELECT * FROM PLANTA;

INSERT INTO Macetas (id, Tierra, Riego, HUMEDAD, Plantado)
  VALUES (1, '50%', '3', '12.5', 'Si')
  VALUES (2, '50%', '4L/H', '85-90', 'Si')
  VALUES (3, '50%', '6-8', '0-8', 'Si')
  VALUES (4, '50%', '1F', '95-98', 'Si')
  VALUES (5, '50%', '4-5 días', '2-5', 'Si')
  VALUES (6, '50%', 'Casi llena', '7.5', 'Si')
  VALUES (7, '50%', '0-5', '1/2 veces', 'Si')

SELECT FROM * Macetas;

-- LINKS TABLE
CREATE TABLE links (
  id INT(11) NOT NULL,
  title VARCHAR(150) NOT NULL,
  url VARCHAR(255) NOT NULL,
  description TEXT,
  user_id INT(11),
  created_at timestamp NOT NULL DEFAULT current_timestamp,
  CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(id)
);

ALTER TABLE links
  ADD PRIMARY KEY (id);

ALTER TABLE links
  MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE links;