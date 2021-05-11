const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

// Genre type
const GenreType = new GraphQLObjectType({
  name: 'Genre',
  fields: () => ({
    checksum: { type: GraphQLString },
    created_at: { type: GraphQLInt },
    name: { type: GraphQLString },
    slug: { type: GraphQLString },
    updated_at: { type: GraphQLInt },
    url: { type: GraphQLString },
  }),
});

module.exports = {
  GenreType,
};
