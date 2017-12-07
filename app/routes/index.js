const routes = require('./travery_routes');

module.exports = function(app, db) {
    routes(app, db);
};