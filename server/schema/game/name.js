const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

// Alternative name type
const AlternativeNameType = new GraphQLObjectType({
  name: 'AlternativeName',
  fields: () => ({
    checksum: { type: GraphQLString },
    comment: { type: GraphQLString },
    game: { type: GraphQLInt },
    name: { type: GraphQLString },
  }),
});

module.exports = {
  AlternativeNameType,
};
