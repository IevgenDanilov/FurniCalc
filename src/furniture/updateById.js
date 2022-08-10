const updateFurniture = require("./updateFurniture");
const furniture = require("./furniture.json");

const updateById = async (id, updateData) => {
  const idx = furniture.findIndex((item) => item.id === id);
  if (idx === -1) return `Елемент з номером ${id} не знайдено`;
  furniture[idx] = { ...updateData, id };
  await updateFurniture(furniture);
  return furniture[idx];
};

module.exports = updateById;
