const joi = require("joi")

exports.authValidation = (data)=>{
    const Schema =joi.object({
      fuleName: joi.string().min(5).max(70).required(),
      dataOfBirth:joi.date().required().greater('1-1-1100').less(`1-1-2000`),
      dataOfDeth:joi.date().required().greater(`1-1-1100`).less(`1-1-2000`),
      countOfbook:joi.number().min(5).max(150),
      desc:joi.string().required().min(5).max(450),
      Bio:joi.string().required().min(5).max(450),
      period:joi.string().required(),
      creativity:joi.string().required(),
      region:joi.string().required(),
    }) 

    return Schema.validate(data)
}