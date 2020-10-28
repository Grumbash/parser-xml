const parseXML = require('./app')
const pathToFile = process.env.PATH_TO_FILE;
const db = require('./db')


parseXML(pathToFile, db);