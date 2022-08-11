const { NotFound } = require("http-errors");

const modulesOperations = require("../../model/modules");

const updateById = async (req, res) => {
  const { id } = req.params;
  const result = await modulesOperations.updateById(id, req.body);
  if (!result) {
    throw new NotFound(`Module with id=${id} not found`);
  }
  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = updateById;
