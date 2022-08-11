const { NotFound } = require("http-errors");
const modulesOperations = require("../../model/modules");

const getById = async (req, res, next) => {
  const { id } = req.params;
  const module = await modulesOperations.getById(id);

  if (!module) {
    throw new NotFound(`Module with id=${id} not found`);
  }

  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      result: module,
    },
  });
};

module.exports = getById;
