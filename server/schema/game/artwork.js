const {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

// Artwork type
const ArtworkType = new GraphQLObjectType({
  name: 'Artwork',
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

// Cover type
const CoverType = new GraphQLObjectType({
  name: 'Cover',
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
  ArtworkType,
  CoverType,
};
