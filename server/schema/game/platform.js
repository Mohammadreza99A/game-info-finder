const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLBoolean,
  GraphQLString,
  GraphQLInt,
} = require('graphql');
const {
  PlatformCategoryEnumType,
  RegionEnumType,
  DateCategoryEnumType,
  PlatformWebsiteCategoryEnumType,
} = require('./enums');

// Platform type
const PlatformType = new GraphQLObjectType({
  name: 'Platform',
  fields: () => ({
    abbreviation: { type: GraphQLString },
    alternative_name: { type: GraphQLString },
    category: { type: PlatformCategoryEnumType },
    checksum: { type: GraphQLString },
    created_at: { type: GraphQLInt },
    generation: { type: GraphQLInt },
    name: { type: GraphQLString },
    platform_family: { type: GraphQLInt },
    platform_logo: { type: GraphQLInt },
    slug: { type: GraphQLString },
    summary: { type: GraphQLString },
    updated_at: { type: GraphQLInt },
    url: { type: GraphQLString },
    versions: { type: GraphQLList(GraphQLInt) },
    websites: { type: GraphQLList(GraphQLInt) },
  }),
});

// Platform Family type
const PlatformFamilyType = new GraphQLObjectType({
  name: 'PlatformFamily',
  fields: () => ({
    checksum: { type: GraphQLString },
    name: { type: GraphQLString },
    slug: { type: GraphQLString },
  }),
});

// Platform Version Company Type
const PlatformVersionCompanyType = new GraphQLObjectType({
  name: 'PlatformVersionCompany',
  fields: () => ({
    checksum: { type: GraphQLString },
    comment: { type: GraphQLString },
    company: { type: GraphQLInt },
    developer: { type: GraphQLBoolean },
    manufacturer: { type: GraphQLBoolean },
  }),
});

// Platform Version type
const PlatformVersionType = new GraphQLObjectType({
  name: 'PlatformVersion',
  fields: () => ({
    checksum: { type: GraphQLString },
    companies: { type: GraphQLList(GraphQLInt) },
    connectivity: { type: GraphQLString },
    cpu: { type: GraphQLString },
    graphics: { type: GraphQLString },
    main_manufacturer: { type: GraphQLInt },
    media: { type: GraphQLString },
    memory: { type: GraphQLString },
    name: { type: GraphQLString },
    os: { type: GraphQLString },
    output: { type: GraphQLString },
    platform_logo: { type: GraphQLInt },
    platform_version_release_dates: { type: GraphQLList(GraphQLInt) },
    resolutions: { type: GraphQLString },
    slug: { type: GraphQLString },
    sound: { type: GraphQLString },
    storage: { type: GraphQLString },
    summary: { type: GraphQLString },
    url: { type: GraphQLString },
  }),
});

// Platform Version Release Date type
const PlatformVersionReleaseDateType = new GraphQLObjectType({
  name: 'PlatformVersionReleaseDate',
  fields: () => ({
    category: { type: DateCategoryEnumType },
    checksum: { type: GraphQLString },
    created_at: { type: GraphQLInt },
    date: { type: GraphQLInt },
    human: { type: GraphQLString },
    m: { type: GraphQLInt },
    platform_version: { type: GraphQLInt },
    region: { type: RegionEnumType },
    updated_at: { type: GraphQLInt },
    y: { type: GraphQLInt },
  }),
});

// Platform Website type
const PlatformWebsitType = new GraphQLObjectType({
  name: 'PlatformWebsit',
  fields: () => ({
    category: { type: PlatformWebsiteCategoryEnumType },
    checksum: { type: GraphQLString },
    trusted: { type: GraphQLBoolean },
    url: { type: GraphQLString },
  }),
});

// Platform logo type
const PlatformLogoType = new GraphQLObjectType({
  name: 'PlatformLogo',
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
  PlatformType,
  PlatformFamilyType,
  PlatformVersionCompanyType,
  PlatformVersionType,
  PlatformVersionReleaseDateType,
  PlatformWebsitType,
  PlatformLogoType,
};
