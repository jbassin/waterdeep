import axios from 'axios';

export default() => axios.create({
  baseURL: 'http://iridium.duckdns.org:6663',
});
