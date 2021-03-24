import { GiphyFetch } from '@giphy/js-fetch-api';

const apiKey = process.env.REACT_APP_GIPHY_API_KEY || '';
const giphy = new GiphyFetch(apiKey);

export default giphy;
