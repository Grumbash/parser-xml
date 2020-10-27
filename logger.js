const { createLogger, format, transports } = require("winston");
const {
  combine,
  timestamp,
  colorize,
  printf,
  align,
  json,
  errors,
  prettyPrint,
} = format;

const logger = createLogger({
  format: combine(
    errors({ stack: true }), // <-- use errors format
    timestamp(),
    colorize(),
    printf(
      (info) =>
        `${info.timestamp} ${
          info.stack ? info.stack : `${info.level}: ${info.message}`
        }`
    )
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "combined.log" }),
    new transports.File({
      filename: "error.log",
      level: "error",
      format: combine(timestamp(), json()),
    }),
  ],
});

logger.log({
  level: "info",
  message: "Starting logger",
});

module.exports = logger;