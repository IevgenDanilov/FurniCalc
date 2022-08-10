// const getAll = require("./getAll");
// const getById = require("./getById");
// const add = require("./add");
// const updateById = require("./updateById");
// const removeById = require("./removeById");

// module.exports = {
//   getAll,
//   getById,
//   add,
//   updateById,
//   removeById,
// };

// Calls

const { v4 } = require("uuid");
const furniture = require("./furniture.json");
const fs = require("fs/promises");
const path = require("path");

const furnitureOperations = {
  filePath: path.join(__dirname, "furniture.json"),
  furniture,

  async getAll() {
    return this.furniture;
  },

  async getById() {
    const furnitureItem = this.furniture.find((item) => item.id === id);
    return furnitureItem
      ? furnitureItem
      : `Елемент з номером ${id} не знайдено`;
  },

  async add(newData) {
    const newItem = { ...newData, id: v4() };
    this.furniture.push(newItem);
    await this.updateFurniture(this.furniture);
    return newItem;
  },

  async updateFurniture(newFurniture) {
    await fs.writeFile(this.filePath, JSON.stringify(newFurniture));
  },

  async updateById(id, updateData) {
    const idx = this.furniture.findIndex((item) => item.id === id);
    if (idx === -1) return `Елемент з номером ${id} не знайдено`;
    this.furniture[idx] = { ...updateData, id };
    await this.updateFurniture(this.furniture);
    return this.furniture[idx];
  },

  async removeById(id) {
    const idx = this.furniture.findIndex((item) => item.id === id);
    if (idx === -1) return `Елемент з номером ${id} не знайдено`;
    const removeItem = this.furniture[idx];
    this.furniture.splice(idx, 1);
    await this.updateFurniture(this.furniture);
    return removeItem;
  },
};

module.exports = furnitureOperations;
