const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
} = require('graphql');
const axios = require('axios');
const { GameType } = require('./game');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const CLIENT_ID = process.env.CLIENT_ID;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

// Root query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    games: {
      type: new GraphQLList(GameType),
      resolve(parentValue, args) {
        return axios({
          url: 'https://api.igdb.com/v4/games',
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Client-ID': CLIENT_ID,
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
          data: 'fields *;',
        })
          .then((res) => res.data)
          .catch((err) => {
            console.error(err);
          });
      },
    },
    game: {
      type: new GraphQLList(GameType),
      args: {
        game_id: { type: GraphQLInt },
      },
      resolve(parentValue, args) {
        return axios({
          url: 'https://api.igdb.com/v4/games',
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Client-ID': CLIENT_ID,
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
          data: `fields *; where id = ${args.game_id};`,
        })
          .then((res) => res.data)
          .catch((err) => {
            console.error(err);
          });
      },
    },
    gamesWithLimits: {
      type: new GraphQLList(GameType),
      args: {
        limit: { type: GraphQLInt },
      },
      resolve(parentValue, args) {
        return axios({
          url: 'https://api.igdb.com/v4/games',
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Client-ID': CLIENT_ID,
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
          data: `fields *; limit ${args.limit};`,
        })
          .then((res) => res.data)
          .catch((err) => {
            console.error(err);
          });
      },
    },
    searchGame: {
      type: new GraphQLList(GameType),
      args: {
        searchQ: { type: GraphQLString },
      },
      resolve(parentValue, args) {
        return axios({
          url: 'https://api.igdb.com/v4/games',
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Client-ID': CLIENT_ID,
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
          data: `search "${args.searchQ}"; fields *;`,
        })
          .then((res) => res.data)
          .catch((err) => {
            console.error(err);
          });
      },
    },
  },
});

module.exports = {
  RootQuery,
};
