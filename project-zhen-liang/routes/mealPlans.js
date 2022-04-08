const router = require('express').Router({mergeParams:true});

const {postMealPlan, getMealPlan,getMealPlans,patchMealPlan,deleteMealPlan} = require('../controllers/mealPlanControllers.js');


router.post('/',postMealPlan);
router.get('/', getMealPlans);
router.get('/:id', getMealPlan);
router.patch('/updateFoods/:mealplanId', patchMealPlan);
router.delete('/delete/:mealplanId',deleteMealPlan);

module.exports = router;