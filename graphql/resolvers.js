const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const resolvers = {
    Query: {
        properties: async (_, { skip = 0, take = 30 }) => {
            return prisma.property.findMany({
                skip,
                take,
            });
        },
    }
};

module.exports = resolvers;