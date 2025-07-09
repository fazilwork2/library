const {Router} = require("express")
const { GetAllbooks, GetOnebooks, Addbooks, Deleatbooks, updatebook,} = require("../controller/book.ctr")

const bookRouter =  Router() 


bookRouter.get("/GetAllbooks",GetAllbooks)
bookRouter.get("/GetOnebook/:id",GetOnebooks)
bookRouter.put("/updatebook/:id",updatebook)
bookRouter.post("/Addbook",Addbooks)
bookRouter.delete("/Deleatbooks/:id",Deleatbooks)


module.exports = {
    bookRouter
}