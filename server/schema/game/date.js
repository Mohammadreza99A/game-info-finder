const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

// Release Date type
const ReleaseDateType = new GraphQLObjectType({
  name: 'ReleaseDate',
  fields: () => ({
    category: { type: DateCategoryEnumType },
    checksum: { type: GraphQLString },
    created_at: { type: GraphQLInt },
    date: { type: GraphQLInt },
    game: { type: GraphQLInt },
    human: { type: GraphQLString },
    m: { type: GraphQLInt },
    platform: { type: GraphQLInt },
    region: { type: RegionEnumType },
    updated_at: { type: GraphQLInt },
    y: { type: GraphQLInt },
  }),
});

module.exports = {
  ReleaseDateType,
};
