Instructions...

- npm install
- node seeders.js

To run on localhost or on docker, change DATABASE_URL in .env file to specific url

And then run on docker. Note, before building, ports 3000 and 3306 must be available
docker-compose up --build

Run on local then need to migrate database and seed with prisma, run below
- npx prisma migrate dev --name add_indexes
- npm run seed

npm run dev