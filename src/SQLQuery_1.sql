

CREATE TABLE objFormData (
    sku             INT          NOT NULL,
    descontinuado   TINYINT      NOT NULL,
    marca           VARCHAR(10)  NOT NULL,
    modelo          VARCHAR(10)  NOT NULL,
    departamento    VARCHAR(10)  NOT NULL,
    clase           INT          NOT NULL,
    familia         INT          NOT NULL,
    stock           INT          NOT NULL,
    cantidad        INT          NOT NULL,
    fechaAlta       DATE         NOT NULL,
    fechaBaja       DATE         NOT NULL,
    PRIMARY KEY(sku)
);

CREATE TABLE departamento(
    num_departamento    INT             NOT NULL,
    departamento        VARCHAR(10)     NOT NULL,
    PRIMARY KEY(departamento)
);

CREATE TABLE clase(
    num_clase    INT             NOT NULL,
    clase        VARCHAR(10)     NOT NULL,
    PRIMARY KEY(clase)
);

CREATE TABLE familia(
    num_familia    INT             NOT NULL,
    familia        VARCHAR(10)     NOT NULL,
    PRIMARY KEY(familia)
);



