const modules = require("./modules.json");

const getById = async (id) => {
  const module = modules.find((item) => item.id === id);
  return module ? module : `Елемент з номером ${id} не знайдено`;
};

module.exports = getById;
