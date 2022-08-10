const { v4 } = require("uuid");
const updateFurniture = require("./updateFurniture");
const furniture = require("./furniture.json");

const add = async (newData) => {
  const newItem = { ...newData, id: v4() };
  furniture.push(newItem);

  await updateFurniture(furniture);
  return newItem;
};

module.exports = add;
