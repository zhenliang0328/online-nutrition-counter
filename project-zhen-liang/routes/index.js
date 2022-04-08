const router = require('express').Router();

const foodsRouter = require('./foods.js');
const mealPlansRouter = require('./mealPlans.js');
const usersRouter = require('./users.js');


router.use('/foods',foodsRouter);
router.use('/mealPlans',mealPlansRouter);
router.use('/users',usersRouter);

module.exports = router;