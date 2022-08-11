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
const modules = require("./modules.json");
const fs = require("fs/promises");
const path = require("path");

const modulesOperations = {
  filePath: path.join(__dirname, "modules.json"),
  modules,

  async getAll() {
    return this.modules;
  },

  async getById(id) {
    const module = this.modules.find((item) => item.id === id);
    return module ? module : null;
  },

  async add(newData) {
    const newItem = { ...newData, id: v4() };
    this.modules.push(newItem);
    await this.updateModules(this.modules);
    return newItem;
  },

  async updateModules(newModule) {
    await fs.writeFile(this.filePath, JSON.stringify(newModule));
  },

  async updateById(id, updateData) {
    const idx = this.modules.findIndex((item) => item.id === id);
    if (idx === -1) return null;
    this.modules[idx] = { ...updateData, id };
    await this.updateModules(this.modules);
    return this.modules[idx];
  },

  async removeById(id) {
    const idx = this.modules.findIndex((item) => item.id === id);
    if (idx === -1) return null;
    const removeItem = this.modules[idx];
    this.modules.splice(idx, 1);
    await this.updateModules(this.modules);
    return removeItem;
  },
};

module.exports = modulesOperations;
