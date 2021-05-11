const { GraphQLSchema } = require('graphql');
const { RootQuery } = require('./game/root_query');

module.exports = new GraphQLSchema({
  query: RootQuery,
});
