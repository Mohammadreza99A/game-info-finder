const {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

// Multiplayer Mode type
const MultiplayerModeType = new GraphQLObjectType({
  name: 'MultiplayerMode',
  fields: () => ({
    campaigncoop: { type: GraphQLBoolean },
    checksum: { type: GraphQLString },
    dropin: { type: GraphQLBoolean },
    game: { type: GraphQLInt },
    lancoop: { type: GraphQLBoolean },
    offlinecoop: { type: GraphQLBoolean },
    offlinecoopmax: { type: GraphQLInt },
    offlinemax: { type: GraphQLInt },
    onlinecoop: { type: GraphQLBoolean },
    onlinecoopmax: { type: GraphQLInt },
    onlinemax: { type: GraphQLInt },
    platform: { type: GraphQLInt },
    splitscreen: { type: GraphQLBoolean },
    splitscreenonline: { type: GraphQLBoolean },
  }),
});

// Player Perspective type
const PlayerPerspectiveType = new GraphQLObjectType({
  name: 'PlayerPerspective',
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
  MultiplayerModeType,
  PlayerPerspectiveType,
};
