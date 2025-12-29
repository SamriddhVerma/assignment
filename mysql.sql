CREATE TABLE schools.schools (
	id INT auto_increment NOT NULL,
	name VARCHAR(511) NULL,
	address TEXT NULL,
	state TEXT NULL,
	city TEXT NULL,
	contact BIGINT NULL,
	image TEXT NULL,
	email_id TEXT NULL,
	CONSTRAINT schools_pk PRIMARY KEY (id)
)
