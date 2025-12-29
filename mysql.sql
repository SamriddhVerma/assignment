CREATE TABLE schools.schools (
	id INT auto_increment NOT NULL,
	name VARCHAR(511) NULL,
	address VARCHAR(511) NULL,
	state VARCHAR(255) NULL,
	city VARCHAR(100) NULL,
	contact BIGINT NULL,
	image VARCHAR(511) NULL,
	email_id VARCHAR(255) NULL,
	CONSTRAINT schools_pk PRIMARY KEY (id)
)