const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

// Theme type
const ThemeType = new GraphQLObjectType({
  name: 'Theme',
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
  ThemeType,
};
