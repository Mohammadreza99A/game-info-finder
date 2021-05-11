const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
} = require('graphql');
const {
  IncludedFeatureEnumType,
  GameVersionFeatureCategoryEnumType,
  GameCategoryEnumType,
  GameStatusEnumType,
} = require('./enums');

// Game version type
const GameVersionType = new GraphQLObjectType({
  name: 'GameVersion',
  fields: () => ({
    checksum: { type: GraphQLString },
    created_at: { type: GraphQLInt },
    features: { type: GraphQLList(GraphQLInt) },
    game: { type: GraphQLInt },
    games: { type: GraphQLList(GraphQLInt) },
    updated_at: { type: GraphQLInt },
    url: { type: GraphQLString },
  }),
});

// Game mode type
const GameModeType = new GraphQLObjectType({
  name: 'GameMode',
  fields: () => ({
    checksum: { type: GraphQLString },
    created_at: { type: GraphQLInt },
    name: { type: GraphQLString },
    slug: { type: GraphQLString },
    updated_at: { type: GraphQLInt },
    url: { type: GraphQLString },
  }),
});

// Game video type
const GameVideoType = new GraphQLObjectType({
  name: 'GameVideo',
  fields: () => ({
    checksum: { type: GraphQLString },
    game: { type: GraphQLInt },
    name: { type: GraphQLString },
    video_id: { type: GraphQLString },
  }),
});

// Game Version Feature Value type
const GameVersionFeatureValueType = new GraphQLObjectType({
  name: 'GameVersionFeatureValue',
  fields: () => ({
    checksum: { type: GraphQLString },
    game: { type: GraphQLInt },
    game_feature: { type: GraphQLInt },
    included_feature: { type: IncludedFeatureEnumType },
    note: { type: GraphQLString },
  }),
});

// Game Version Feature type
const GameVersionFeatureType = new GraphQLObjectType({
  name: 'GameVersionFeature',
  fields: () => ({
    category: { type: GameVersionFeatureCategoryEnumType },
    checksum: { type: GraphQLString },
    desciption: { type: GraphQLString },
    position: { type: GraphQLInt },
    title: { type: GraphQLString },
    values: { type: GraphQLList(GraphQLInt) },
  }),
});

// Game type
const GameType = new GraphQLObjectType({
  name: 'Game',
  fields: () => ({
    id: { type: GraphQLInt },
    age_ratings: { type: GraphQLList(GraphQLInt) },
    aggregated_rating: { type: GraphQLFloat },
    aggregated_rating_count: { type: GraphQLInt },
    alternative_names: { type: GraphQLList(GraphQLInt) },
    artworks: { type: GraphQLList(GraphQLInt) },
    bundles: { type: GraphQLList(GraphQLInt) },
    category: { type: GameCategoryEnumType },
    checksum: { type: GraphQLString },
    collection: { type: GraphQLInt },
    cover: { type: GraphQLInt },
    created_at: { type: GraphQLInt },
    dlcs: { type: GraphQLList(GraphQLInt) },
    expanded_games: { type: GraphQLList(GraphQLInt) },
    expansions: { type: GraphQLList(GraphQLInt) },
    external_games: { type: GraphQLList(GraphQLInt) },
    first_release_date: { type: GraphQLInt },
    follows: { type: GraphQLInt },
    forks: { type: GraphQLList(GraphQLInt) },
    franchise: { type: GraphQLInt },
    franchises: { type: GraphQLList(GraphQLInt) },
    game_engines: { type: GraphQLList(GraphQLInt) },
    game_modes: { type: GraphQLList(GraphQLInt) },
    genres: { type: GraphQLList(GraphQLInt) },
    hypes: { type: GraphQLInt },
    involved_companies: { type: GraphQLList(GraphQLInt) },
    keywords: { type: GraphQLList(GraphQLInt) },
    multiplayer_modes: { type: GraphQLList(GraphQLInt) },
    name: { type: GraphQLString },
    parent_game: { type: GraphQLInt },
    platforms: { type: GraphQLList(GraphQLInt) },
    player_perspectives: { type: GraphQLList(GraphQLInt) },
    ports: { type: GraphQLList(GraphQLInt) },
    rating: { type: GraphQLFloat },
    rating_count: { type: GraphQLInt },
    release_dates: { type: GraphQLList(GraphQLInt) },
    remakes: { type: GraphQLList(GraphQLInt) },
    remasters: { type: GraphQLList(GraphQLInt) },
    screenshots: { type: GraphQLList(GraphQLInt) },
    similar_games: { type: GraphQLList(GraphQLInt) },
    slug: { type: GraphQLString },
    standalone_expansions: { type: GraphQLList(GraphQLInt) },
    status: { type: GameStatusEnumType },
    storyline: { type: GraphQLString },
    summary: { type: GraphQLString },
    tags: { type: GraphQLList(GraphQLInt) },
    themes: { type: GraphQLList(GraphQLInt) },
    total_rating: { type: GraphQLFloat },
    total_rating_count: { type: GraphQLInt },
    updated_at: { type: GraphQLInt },
    url: { type: GraphQLString },
    version_parent: { type: GraphQLInt },
    version_title: { type: GraphQLString },
    videos: { type: GraphQLList(GraphQLInt) },
    websites: { type: GraphQLList(GraphQLInt) },
  }),
});

module.exports = {
  GameVersionType,
  GameModeType,
  GameVideoType,
  GameVersionFeatureValueType,
  GameVersionFeatureType,
  GameType,
};
