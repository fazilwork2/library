const { default: mongoose } = require("mongoose");
const { authorModul } = require("../schema/author.schem");
const customError = require("../error/custom.error");

const GetAllAuthors = async (req, res, next) => {
  try {
    const author = await authorModul.find();
    res.status(200).json(author);
  } catch (error) {
    next(error)
  }
};

const AddAuthors = async (req, res, next) => {
  try {
    const {
      fuleName,
      dataOfBirth,
      dataOfDeth,
      countOfbook,
      desc,
      Bio,
      period,
      creativity,
      region,
    } = req.body;

    await authorModul.create({
      fuleName,
      dataOfBirth,
      dataOfDeth,
      countOfbook,
      desc,
      Bio,
      period,
      creativity,
      region,
    });

    res.status(201).json({
      message: "auhtor created",
    });
  } catch (error) {
    next(error)
  }
};

const GetOneAuthors = async (req, res, next) => {
  try {
    const { id } = req.params;
    const auhtor = await authorModul.findById(id);

    if (!auhtor) {
            throw customError.BadRequest(404,"author not found")

    }

    res.status(200).json({
      auhtor,
      message: "author id finded",
    });
  } catch (error) {
    next(error)
  }
};
const Search = async (req, res, next) => {
  try {
    const {fuleName} = req.query
    const author = await authorModul.find({
      $or:[
        {fuleName:{$regex:fuleName,$options:`i`}}
      ]
    })
    res.status(200).json(author);
  } catch (error) {
    next(error)
  }
};


const DeleatAuthors = async (req, res, next) => {
  try {
    const { id } = req.params;
    const auhtor = await authorModul.findById(id);

    if (!auhtor) {
            throw customError.BadRequest(404,"author not found")

    }

    await authorModul.findByIdAndDelete(id)

    res.status(201).json({
      message: "auhtor dealted",
    });

  } catch (error) {
   next(error)
  }
};

const updateAuthor = async (req, res, next) => {
  try {
    const {
      fuleName,
      dataOfBirth,
      dataOfDeth,
      countOfbook,
      desc,
      Bio,
      period,
      creativity,
      region,
    } = req.body;
    const { id } = req.params;
    const auhtor = await authorModul.findById(id);

    if (!auhtor) {
      throw customError.BadRequest(404,"author not found")
    }

    await authorModul.findByIdAndUpdate(id, {
      fuleName,
      dataOfBirth,
      dataOfDeth,
      countOfbook,
      desc,
      Bio,
      period,
      creativity,
      region,
    });

    res.status(201).json({
      message: "auhtor updated",
    });
  } catch (error) {
    next(error)
  }
};

module.exports = {
  GetAllAuthors,
  GetOneAuthors,
  DeleatAuthors,
  AddAuthors,
  updateAuthor,
  Search
};
