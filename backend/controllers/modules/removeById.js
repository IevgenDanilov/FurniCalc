const { NotFound } = require("http-errors");

const modulesOperations = require("../../model/modules");

const removeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await modulesOperations.removeById(id);
    if (!result) {
      throw new NotFound(`Module with id=${id} not found`);
    }
    res.json({
      status: "success",
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = removeById;
