show databases;

use futebol;

show databases;

use kgt_bank;

-- Criando uma tabela 
CREATE TABLE conta (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
    saldo DECIMAL,
    senha varchar(6)
);

-- Selecionar a tabela
SELECT * FROM conta;

-- Inserindo dados
INSERT INTO conta (nome, saldo, senha)
VALUES ('Doris', 10, '123');

SELECT * FROM conta;

INSERT INTO conta (nome, saldo, senha)
VALUES ('Caio', 3000, '321');

SELECT * FROM conta;

-- Apagando dados do banco
delete from conta where id=5;

INSERT INTO conta (nome, saldo, senha)
VALUES ('Pedro', 400, '1234');

INSERT INTO conta (nome, saldo, senha)
VALUES ('Pepe', 100, '1345');

CREATE TABLE usuario
SELECT * FROM conta