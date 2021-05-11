const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLBoolean,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLSchema,
  GraphQLEnumType,
} = require('graphql');

const GenderEnumType = new GraphQLEnumType({
  name: 'GenderEnum',
  values: {
    Male: { value: 0 },
    Female: { value: 1 },
    Other: { value: 2 },
  },
});

const SpeciesEnumType = new GraphQLEnumType({
  name: 'SpeciesEnum',
  values: {
    Human: { value: 1 },
    Alien: { value: 2 },
    Animal: { value: 3 },
    Android: { value: 4 },
    Unknown: { value: 5 },
  },
});

const DateCategoryEnumType = new GraphQLEnumType({
  name: 'DateCategoryEnum',
  values: {
    YYYYMMMMDD: { value: 0 },
    YYYYMMMM: { value: 1 },
    YYYY: { value: 2 },
    YYYYQ1: { value: 3 },
    YYYYQ2: { value: 4 },
    YYYYQ3: { value: 5 },
    YYYYQ4: { value: 6 },
    TBD: { value: 7 },
  },
});

const WebsiteCategoryEnumType = new GraphQLEnumType({
  name: 'CompanyWebsiteCategoryEnum',
  values: {
    official: { value: 1 },
    wikia: { value: 2 },
    wikipedia: { value: 3 },
    facebook: { value: 4 },
    twitter: { value: 5 },
    twitch: { value: 6 },
    other: { value: 7 },
    instagram: { value: 8 },
    youtube: { value: 9 },
    iphone: { value: 10 },
    ipad: { value: 11 },
    android: { value: 12 },
    steam: { value: 13 },
    reddit: { value: 14 },
    itch: { value: 15 },
    epicgames: { value: 16 },
    gog: { value: 17 },
    discord: { value: 18 },
  },
});

const ExternalGameCategoryEnumType = new GraphQLEnumType({
  name: 'ExternalGameCategoryEnum',
  values: {
    steam: { value: 1 },
    gog: { value: 5 },
    youtube: { value: 10 },
    microsoft: { value: 11 },
    apple: { value: 13 },
    twitch: { value: 14 },
    android: { value: 15 },
  },
});

const ExternalGameMediaEnumType = new GraphQLEnumType({
  name: 'ExternalGameMediaEnum',
  values: {
    digital: { value: 1 },
    physical: { value: 2 },
  },
});

const IncludedFeatureEnumType = new GraphQLEnumType({
  name: 'IncludedFeatureEnum',
  values: {
    NOT_INCLUDED: { value: 0 },
    INCLUDED: { value: 1 },
    PRE_ORDER_ONLY: { value: 2 },
  },
});

const GameVersionFeatureCategoryEnumType = new GraphQLEnumType({
  name: 'GameVersionFeatureCategoryEnum',
  values: {
    boolean: { value: 0 },
    description: { value: 1 },
  },
});

const GameCategoryEnumType = new GraphQLEnumType({
  name: 'GameCategoryEnum',
  values: {
    main_game: { value: 0 },
    dlc_addon: { value: 1 },
    expansion: { value: 2 },
    bundle: { value: 3 },
    standalone_expansion: { value: 4 },
    mod: { value: 5 },
    episode: { value: 6 },
    season: { value: 7 },
    remake: { value: 8 },
    remaster: { value: 9 },
    expanded_game: { value: 10 },
    port: { value: 11 },
    fork: { value: 12 },
  },
});

const GameStatusEnumType = new GraphQLEnumType({
  name: 'GameStatusEnum',
  values: {
    released: { value: 0 },
    alpha: { value: 2 },
    beta: { value: 3 },
    early_access: { value: 4 },
    offline: { value: 5 },
    cancelled: { value: 6 },
    rumored: { value: 7 },
  },
});

const PlatformCategoryEnumType = new GraphQLEnumType({
  name: 'PlatformCategoryEnum',
  values: {
    console: { value: 1 },
    arcade: { value: 2 },
    platform: { value: 3 },
    operating_system: { value: 4 },
    portable_console: { value: 5 },
    computer: { value: 6 },
  },
});

const RegionEnumType = new GraphQLEnumType({
  name: 'RegionEnumType',
  values: {
    europe: { value: 1 },
    north_america: { value: 2 },
    australia: { value: 3 },
    new_zealand: { value: 4 },
    japan: { value: 5 },
    china: { value: 6 },
    asia: { value: 7 },
    worldwide: { value: 8 },
  },
});

const PlatformWebsiteCategoryEnumType = new GraphQLEnumType({
  name: 'PlatformWebsiteCategoryEnum',
  values: {
    official: { value: 1 },
    wikia: { value: 2 },
    wikipedia: { value: 3 },
    facebook: { value: 4 },
    twitter: { value: 5 },
    twitch: { value: 6 },
    instagram: { value: 8 },
    youtube: { value: 9 },
    iphone: { value: 10 },
    ipad: { value: 11 },
    android: { value: 12 },
    steam: { value: 13 },
    reddit: { value: 14 },
    discord: { value: 15 },
    google_plus: { value: 16 },
    tumblr: { value: 17 },
    linkedin: { value: 18 },
    pinterest: { value: 19 },
    soundcloud: { value: 20 },
  },
});

const AgeRatingContentDescriptionCategoryEnumType = new GraphQLEnumType({
  name: 'AgeRatingContentDescriptionCategoryEnum',
  values: {
    PEGI: { value: 1 },
    ESRB: { value: 2 },
  },
});

const AgeRatingCategoryEnumType = new GraphQLEnumType({
  name: 'AgeRatingCategoryEnum',
  values: {
    ESRB: { value: 1 },
    PEGI: { value: 2 },
  },
});

const RatingEnumType = new GraphQLEnumType({
  name: 'RatingEnumType',
  values: {
    Three: { value: 1 },
    Seven: { value: 2 },
    Twelve: { value: 3 },
    Sixteen: { value: 4 },
    Eighteen: { value: 5 },
    RP: { value: 6 },
    EC: { value: 7 },
    E: { value: 8 },
    E10: { value: 9 },
    T: { value: 10 },
    M: { value: 11 },
    AO: { value: 12 },
  },
});

module.exports = {
  GenderEnumType,
  SpeciesEnumType,
  DateCategoryEnumType,
  WebsiteCategoryEnumType,
  ExternalGameCategoryEnumType,
  ExternalGameMediaEnumType,
  IncludedFeatureEnumType,
  GameVersionFeatureCategoryEnumType,
  GameCategoryEnumType,
  GameStatusEnumType,
  PlatformCategoryEnumType,
  RegionEnumType,
  PlatformWebsiteCategoryEnumType,
  AgeRatingContentDescriptionCategoryEnumType,
  AgeRatingCategoryEnumType,
  RatingEnumType,
};
