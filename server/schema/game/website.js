const {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

// Website type
const WebsiteType = new GraphQLObjectType({
  name: 'Website',
  fields: () => ({
    category: { type: WebsiteCategoryEnumType },
    checksum: { type: GraphQLString },
    game: { type: GraphQLInt },
    trusted: { type: GraphQLBoolean },
    url: { type: GraphQLString },
  }),
});

module.exports = {
  WebsiteType,
};
