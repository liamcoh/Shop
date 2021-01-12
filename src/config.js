// config.js
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  max_items: process.env.REACT_APP_MAX_ITEMS
};