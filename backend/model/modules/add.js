const { v4 } = require("uuid");
const updateModules = require("./updateModules");
const modules = require("./modules.json");

const add = async (newData) => {
  const newModule = { ...newData, id: v4() };
  modules.push(newModule);

  await updateModules(modules);
  return newModule;
};

module.exports = add;
