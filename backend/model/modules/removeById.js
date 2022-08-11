const updateModules = require("./updateModules");
const modules = require("./modules.json");

const removeById = async (id) => {
  const idx = modules.findIndex((item) => item.id === id);
  if (idx === -1) return `Елемент з номером ${id} не знайдено`;
  const removeModule = modules[idx];
  modules.splice(idx, 1);
  await updateModules(modules);
  return removeModule;
};

module.exports = removeById;
