const updateFurniture = require("./updateFurniture");
const furniture = require("./furniture.json");

const removeById = async (id) => {
  const idx = furniture.findIndex((item) => item.id === id);
  if (idx === -1) return `Елемент з номером ${id} не знайдено`;
  const removeItem = furniture[idx];
  furniture.splice(idx, 1);
  await updateFurniture(furniture);
  return removeItem;
};

module.exports = removeById;
