const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLBoolean,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

// Game engin type
const GameEngineType = new GraphQLObjectType({
  name: 'GameEngine',
  fields: () => ({
    checksum: { type: GraphQLString },
    companies: { type: GraphQLList(GraphQLInt) },
    created_at: { type: GraphQLInt },
    desciption: { type: GraphQLString },
    logo: { type: GraphQLInt },
    name: { type: GraphQLString },
    platforms: { type: GraphQLList(GraphQLInt) },
    slug: { type: GraphQLString },
    updated_at: { type: GraphQLInt },
    url: { type: GraphQLString },
  }),
});

// Game engin logo type
const GameEngineLogoType = new GraphQLObjectType({
  name: 'GameEngineLogo',
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
  GameEngineType,
  GameEngineLogoType,
};
