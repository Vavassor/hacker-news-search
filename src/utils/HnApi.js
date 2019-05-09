import axios from "axios";

const HnApi = {
  search: function(query) {
    return axios.get(`https://hn.algolia.com/api/v1/search?query=${encodeURIComponent(query)}&tags=story`);
  },
};

export default HnApi;