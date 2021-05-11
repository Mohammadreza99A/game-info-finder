const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

// Search type
const SearchType = new GraphQLObjectType({
  name: 'Search',
  fields: () => ({
    alternative_name: { type: GraphQLString },
    character: { type: GraphQLInt },
    checksum: { type: GraphQLString },
    collection: { type: GraphQLInt },
    company: { type: GraphQLInt },
    description: { type: GraphQLString },
    game: { type: GraphQLInt },
    name: { type: GraphQLString },
    platform: { type: GraphQLInt },
    published_at: { type: GraphQLInt },
    test_dummy: { type: GraphQLInt },
    theme: { type: GraphQLInt },
  }),
});

module.exports = {
  SearchType,
};
