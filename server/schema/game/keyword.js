const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

// Keyword type
const KeywordType = new GraphQLObjectType({
  name: 'Keyword',
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
  KeywordType,
};
