const {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

// Screenshot type
const ScreenshotType = new GraphQLObjectType({
  name: 'Screenshot',
  fields: () => ({
    alpha_channel: { type: GraphQLBoolean },
    animated: { type: GraphQLBoolean },
    checksum: { type: GraphQLString },
    game: { type: GraphQLInt },
    height: { type: GraphQLInt },
    image_id: { type: GraphQLString },
    url: { type: GraphQLString },
    width: { type: GraphQLInt },
  }),
});

module.exports = {
  ScreenshotType,
};
