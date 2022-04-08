
const foodValidator = (req,res,next)=>{
    const errors=[];
    if(req.body.unitNum == undefined){
        req.body.unitNum=1;
    }
    
    if(req.unitNum<0||req.fat<0||req.carb<0||req.protein<0){
        errors.push("No negative numbers should be provided!")
    }
    
    if(errors.length>0){
        res.status(422).render('error',{errors});
    }else{
        next();
    }
}
module.exports = {foodValidator}