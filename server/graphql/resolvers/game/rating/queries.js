import {
  igdb_cleint_id,
  igdb_access_token,
} from '../../../../config/environment';
import axios from 'axios';

const ratingQueries = {
  age_rating_content_descriptions: (_, args) => {
    return axios({
      url: 'https://api.igdb.com/v4/age_rating_content_descriptions',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Client-ID': igdb_cleint_id,
        Authorization: `Bearer ${igdb_access_token}`,
      },
      data: `fields *;`,
    })
      .then((res) => res.data)
      .catch((err) => {
        console.error(err);
      });
  },
  age_rating_content_description: async (_, { id }) => {
    return axios({
      url: 'https://api.igdb.com/v4/age_rating_content_descriptions',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Client-ID': igdb_cleint_id,
        Authorization: `Bearer ${igdb_access_token}`,
      },
      data: `fields *; where id = ${id};`,
    })
      .then((res) => res.data)
      .catch((err) => {
        console.error(err);
      });
  },

  age_ratings: (_, args) => {
    return axios({
      url: 'https://api.igdb.com/v4/age_ratings',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Client-ID': igdb_cleint_id,
        Authorization: `Bearer ${igdb_access_token}`,
      },
      data: `fields *;`,
    })
      .then((res) => res.data)
      .catch((err) => {
        console.error(err);
      });
  },
  age_rating: async (_, { id }) => {
    return axios({
      url: 'https://api.igdb.com/v4/age_ratings',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Client-ID': igdb_cleint_id,
        Authorization: `Bearer ${igdb_access_token}`,
      },
      data: `fields *; where id = ${id};`,
    })
      .then((res) => res.data)
      .catch((err) => {
        console.error(err);
      });
  },
};

export default ratingQueries;
