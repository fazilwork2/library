const {Router} = require("express")
const { GetAllAuthors, GetOneAuthors, AddAuthors, DeleatAuthors, updateAuthor, Search } = require("../controller/author.ctr")
const auhtorValidationMiddleeare = require("../middleware/auhtor.validation.middleeare")

const authorRouter =  Router() 


authorRouter.get("/GetAllAuthors",GetAllAuthors)
authorRouter.get("/GetOneAuthors/:id",GetOneAuthors)
authorRouter.put("/updateAuthor/:id",updateAuthor)
authorRouter.post("/AddAuthors",auhtorValidationMiddleeare,AddAuthors)
authorRouter.get("/search",Search)
authorRouter.delete("/DeleatAuthors/:id",DeleatAuthors)


module.exports = {
    authorRouter
}