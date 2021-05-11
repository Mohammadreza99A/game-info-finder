const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLBoolean,
  GraphQLString,
  GraphQLInt,
  GraphQLEnumType,
} = require('graphql');
const { GenderEnumType, SpeciesEnumType } = require('./enums');

// Character type
const CharacterType = new GraphQLObjectType({
  name: 'Character',
  fields: () => ({
    akas: { type: GraphQLList(GraphQLString) },
    checksum: { type: GraphQLString },
    country_name: { type: GraphQLString },
    created_at: { type: GraphQLInt },
    description: { type: GraphQLString },
    games: { type: GraphQLList(GraphQLInt) },
    gender: { type: GenderEnumType },
    mug_shot: { type: GraphQLInt },
    name: { type: GraphQLString },
    slug: { type: GraphQLString },
    species: { type: SpeciesEnumType },
    updated_at: { type: GraphQLInt },
    url: { type: GraphQLString },
  }),
});

// Character mug shot type
const CharacterMugShotType = new GraphQLObjectType({
  name: 'CharacterMugShot',
  fields: () => ({
    alpha_channel: { type: GraphQLBoolean },
    animated: { type: GraphQLBoolean },
    checksum: { type: GraphQLString },
    height: { type: GraphQLInt },
    image_id: { type: GraphQLString },
    url: { type: GraphQLString },
    width: { type: GraphQLInt },
  }),
});

module.exports = {
  CharacterType,
  CharacterMugShotType,
};
