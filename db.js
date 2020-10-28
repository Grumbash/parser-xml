const logger = require('./logger');

const db = {
  save: (json) => {
    logger.log({ level: "info", message: json });
    return json;
  },
};

module.exports = db;