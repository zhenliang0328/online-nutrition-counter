const router = require('express').Router({mergeParams:true});

const {postUser,getUsers,getUser,updateMPs,deleteMPUser } = require('../controllers/userControllers.js');



router.post('/', postUser)

router.get('/', getUsers);
router.get('/:userId',getUser);

router.patch('/updateMPs/:userId',updateMPs)
router.patch('/deleteMealPlan/:userId', deleteMPUser)


module.exports = router;