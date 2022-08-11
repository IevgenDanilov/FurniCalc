const updateModules = require("./updateModules");
const modules = require("./modules.json");

const updateById = async (id, updateData) => {
  const idx = modules.findIndex((item) => item.id === id);
  if (idx === -1) return `Елемент з номером ${id} не знайдено`;
  modules[idx] = { ...updateData, id };
  await updateModules(modules);
  return modules[idx];
};

module.exports = updateById;
