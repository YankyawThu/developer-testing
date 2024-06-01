const { gql } = require('apollo-server-micro');

const typeDefs = gql`
    type Property {
        id: Int
        project_name: String
        title: String
        property_description: String
        property_type: String
        price: String
        bedroom: String
        area: String
        image1: String
        image2: String
        image3: String
        image4: String
        image5: String
    }

    type Query {
        properties(property_type: String, minPrice: String, maxPrice: String, bedroom: String, area: String, skip: Int, take: Int): [Property]
    }
`;

module.exports = typeDefs;
