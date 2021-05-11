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
const { DateCategoryEnumType, WebsiteCategoryEnumType } = require('./enums');

// Company type
const CompanyType = new GraphQLObjectType({
  name: 'Company',
  fields: () => ({
    change_date: { type: GraphQLInt },
    change_date_category: { type: DateCategoryEnumType },
    changed_company_id: { type: GraphQLInt },
    checksum: { type: GraphQLString },
    country: { type: GraphQLInt },
    created_at: { type: GraphQLInt },
    description: { type: GraphQLString },
    developed: { type: GraphQLList(GraphQLInt) },
    logo: { type: GraphQLInt },
    name: { type: GraphQLString },
    parent: { type: GraphQLInt },
    published: { type: GraphQLList(GraphQLInt) },
    slug: { type: GraphQLString },
    start_date: { type: GraphQLInt },
    start_date_category: { type: DateCategoryEnumType },
    updated_at: { type: GraphQLInt },
    url: { type: GraphQLString },
    websites: { type: GraphQLList(GraphQLInt) },
  }),
});

// Company logo type
const CompanyLogoType = new GraphQLObjectType({
  name: 'CompanyLogo',
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

// Company website type
const CompanyWebsiteType = new GraphQLObjectType({
  name: 'CompanyWebsite',
  fields: () => ({
    category: { type: WebsiteCategoryEnumType },
    checksum: { type: GraphQLString },
    trusted: { type: GraphQLBoolean },
    url: { type: GraphQLString },
  }),
});

// Involved company type
const InvolvedCompanyType = new GraphQLObjectType({
  name: 'InvolvedCompany',
  fields: () => ({
    checksum: { type: GraphQLString },
    company: { type: GraphQLInt },
    created_at: { type: GraphQLInt },
    developer: { type: GraphQLBoolean },
    game: { type: GraphQLInt },
    porting: { type: GraphQLBoolean },
    publisher: { type: GraphQLBoolean },
    supporting: { type: GraphQLBoolean },
    updated_at: { type: GraphQLInt },
  }),
});

module.exports = {
  CompanyType,
  CompanyLogoType,
  CompanyWebsiteType,
  InvolvedCompanyType,
};
