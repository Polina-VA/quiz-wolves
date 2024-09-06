const apiRouter = require('express').Router();

const errorRouter = require('./error.routes');
const themeRouter = require('./theme.routes');
const questionRouter = require('./question.routes');
const userRouter = require('./user.routes');

apiRouter.use('/themes', themeRouter);
apiRouter.use('/questions', questionRouter);
apiRouter.use('/users', userRouter);


apiRouter.use('*', errorRouter);

module.exports = apiRouter;
