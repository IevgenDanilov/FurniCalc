const { Module } = require("../../models");
// const modulesOperations = require("../../model/modules");

const add = async (req, res) => {
  const result = await Module.create(req.body);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = add;
