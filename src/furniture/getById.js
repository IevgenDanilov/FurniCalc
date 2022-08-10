const furniture = require("./furniture.json");

const getById = async (id) => {
  const furnitureItem = furniture.find((item) => item.id === id);
  return furnitureItem ? furnitureItem : `Елемент з номером ${id} не знайдено`;
};

module.exports = getById;
