Instructions...

npm install

If init.sql has empty, run below
node seeders.js

to run on localhost or on docker, change DATABASE_URL in .env file to specific url

and then if you want to run project on docker
docker-compose up --build

run on local then migrate database with prisma, run below
npx prisma migrate dev --name add_indexes

npm run dev