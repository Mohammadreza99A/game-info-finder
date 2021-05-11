const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
} = require('graphql');
const {
  AgeRatingContentDescriptionCategoryEnumType,
  AgeRatingCategoryEnumType,
  RatingEnumType,
} = require('./enums');

// Age rating content description type
const AgeRatingContentDescriptionType = new GraphQLObjectType({
  name: 'AgeRatingContentDescription',
  fields: () => ({
    category: { type: AgeRatingContentDescriptionCategoryEnumType },
    checksum: { type: GraphQLString },
    description: { type: GraphQLString },
  }),
});

// Age rating type
const AgeRatingType = new GraphQLObjectType({
  name: 'AgeRating',
  fields: () => ({
    category: { type: AgeRatingCategoryEnumType },
    checksum: { type: GraphQLString },
    content_descriptions: { type: GraphQLList(GraphQLInt) },
    rating: { type: RatingEnumType },
    rating_cover_url: { type: GraphQLString },
    synopsis: { type: GraphQLString },
  }),
});

module.exports = {
  AgeRatingContentDescriptionType,
  AgeRatingType,
};
