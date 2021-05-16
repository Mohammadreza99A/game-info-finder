import { imageQueries } from './game/image';
import { characterQueries } from './game/character';
import { collectionQueries } from './game/collection';
import { companyQueries } from './game/company';
import { dateQueries } from './game/date';
import { gameQueries } from './game/game';
import { genreQueries } from './game/genre';
import { keywordQueries } from './game/keyword';
import { nameQueries } from './game/name';
import { websiteQueries } from './game/website';
import { themeQueries } from './game/theme';
import { searchQueries } from './game/search';
import { platformQueries } from './game/platform';
import { playerQueries } from './game/player';
import { ratingQueries } from './game/rating';
import enumResolvers from './game/enumResolvers';

const resolvers = {
  ...enumResolvers,
  Query: {
    ...imageQueries,
    ...characterQueries,
    ...collectionQueries,
    ...companyQueries,
    ...dateQueries,
    ...gameQueries,
    ...genreQueries,
    ...keywordQueries,
    ...nameQueries,
    ...websiteQueries,
    ...themeQueries,
    ...searchQueries,
    ...platformQueries,
    ...playerQueries,
    ...ratingQueries,
  },
};

export default resolvers;
