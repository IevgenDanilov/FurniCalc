const modulesOperations = require("../../model/modules");

const getAll = async (req, res, next) => {
  const modules = await modulesOperations.getAll();
  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      result: modules,
    },
  });
};

module.exports = getAll;
