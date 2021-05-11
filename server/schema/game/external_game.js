const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
} = require('graphql');
const {
  ExternalGameCategoryEnumType,
  ExternalGameMediaEnumType,
} = require('./enums');

// External games type
const ExternalGameType = new GraphQLObjectType({
  name: 'ExternalGame',
  fields: () => ({
    category: { type: ExternalGameCategoryEnumType },
    checksum: { type: GraphQLString },
    countries: { type: GraphQLList(GraphQLInt) },
    created_at: { type: GraphQLInt },
    game: { type: GraphQLInt },
    media: { type: ExternalGameMediaEnumType },
    platform: { type: GraphQLInt },
    uid: { type: GraphQLString },
    updated_at: { type: GraphQLInt },
    url: { type: GraphQLString },
    year: { type: GraphQLInt },
  }),
});

module.exports = {
  ExternalGameType,
};
