const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const resolvers = {
    Query: {
        properties: async (_, { property_type, minPrice, maxPrice, bedroom, area, skip = 0, take = 10 }) => {
            const filters = {}
            if (property_type) filters.property_type = property_type;
            if (minPrice) filters.price = { ...filters.price, gte: minPrice };
            if (maxPrice) filters.price = { ...filters.price, lte: maxPrice };
            if (bedroom) filters.bedroom = bedroom;
            if (area ==  1) filters.area = {gte: '800', lte: '1000'};
            else if(area == 2) filters.area = {gte: '1000', lte: '1200'};

            const properties = prisma.property.findMany({
                skip,
                take,
                where: filters
            });
            return properties
        },
    }
};

module.exports = resolvers;