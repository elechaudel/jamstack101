const axios = require("axios");
require('dotenv').config();

module.exports = async function() {
  try {
    const response = await axios.get(`http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-21&sortBy=publishedAt&apiKey=${process.env.API_KEY}&pageSize=10`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}