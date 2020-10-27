const xml2js = require("xml2js");
const fs = require('fs');
const pathToFile = process.env.PATH_TO_FILE;
const logger = require('./logger')

const db = {
  save: (json) => {
    logger.log({level: 'info', message: json});
    return json;
  }
}

if (!pathToFile){
  const error = new Error("You need to set a path to file for parsing!")
  logger.log({ level: "error", message: error });
  throw error;
}

const parseXML = () => fs.readFile(pathToFile, async (err, data) => {
  if (err) {
    logger.log({ level: "error", message: err });
    throw err;
  }
  // convert XML to JSON
  try {
     const parsed = await xml2js.parseStringPromise(data, { mergeAttrs: true });
     const json = JSON.stringify(parsed, null, 2);
     return db.save(json);
  } catch (error) {
    logger.log({ level: "error", message: error });
  }
 
});

module.exports = parseXML
