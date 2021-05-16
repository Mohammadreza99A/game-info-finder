import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;

// You may use this as a boolean value for different situations
const env = {
  development: process.env.NODE_ENV === 'development',
  test: process.env.NODE_ENV === 'test',
  staging: process.env.NODE_ENV === 'staging',
  production: process.env.NODE_ENV === 'production',
};

const igdb_cleint_id = process.env.CLIENT_ID;

const igdb_access_token = process.env.ACCESS_TOKEN;

export { port, env, igdb_cleint_id, igdb_access_token };
