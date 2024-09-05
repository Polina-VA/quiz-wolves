const errorRouter = require("./error.routes");

const apiRouter = require("express").Router();








apiRouter.use('*', errorRouter)

module.exports = apiRouter;