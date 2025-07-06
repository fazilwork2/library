const { default: mongoose } = require("mongoose");
const { authorModul } = require("../schema/author.schem");

const GetAllAuthors = async (req, res, next) => {
  try {
    const author = await authorModul.find();
    res.status(200).json(author);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
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
    res.status(500).json({
      message: error.message,
    });
  }
};

const GetOneAuthors = async (req, res, next) => {
  try {
    const { id } = req.params;
    const auhtor = await authorModul.findById(id);

    if (!auhtor) {
      return res.status(404).json({
        message: "author not founded",
      });
    }

    res.status(200).json({
      auhtor,
      message: "author id finded",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const DeleatAuthors = async (req, res, next) => {
  try {
    const { id } = req.params;
    const auhtor = await authorModul.findById(id);

    if (!auhtor) {
      return res.status(404).json({
        message: "author not founded",
      });
    }

    await authorModul.findByIdAndDelete(id)

    res.status(201).json({
      message: "auhtor dealted",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
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
      return res.status(404).json({
        message: "author not founded",
      });
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
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  GetAllAuthors,
  GetOneAuthors,
  DeleatAuthors,
  AddAuthors,
  updateAuthor,
};
