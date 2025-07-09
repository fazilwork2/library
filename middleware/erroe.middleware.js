const customError = require("../error/custom.error");

module.exports = function(err,req,res,next){
    if (err instanceof customError) {
        return res.status(err.status).json({
            message:err.message,
            errors:err.errors
        })
    }
    
    if (err.name === "ValidationError") {
        const myError = Object.values(err.errors || {}).map(e=>e.message);
        return res.status(400).json({
            message:"Validation fale",
            errors:myError,
            errorName:"ValidationError"
        })
    }

    if (err.name === "MongooseError") {
        const myError = Object.values(err.errors || {}).map(e=>e.message);
        return res.status(400).json({
            message:"mongoose fale",
            errors:myError,
            errorName:"MongooseError"
        })
    }
    return res.status(500).json({message:"internet server error"})
}