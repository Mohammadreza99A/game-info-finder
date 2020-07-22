const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLBoolean,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLSchema,
} = require('graphql');
const axios = require('axios');

// Game Type
const GameType = new GraphQLObjectType({
  name: 'Game',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    description_raw: { type: GraphQLString },
    released: { type: GraphQLString },
    tba: { type: GraphQLBoolean },
    background_image: { type: GraphQLString },
    website: { type: GraphQLString },
    rating: { type: GraphQLFloat },
    rating_top: { type: GraphQLFloat },
    ratings: { type: new GraphQLList(RatingType) },
    genres: { type: new GraphQLList(GenreType) },
    tags: { type: new GraphQLList(TagType) },
    developers: { type: new GraphQLList(DeveloperType) },
    stores: { type: new GraphQLList(StoreType) },
    platforms: { type: new GraphQLList(PlatformsType) },
  }),
});

const RatingType = new GraphQLObjectType({
  name: 'Rating',
  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    count: { type: GraphQLInt },
    percent: { type: GraphQLFloat },
  }),
});

const GenreType = new GraphQLObjectType({
  name: 'Genre',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
  }),
});

const TagType = new GraphQLObjectType({
  name: 'Tag',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    language: { type: GraphQLString },
  }),
});

const DeveloperType = new GraphQLObjectType({
  name: 'Developer',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
  }),
});

const StoreType = new GraphQLObjectType({
  name: 'Store',
  fields: () => ({
    id: { type: GraphQLInt },
    url: { type: GraphQLString },
    // We have to create another type dor store details, see the RAWG docs for more info (nested objects for stores)
    store: { type: StoreDetailsType },
  }),
});

const StoreDetailsType = new GraphQLObjectType({
  name: 'StoreDetails',
  fields: () => ({
    store_id: { type: GraphQLInt },
    name: { type: GraphQLString },
  }),
});

const PlatformsType = new GraphQLObjectType({
  name: 'Platforms',
  fields: () => ({
    platform: { type: PlatformType },
    released_at: { type: GraphQLString },
    requirements: { type: RequirementsType },
  }),
});

const PlatformType = new GraphQLObjectType({
  name: 'Platform',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
  }),
});

const RequirementsType = new GraphQLObjectType({
  name: 'Requirements',
  fields: () => ({
    minimum: { type: GraphQLString },
    recommended: { type: GraphQLString },
  }),
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    games: {
      type: new GraphQLList(GameType),
      resolve(parentValue, args) {
        return axios
          .get('https://api.rawg.io/api/games')
          .then((res) => res.data.results)
          .catch((err) => console.log(err));
      },
    },
    game: {
      type: GameType,
      args: {
        game_id: { type: GraphQLInt },
      },
      resolve(parentValue, args) {
        return axios
          .get(`https://api.rawg.io/api/games/${args.game_id}`)
          .then((res) => res.data)
          .catch((err) => console.log(err));
      },
    },
    search: {
      type: new GraphQLList(GameType),
      args: {
        searchQ: { type: GraphQLString },
      },
      resolve(parentValue, args) {
        return axios
          .get(`https://api.rawg.io/api/games?search="${args.searchQ}"`)
          .then((res) => res.data.results)
          .catch((err) => console.log(err));
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
