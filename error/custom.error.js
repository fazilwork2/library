module.exports = class customError extends Error{
    status;
    errors;
    constructor(status,message,errors){
        super(message)
        this.status = status
        this.errors = errors
    }
        static BadRequest(status,message,errors){
            return new customError(status,message,errors = [])

        }

        static Unauthorized (status,message,errors){
            return new customError(401,message,errors = [])
        }
    }
