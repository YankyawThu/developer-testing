-- CreateTable
CREATE TABLE `property` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `project_name` VARCHAR(255) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `property_description` TEXT NULL,
    `property_type` VARCHAR(255) NOT NULL,
    `price` VARCHAR(255) NOT NULL,
    `bedroom` VARCHAR(255) NOT NULL,
    `area` VARCHAR(255) NOT NULL,
    `image1` VARCHAR(255) NULL,
    `image2` VARCHAR(255) NULL,
    `image3` VARCHAR(255) NULL,
    `image4` VARCHAR(255) NULL,
    `image5` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
