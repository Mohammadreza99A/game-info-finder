const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

// Collection type
const CollectionType = new GraphQLObjectType({
  name: 'Collection',
  fields: () => ({
    created_at: { type: GraphQLInt },
    games: { type: GraphQLList(GraphQLInt) },
    name: { type: GraphQLString },
    slug: { type: GraphQLString },
    updated_at: { type: GraphQLInt },
    url: { type: GraphQLString },
    checksum: { type: GraphQLString },
  }),
});

module.exports = {
  CollectionType,
};
