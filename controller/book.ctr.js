const { default: mongoose } = require("mongoose");
const { bookModul } = require("../schema/book.schem");

const GetAllbooks = async (req, res, next) => {
  try {
    const book = await bookModul.find().populate("author","fuleName -_id");
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const Addbooks = async (req, res, next) => {
  try {
    const {
      title,
      author,
      dataOfRelis,
      desc,
      period,
      lost,
      rating,
      janr,
    } = req.body;

    await bookModul.create({
      title,
      author,
      dataOfRelis,
      desc,
      period,
      lost,
      rating,
      janr,
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

const GetOnebooks = async (req, res, next) => {
  try {
    const { id } = req.params;
    const auhtor = await bookModul.findById(id);

    if (!auhtor) {
      return res.status(404).json({
        message: "book not founded",
      });
    }

    res.status(200).json({
      auhtor,
      message: "book id finded",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


const Deleatbooks = async (req, res, next) => {
  try {
    const { id } = req.params;
    const auhtor = await bookModul.findById(id);

    if (!auhtor) {
      return res.status(404).json({
        message: "book not founded",
      });
    }

    await bookModul.findByIdAndDelete(id)

    res.status(201).json({
      message: "auhtor dealted",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updatebook = async (req, res, next) => {
  try {
    const {
      title,
      author,
      dataOfRelis,
      desc,
      period,
      lost,
      rating,
      janr,
    } = req.body;
    const { id } = req.params;
    const auhtor = await bookModul.findById(id);

    if (!auhtor) {
      return res.status(404).json({
        message: "book not founded",
      });
    }

    await bookModul.findByIdAndUpdate(id, {
      title,
      author,
      dataOfRelis,
      desc,
      period,
      lost,
      rating,
      janr,
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
  GetAllbooks,
  GetOnebooks,
  Deleatbooks,
  Addbooks,
  updatebook,
};
