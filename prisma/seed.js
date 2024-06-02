const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

async function main() {
  const seedSQL = fs.readFileSync(path.join('./', 'init.sql'), 'utf-8');
  
  const executeSQL = async (sql) => {
    const queries = sql.split(';').map(query => query.trim()).filter(query => query);
    for (const query of queries) {
      await prisma.$executeRawUnsafe(query);
    }
  };

  await executeSQL(seedSQL);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
