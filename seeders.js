const fs = require('fs');
const { faker } = require('@faker-js/faker');

const generateFakeProperty = (total) => {
  let data = '';
  for (let i = 0; i < total; i++) {
    const name = faker.string.alpha(5)
    const title = faker.word.adjective()
    const description = faker.lorem.sentence()
    const type = faker.helpers.arrayElement(['rent', 'sale']);
    const price = faker.number.int({ min: 5000, max: 20000 })
    const bedroom = faker.number.int({ min: 1, max: 3 })
    const area = faker.number.int({ min: 800, max: 2000 })
    const image1 = faker.image.url()
    const image2 = faker.image.url()
    const image3 = faker.image.url()
    const image4 = faker.image.url()
    const image5 = faker.image.url()
    data += `('${name}', '${title}', '${description}', '${type}', '${price}', '${bedroom}', '${area}', '${image1}', '${image2}', '${image3}', '${image4}', '${image5}'),\n`;
  }
  // Remove the last comma and newline, and add a semicolon
  data = data.slice(0, -2) + ';\n';
  return data;
};

const total = 10000;
const insertPropertyQuery = `INSERT INTO property (project_name, title, property_description, property_type, price, bedroom, area, image1, image2, image3, image4, image5) VALUES \n${generateFakeProperty(total)}`;

fs.writeFileSync('init.sql', `
CREATE TABLE IF NOT EXISTS property (
  id INT AUTO_INCREMENT PRIMARY KEY,
  project_name VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  property_description TEXT,
  property_type VARCHAR(255) NOT NULL,
  price VARCHAR(255) NOT NULL,
  bedroom VARCHAR(255) NOT NULL,
  area VARCHAR(255) NOT NULL,
  image1 VARCHAR(255),
  image2 VARCHAR(255),
  image3 VARCHAR(255),
  image4 VARCHAR(255),
  image5 VARCHAR(255),
  INDEX idx_propertyType (property_type),
  INDEX idx_bedroom (bedroom),
  INDEX idx_area (area)
);

${insertPropertyQuery}
`);