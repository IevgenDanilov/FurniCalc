const modulesOperations = require("../../model/modules");

const getAll = async (req, res, next) => {
  try {
    const modules = await modulesOperations.getAll();
    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        result: modules,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
