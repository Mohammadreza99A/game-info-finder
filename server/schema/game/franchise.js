const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

// Franchise type
const FranchiseType = new GraphQLObjectType({
  name: 'Franchise',
  fields: () => ({
    checksum: { type: GraphQLString },
    created_at: { type: GraphQLInt },
    games: { type: GraphQLList(GraphQLInt) },
    name: { type: GraphQLString },
    slug: { type: GraphQLString },
    updated_at: { type: GraphQLInt },
    url: { type: GraphQLString },
  }),
});

module.exports = {
  FranchiseType,
};
