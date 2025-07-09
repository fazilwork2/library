const { object } = require("joi")
const { authValidation } = require("../validation/author.validation")




module.exports = function(req,res,next){

    const {error} = authValidation(req.body)
    if (error) {
        return res.status(404).json({
            messege :error.message
        })
    }



    next()
}