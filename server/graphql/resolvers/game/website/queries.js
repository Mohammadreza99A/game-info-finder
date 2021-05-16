import {
  igdb_cleint_id,
  igdb_access_token,
} from '../../../../config/environment';
import axios from 'axios';

const websiteQueries = {
  websites: (_, args) => {
    return axios({
      url: 'https://api.igdb.com/v4/websites',
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
  website: async (_, { id }) => {
    return axios({
      url: 'https://api.igdb.com/v4/websites',
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

export default websiteQueries;
