const { request } = require("express");

module.exports = {
    HomeRoutes: require("./home.routes"),
    QuotesRoutes: require("./quotes.routes")
};