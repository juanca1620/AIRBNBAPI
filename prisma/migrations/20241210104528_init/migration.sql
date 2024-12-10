-- CreateTable
CREATE TABLE `apartments` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `lugar` VARCHAR(100) NULL,
    `precio_noche` INTEGER NULL,
    `descripcion` TEXT NULL,
    `URL_imagen` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reservas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `horaInicio` DATETIME(0) NULL,
    `horaFinal` DATETIME(0) NULL,
    `id_apartamento` INTEGER NULL,
    `id_usuario` INTEGER NULL,

    INDEX `id_apartamento`(`id_apartamento`),
    INDEX `id_usuario`(`id_usuario`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `UserName` VARCHAR(50) NULL,
    `Correo` VARCHAR(100) NULL,
    `Contra` VARCHAR(100) NULL,
    `Numero` VARCHAR(15) NULL,
    `Cedula` VARCHAR(20) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
