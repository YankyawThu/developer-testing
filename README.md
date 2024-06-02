## Installation

### Steps

1. Install node_modules
    ```bash
    npm install
    ```

2. Generate seeder file
    ```bash
    node seeders.js
    ```

### To run on localhost or on docker, change DATABASE_URL in .env file to specific url

3. Run on docker. Note, before build, ports 3000 and 3306 must be available
    ```bash
    docker-compose up --build
    ```

4. Run on local then need to migrate database and seed with prisma, run below
    ```bash
    npx prisma migrate dev --name add_indexes
    ```

5. Run seeder
    ```bash
    npm run seed
    ```

6. Run developement server
    ```bash
    npm run dev
    ```
