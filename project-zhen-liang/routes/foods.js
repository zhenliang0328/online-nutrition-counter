const router = require('express').Router({mergeParams:true});

const {postFood,getFood,getFoods } = require('../controllers/foodControllers.js');
const {foodValidator} = require('./middlewares.js')


router.post('/',foodValidator,postFood)
router.get('/:id',getFood)
router.get('/',getFoods)


module.exports = router;