const xml2js = require("xml2js");
const fs = require('fs');
const logger = require('./logger')

const parseXML = (pathToFile, db) => {
  if (!pathToFile) {
    const error = new Error("You need to set a path to file for parsing!");
    
    logger.log({ level: "error", message: error });
    throw error;
  }

  fs.readFile(pathToFile, (err, data) => {
    if (err) {
      logger.log({ level: "error", message: err });
      throw err;
    }
    // convert XML to JSON
    xml2js.parseString(data, {
      mergeAttrs: true,
    }, 
    (err, data)=>{
      if (err) {
        logger.log({ level: "error", message: err });
        throw err;
      }
      const json = JSON.stringify(data, null, 2);

      db.save(json);
    });
  });
};

module.exports = parseXML
