export default {
  GenderEnum: {
    Male: 0,
    Female: 1,
    Other: 2,
  },

  SpeciesEnum: {
    Human: 1,
    Alien: 2,
    Animal: 3,
    Android: 4,
    Unknown: 5,
  },

  DateCategoryEnum: {
    YYYYMMMMDD: 0,
    YYYYMMMM: 1,
    YYYY: 2,
    YYYYQ1: 3,
    YYYYQ2: 4,
    YYYYQ3: 5,
    YYYYQ4: 6,
    TBD: 7,
  },

  WebsiteCategoryEnum: {
    official: 1,
    wikia: 2,
    wikipedia: 3,
    facebook: 4,
    twitter: 5,
    twitch: 6,
    other: 7,
    instagram: 8,
    youtube: 9,
    iphone: 10,
    ipad: 11,
    android: 12,
    steam: 13,
    reddit: 14,
    itch: 15,
    epicgames: 16,
    gog: 17,
    discord: 18,
  },

  ExternalGameCategoryEnum: {
    steam: 1,
    unkonwn: 3,
    gog: 5,
    youtube: 10,
    microsoft: 11,
    apple: 13,
    twitch: 14,
    android: 15,
  },

  ExternalGameMediaEnum: {
    digital: 1,
    physical: 2,
  },

  IncludedFeatureEnum: {
    NOT_INCLUDED: 0,
    INCLUDED: 1,
    PRE_ORDER_ONLY: 2,
  },

  GameVersionFeatureCategoryEnum: {
    boolean: 0,
    description: 1,
  },

  GameCategoryEnum: {
    main_game: 0,
    dlc_addon: 1,
    expansion: 2,
    bundle: 3,
    standalone_expansion: 4,
    mod: 5,
    episode: 6,
    season: 7,
    remake: 8,
    remaster: 9,
    expanded_game: 10,
    port: 11,
    fork: 12,
  },

  GameStatusEnum: {
    released: 0,
    alpha: 2,
    beta: 3,
    early_access: 4,
    offline: 5,
    cancelled: 6,
    rumored: 7,
  },

  PlatformCategoryEnum: {
    console: 1,
    arcade: 2,
    platform: 3,
    operating_system: 4,
    portable_console: 5,
    computer: 6,
  },

  RegionEnum: {
    europe: 1,
    north_america: 2,
    australia: 3,
    new_zealand: 4,
    japan: 5,
    china: 6,
    asia: 7,
    worldwide: 8,
  },

  PlatformWebsiteCategoryEnum: {
    official: 1,
    wikia: 2,
    wikipedia: 3,
    facebook: 4,
    twitter: 5,
    twitch: 6,
    instagram: 8,
    youtube: 9,
    iphone: 10,
    ipad: 11,
    android: 12,
    steam: 13,
    reddit: 14,
    discord: 15,
    google_plus: 16,
    tumblr: 17,
    linkedin: 18,
    pinterest: 19,
    soundcloud: 20,
  },

  AgeRatingContentDescriptionCategoryEnum: {
    PEGI: 1,
    ESRB: 2,
  },

  AgeRatingCategoryEnum: {
    ESRB: 1,
    PEGI: 2,
  },

  RatingEnum: {
    Three: 1,
    Seven: 2,
    Twelve: 3,
    Sixteen: 4,
    Eighteen: 5,
    RP: 6,
    EC: 7,
    E: 8,
    E10: 9,
    T: 10,
    M: 11,
    AO: 12,
  },
};
