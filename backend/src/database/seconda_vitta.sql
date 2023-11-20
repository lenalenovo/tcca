create database seconda_vitta;
use seconda_vitta;

 
create table usuarios(
	id int not null auto_increment,
	nome varchar(120) not null,
    	usuario varchar(120) not null,
    	email varchar(120)not null,
    	senha varchar(8) not null,
    	endereco varchar(120) default null,
    	tipo_usuario enum('Pessoa','Empresa'),
    	primary key (id)
);
ALTER TABLE `seconda_vitta`.`usuarios` 
CHANGE COLUMN `senha` `senha` VARCHAR(244) NOT NULL ;


create table posts (
	id int auto_increment not null,
	texto text not null,
	concluido enum ('t', 'f') default ('f'),
	id_usuario int not null,
	qtd_likes bigint, 
	PRIMARY KEY (id),
	FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

create table likes(
	id_post int not null,
	id_usuario int not null,
	FOREIGN KEY (id_post) REFERENCES posts(id),
	FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);
