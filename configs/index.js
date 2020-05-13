import defaults from "./env";

const env = process.env.REACT_APP_ENV || "development";
let config;
switch (env) {
    case "localhost":
        config = require("./env/localhost/index").default;
        break;
    case "production":
        config = require("./env/production/index").default;
        break;
    case "development":
        config = require("./env/development/index").default;
        break;
    default:
        config = require("./env/development/index").default;
        break;
}

export default Object.assign(defaults, config);
